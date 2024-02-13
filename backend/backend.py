from fastapi import FastAPI, HTTPException
import json
import time
import os
from backend.scrapper.github_profile_scrapper import main as scrape_data
from backend.scrapper.github_profile_scrapper import download_markdown_from_url
app = FastAPI()

cd = os.path.dirname(os.path.realpath(__file__))

GITHUB_PROFILE_URL = "https://raw.githubusercontent.com/GameTL/GameTL/main/README.md"
SCRAPE_CACHE_FILE = cd +'cache/scrape_data_cache.json'
SCRAPE_CACHE_EXPIRY = 900  # 15 minutes in seconds

MARKDOWN_CACHE_FILE = cd +'cache/markdown_data_cache.md'
MARKDOWN_CACHE_EXPIRY = 3600  # 1 hour in seconds

def is_cache_valid(last_run_file, cache_expiry):
    try:
        return time.time() - os.path.getmtime(last_run_file) < cache_expiry
    except FileNotFoundError:
        return False

def is_cache_exist(last_run_file, cache_expiry):
    try:
        return os.path.isfile(os.path.join(cd, last_run_file)) and os.path.isfile(os.path.join(cd, cache_expiry))
    except FileNotFoundError:
        return False

def same_md_len(content1 ,content2) -> bool:
    return len(content1) == len(content2)


def read_md_cache() -> str:
    with open(MARKDOWN_CACHE_FILE, 'rb') as file:
        return file.read()

def write_md_cache(data):
    with open(MARKDOWN_CACHE_FILE, 'w') as file:
        file.write(data)

def read_json_cache() -> json:
    with open(SCRAPE_CACHE_FILE, 'r') as file:
        json.loads(SCRAPE_CACHE_FILE)

def write_json_cache(data):
    with open(SCRAPE_CACHE_FILE, 'w') as file:
        json.dump(SCRAPE_CACHE_FILE, file, indent=4)


@app.get("/api/get-scraped-data")
def get_scraped_data():

    # check if the cache is valid
    # if yes, return the cached data
    # if yes, download md file, check if there's changes,
    # if same, return the cached data
    # if no, scape data, write to cache, return the data
    if is_cache_exist(SCRAPE_CACHE_FILE, MARKDOWN_CACHE_FILE):
        if is_cache_valid(MARKDOWN_CACHE_FILE, MARKDOWN_CACHE_EXPIRY):
            return read_json_cache()
        else:
            # download markdown file
            markdown_string = download_markdown_from_url(GITHUB_PROFILE_URL)
            #check same length
            if same_md_len(read_md_cache(), markdown_string):
                # current same as cache
                return read_json_cache()
    data = scrape_data()
    print(f"scraped data: {data=}")

    write_md_cache(data[1])
    write_json_cache(data[0])
    return data[0]

# @app.get("/get-markdown-data")
# async def get_markdown_data():
#     if is_cache_valid(MARKDOWN_CACHE_FILE, LAST_MARKDOWN_RUN_FILE, MARKDOWN_CACHE_EXPIRY):
#         data = read_cache(MARKDOWN_CACHE_FILE)
#     else:
#         data = process_markdown()
#         write_cache(data, MARKDOWN_CACHE_FILE, LAST_MARKDOWN_RUN_FILE)
#     return data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
