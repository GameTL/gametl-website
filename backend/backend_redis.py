import uvicorn
import hashlib
import redis
from fastapi import FastAPI, HTTPException
import json
import os
from github_profile_scrapper import main as scrape_data
from github_profile_scrapper import download_markdown_from_url
from dotenv import load_dotenv
from rich.pretty import pprint
from time import time
import logging
import traceback

if not os.path.exists(f"{os.path.dirname(os.path.realpath(__file__))}/log"):
    print()
    os.makedirs(f"{os.path.dirname(os.path.realpath(__file__))}/log")
# Configure logging
x = logging.basicConfig(filename=f'{os.path.dirname(os.path.realpath(__file__))}/log/log.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Create a logger
logger = logging.getLogger('my_logger')

load_dotenv()
app = FastAPI()

# # Redis configuration - use environment variables for security
REDIS_HOST = os.getenv("REDIS_HOST")
REDIS_PORT = os.getenv("REDIS_PORT")
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD")
print(f"{type(REDIS_HOST)} {REDIS_HOST=}")
print(f"{type(REDIS_PORT)} {REDIS_PORT=}")
print(f"{type(REDIS_PASSWORD)} {REDIS_PASSWORD=}")

GITHUB_PROFILE_URL = "https://raw.githubusercontent.com/GameTL/GameTL/main/README.md"
SCRAPE_CACHE_KEY = "scrape_data"
MARKDOWN_CACHE_KEY = "markdown_data"
# CACHE_EXPIRY = 3600  # DEPLOYMENT: 1 hour in seconds
CACHE_EXPIRY = 1 # DEPLOYMENT: 1 hour in seconds

def get_hash(content):
    return hashlib.sha256(content.encode()).hexdigest() , time()

def is_cache_valid(cache_md):
    try:
        return time() - cache_md[1] < CACHE_EXPIRY
    except FileNotFoundError:
        return False

def get_cached_data(key):
    try:
        data = redis_client.get(key)
        if data:
            return json.loads(data)
        return None
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error accessing cache: {e}")

def set_cached_data(key, data, expiry=None):
    try:
        if expiry is not None:
            redis_client.setex(key, expiry, json.dumps(data))
        else:
            redis_client.set(key, json.dumps(data))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error setting cache: {e}")

try:
    redis_client = redis.Redis(
        host=REDIS_HOST,
        port=REDIS_PORT,
        password=REDIS_PASSWORD,
    )
    redis_client.ping()  # Test connection
except redis.RedisError:
    raise Exception("Failed to connect to Redis. Check your Redis configuration.")

data = scrape_data()
# Hash the markdown and store in python for compare
markdown_string = download_markdown_from_url(GITHUB_PROFILE_URL)
cached_markdown_hash = get_hash(markdown_string)

set_cached_data(MARKDOWN_CACHE_KEY, markdown_string)
set_cached_data(SCRAPE_CACHE_KEY, data[0])

@app.get("/api/get-scraped-data")
def get_scraped_data():
    global cached_markdown_hash
    try:
        # Condition 1: Cache is valid by time
        if is_cache_valid(cached_markdown_hash):
            logger.info('Condition 1: Cache is valid by time')
            x = get_cached_data(SCRAPE_CACHE_KEY)
            if x:
                return x

        # Condition 2: Cache is valid
        markdown_string = download_markdown_from_url(GITHUB_PROFILE_URL)
        current_markdown_hash = get_hash(markdown_string)
        # print(f"{type(current_markdown_hash)} {current_markdown_hash=}")
        # print(f"{type(cached_markdown_hash)} {cached_markdown_hash=}")
        if cached_markdown_hash[0] == current_markdown_hash[0]:
            logger.info('Condition 2: Cache is valid by hash')
            # Markdown hasn't changed, return cached scrape data
            x = get_cached_data(SCRAPE_CACHE_KEY)
            if x:
                return x

        # Condition 3: Re-scrape data
        logger.info('Condition 3: Re-scrapping data...')
        data = scrape_data()
        # Hash the markdown and store in python for compare
        cached_markdown_hash = get_hash(markdown_string)

        set_cached_data(SCRAPE_CACHE_KEY, data[0])
        logger.info('Condition 3: Re-scrapping data sucessful!')
        return data[0]
    except HTTPException as http_exc:
        tb_str = traceback.format_exc()
        # Log the exception along with traceback
        logging.error("An exception occurred: %s\n%s", http_exc, tb_str)
        raise http_exc
    except Exception as e:
        tb_str = traceback.format_exc()
        # Log the exception along with traceback
        logging.error("An exception occurred: %s\n%s", e, tb_str)
        raise HTTPException(status_code=500, detail=str(e))

# @app.get("/api/get-scraped-data")
# def get_scraped_data():

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)