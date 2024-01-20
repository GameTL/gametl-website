text = """(2023) 🤖 Collection of programmes for Turtlebot3 Burger(Python, Shell Bash)
(2023) 🤖 GTA Controller Binding for ROS2 Robots(Python)
(2023) 🤖 IMDb-based Movie Curator(Streamlit, Sklearn, Selenium) [Presentation] [Live]
(2022) 🐍 Snake Game Using Index Finger Computer Vision(OpenCV)
(2022) 🛞 Encoder Reader Using Arduino connected to Python(Arduino C++, Python, Platform.io)
(2019) 👩‍🎓 Google Classroom Attendance Bot for Morning Classes(Selenium, deathwish..)
(2019) 🤦 Simple Rock Paper Scissor Game(terrible code. first game.)"""

x = []
for line in text.splitlines():
    year = line[1:5:]
    therest = line[9:].split("(")
    thetherest = therest[1].split(")")
    # print(year)
    # print(therest[0])
    # print(thetherest[0])
    x.append({
     "year": year,
     'title':     therest[0],
     "description"     :thetherest[0]
    })
    # print(year)

print(x)
# import json
# json.loads(x)