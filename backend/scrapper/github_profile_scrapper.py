import os
import json
from datetime import datetime
from typing import Set
from pydantic import BaseModel, PositiveInt
import re
from termcolor import colored
import requests
import yaml
from markdown_it import MarkdownIt
from rich.pretty import pprint
from bs4 import BeautifulSoup
import time
import asyncio
import aiohttp

# Params
# default_image_path = "/assets/place-holder-1.webp"
default_image_path = "assets/projects/place-holder-1.webp"

#
class Project(BaseModel):
    # pprint(project1, expand_all=True)
    year : PositiveInt = 2024
    title : str = ""
    description : str = ""
    pageLink : str = ""
    githubLink : str = ""
    presentationLink : str = ""
    liveLink : str = ""
    extraLink : str = ""
    imagePath : str = ""
    keys : tuple = ()

def download_markdown_from_url(url, path=False) -> str:
    # Download the Markdown content
    response = requests.get(url)
    if response.status_code != 200:
        return "Failed to download the content."
    if path:
        open(path, 'wb').write(response.content)
    return response.text # The Markdown content

def extract_headings_and_content_from_markdown_string(markdown_string) -> dict[str, str]:
    # Parse the Markdown content
    md = MarkdownIt()
    tokens = md.parse(markdown_string)

    # Process tokens to extract headings and their content
    headings_content = {}
    current_heading = None
    current_content = []

    for token in tokens:
        if token.type == "heading_open":
            # Save the current heading and content (if any)
            if current_heading:
                headings_content[current_heading] = '\n'.join(current_content)
                current_content = []
            current_heading = None  # Reset heading for the next one
        elif token.type == "inline" and current_heading is None:
            # This is the text of a heading
            current_heading = token.content
        elif current_heading and token.type == "inline":
            # Content under a heading
            current_content.append(token.content)
        # Add more conditions here if you want to handle other types like comments
    # Add the last heading and its content
    if current_heading:
        headings_content[current_heading] = '\n'.join(current_content)

    return headings_content

def extract_project_props(line) -> Project:
    pattern_dict = {
        "link_pattern" : r"\[([^\]]+)\]\(([^)]+)\)",
        "keys_pattern" : r"\(([^)]+)\)",
        "bracket_pattern" : r"\\\[\[([^\]]+)\]\(([^)]+)\)\\\]",
    }
    # Split the line and extract basic info
    parts = line.split("   ")
    raw_year = parts[0].strip("()")
    title_link_part = parts[1]

    # Extract year and title
    year = int(raw_year)  # Directly converting to int for type checking
    title_link_match = re.match(pattern_dict["link_pattern"], title_link_part)

    # Initialize project with year
    project = Project(year=year)

    # Directly set the title and links
    if title_link_match:
        project.title = title_link_match.group(1)
        link = title_link_match.group(2)
        if "github" in link:
            project.githubLink = link
        else:
            project.pageLink = ""
    else:
        project.title = title_link_part

    # Process additional attributes (if any)
    for part in parts[2:]:
        # print("chekcing", x[index])
        current_match = re.match(pattern_dict["keys_pattern"], part)
        if current_match:
            keys_str = current_match.group(1)
            keys_tuple = tuple(map(str.strip, keys_str.split(',')))  # Convert to a tuple
            project.keys = keys_tuple
        else:
            current_match = re.match(pattern_dict["bracket_pattern"], part)
            if current_match:
                # print(current_match.group(1))

                if current_match.group(1) == "Live":
                    # print(colored("found Live", 'blue'))
                    project.liveLink = current_match.group(2)
                elif current_match.group(1) == "Presentation":

                    # print(colored("found Presentation", 'blue'))
                    project.presentationLink= current_match.group(2)
                else :
                    project.extraLink= current_match.group(2)
    return project

def headings_content_to_Projects(headings_content) -> list[Project]:
    temp_list = []

    for heading, content in headings_content.items():
        if "project" in heading.lower():
            # print(f"Heading: {heading}\nContent:\n{content}\n")
            list_of_contents = content.split("\n")
            for i in list_of_contents:
                project_obj = extract_project_props(i)
                # pprint(project_obj)
                temp_list.append(project_obj)
    return temp_list

async def getDescriptionFromGithubLink(githubLink: str) -> str:
    async with aiohttp.ClientSession() as session:
        async with session.get(githubLink) as response:
            # Parse the HTML with BeautifulSoup
            html_content = await response.text()
            # Find the <h2> tag with text 'About'
            soup = BeautifulSoup(html_content, 'lxml')
            # Navigate to the next <p> tag
            about_tag = soup.find('h2', string='About')
            if about_tag:
                about_content = about_tag.find_next('p')
                if about_content:
                    return about_content.text.strip()
            return ""

async def null_coroutine():
    return None

async def override_attrbuties_and_export_json(list_Projects: list[Project]) -> list[dict]:
    start_time = time.perf_counter()

    # Load custom attributes from YAML file
    with open(f"{os.path.dirname(os.path.realpath(__file__))}/custom_attrbuties.yaml", "r") as file:
        custom_attributes = yaml.safe_load(file)

    # Create a list of coroutine objects for projects that have a GitHub link
    tasks = [getDescriptionFromGithubLink(project.githubLink) if project.githubLink else null_coroutine() for project in list_Projects ]
    # pprint(tasks)

    # Run the coroutines concurrently and wait for all to complete
    descriptions = await asyncio.gather(*tasks)
    pprint(descriptions)

    # Process the descriptions and update the projects
    for project, description in zip(list_Projects, descriptions):
        # project.imagePath = "/assets/place-holder.png"
        project.imagePath = default_image_path
        if project.title in custom_attributes:
            for key, value in custom_attributes[project.title].items():
                print(colored(f"found {key} in {project.title}", 'blue'))
                setattr(project, key, value)

        if description:
            # print(colored(f"found ghlink", 'blue'))
            # print(colored(f'{description=}', 'blue'))
            project.description = description

    list_dicts = [proj.model_dump() for proj in list_Projects]
    sorted_list = sorted(list_dicts, key=lambda x: x["year"], reverse=True)
    # pprint(sorted_list)

    # Write to a JSON file
    with open(f'{os.path.dirname(os.path.realpath(__file__))}/projects_scrapped.json', 'w') as file:
        json.dump(sorted_list, file, indent=4)

    end_time = time.perf_counter()
    print(f"Function executed in {end_time - start_time:0.4f} seconds")

    # pprint(list_dicts)

    return list_dicts

JSON = int | str | float | bool | None | list["JSON"] | dict[str, "JSON"]
JSONObject= dict[str, JSON]

def main() -> tuple[JSONObject, str]:
    # URL of the Markdown file
    url = "https://raw.githubusercontent.com/GameTL/GameTL/main/README.md"
    start_time = time.time()
    markdown_string = download_markdown_from_url(url)
    headings_content = extract_headings_and_content_from_markdown_string(markdown_string)
    list_Projects = headings_content_to_Projects(headings_content)

    # sync version = 8.448 seconds
    # override_attrbuties_and_export_json(list_Projects)

    # async version(nested w/aiohttp) = 0.8234 seconds and async version(non-nested) = 1.080 seconds
    x = asyncio.run(override_attrbuties_and_export_json(list_Projects))

    print(time.time() - start_time)

    return x , markdown_string

if __name__ == "__main__" :
    main()



# # Example usage
# line0 = "(2023)   👨‍⚖️ App for Networking(Flutter)   \[[Live](https://flutter-app-one.vercel.app/)\]"
# line1 = "(2023)   [🤖 EIC Robocup Website](https://github.com/robocup-eic/eic-website)   (Next.js, TailwindCSS)   \[[Live](https://eicrobocup.com)\]"
# # print(str(extract_content(line0)))
# print(extract_project_props(line0).model_dump())

