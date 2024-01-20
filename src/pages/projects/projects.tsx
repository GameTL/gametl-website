
import Image from "next/image";
import jsonData from "/Users/game/Documents/github-personal/gametl-website/backend/output.json";
import { DescribeRoute } from "@/components/Meta/DescribeRoute";
import {
  CardGrid,
  CardGridProps,
} from "../../components/common/Cards/CardGrid";

// const jsonData = [
//   {
//     year: 2023,
//     title: "Collection of programmes for Turtlebot3 Burger",
//     description:
//       "Python, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell BashPython, Shell Bash",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2023,
//     title: "GTA Controller Binding for ROS2 Robots",
//     description: "Python",
//     pageLink: "https://example.com/page-two",
//     githubLink: "https://example.com/page-two",
//     liveLink: "https://www.github.com/gametl",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2023,
//     title: "IMDb-based Movie Curator",
//     description: "Streamlit, Sklearn, Selenium",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2022,
//     title: "Snake Game Using Index Finger Computer Vision",
//     description: "OpenCV",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2022,
//     title: "Encoder Reader Using Arduino connected to Python",
//     description: "Arduino C++, Python, Platform.io",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2019,
//     title: "🎓 Google Classroom Attendance Bot for Morning Classes",
//     description: "Selenium, deathwish..",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
//   {
//     year: 2019,
//     title: "Simple Rock Paper Scissor Game",
//     description: "terrible code. first game.",
//     pageLink: "https://example.com/page-two",
//     imagePath: "path/to/image-two.jpg",
//   },
// ];
//TODO ADD STREAMLIT LOGO TO THE CARDS

export function Page() {
  return (
    <DescribeRoute
      title="Portfolio: Game Limsila"
      description="Engineering Innovator Club"
      imgURL="./OG-Banner.jpg"
    >

      <div className="container mx-auto px-4">
        <CardGrid data={jsonData} />
      </div>



    </DescribeRoute>
  );
}



