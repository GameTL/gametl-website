import clsx from "clsx";
import Typography from "../common/Typography";
import LinkButton from "../common/LinkButton";
import Card from "../common/Card";
import { CardGrid } from "../common/CardGrid";
import jsonData from "../../../public/experience.json";

export function Publications() {
  return (
    <section className="min-h-screen  pb-10 sm:mx-16 md:mx-24 xl:mx-40 ">
      {/* <section className="min-h-screen  sm:mx-16 md:mx-24 xl:mx-40 "> */}
      <Typography type="h1" className="">
        {"Robocup"}
      </Typography>
      <Typography type="h2" className="">
        {"Robocup2023 at Bordeux, France"}
      </Typography>
      <Typography type="p" className="font-bold">
        {"Job as Vice-President and Natural Language Processing(NLP) Lead"}
      </Typography>
      <Typography type="p" className="pb-1">
        {
          "•	Spearheaded the creation of \"Walkie 3,\" a bespoke robot for Robocup@Home, overseeing team qualifications, crafting the Team Description Paper, managing video production, and arranging logistics for Bordeaux and Bangkok competitions. Focused on the software aspects, optimizing YOLOv8 with TensorRT for enhanced computer vision efficiency."
        }</Typography>
      <Typography type="p" className="pb-1">
        {"•	Led the development of \"Walkie 3's\" brain with Python/ROS2 Humble, writing the majority of the SMACH state logic and implementing an on-the-fly state generator, streamlining complex behavior execution."}
      </Typography>
      <Typography type="p" className="pb-1">
        {"•	Developed \"Walkie 3's\" interactive face, designing a Flutter-based UI for displaying sponsors and providing live transcription, enhancing audience engagement at Robocup@Home events."}
      </Typography>
      <Typography type="p" className="pb-10">
        {
          "Technically, binding all program together to work together involving Python and ROS package development for hardware interfacing and real-time state generator. Main programmer for NLP and Computer Vision"
        }
      </Typography>
      <CardGrid data={jsonData} />
      <Typography type="h2" className="">
        {"Robocup2022 at Bangkok, Thailand"}
      </Typography>
      <Typography type="p" className="font-bold">
        {"Job as a member of the Electrical team"}
      </Typography>

      {/* Grey bar divider */}
      <hr className="h-px my-10 border-0 bg-slate-400"></hr>

      <Typography type="h1" className="">
        {"Hackathon"}
      </Typography>
      <Typography type="h2" className="">
        {"SCB 10X Hackathon 2023 | Improving Low-Resource Language LLM"}
      </Typography>
      <Typography type="p" className="font-bold">
        {"Member of the competing team"}
      </Typography>
      <Typography type="p" className="">
        {"An incredible experience! We finsihed second amognst other finalist"}
      </Typography>
      {/* Grey bar divider */}
      <hr className="h-px my-10 border-0 bg-slate-400"></hr>

      <Typography type="h1" className="">
        {"Web Dev"}
      </Typography>
      <Typography type="h2" className="">
        {"MELLA E-commerence food platform previously sponsored by AISEC"}
      </Typography>
      <Typography type="p" className="font-bold">
        {"Full Stack Developer and Backend Lead"}
      </Typography>
      <Typography type="p" className="pb-10">
        {"•	Spearheaded the development and optimization of server-side applications, enhancing systemscalability and performance."}
      </Typography>
      <Typography type="p" className="pb-10">
        {"•	Led a team in integrating APIs, databases, and storage systems to ensure seamless data flow and reliability"}
      </Typography>
      <Typography type="p" className="pb-10">
        {"•	Developed responsive user interfaces using modern frameworks (NextJS), ensuring cross-platform compatibility"}
      </Typography>

      {/* Grey bar divider */}
      <hr className="h-px my-10 border-0 bg-slate-400"></hr>

      <Typography type="h1" className="">
        {"Robocon"}
      </Typography>
      <Typography type="h2" className="">
        {"RoboCon2023 at Bangkok, Thailand. Hosted by Chulalongkorn University"}
      </Typography>
      <Typography type="p" className="font-bold">
        {"Member of the design team  "}
      </Typography>
      <Typography type="p" className="">
        {"A robot design competition with contestants from all around the world."}
      </Typography>


    </section>
  );
}
export default Publications;

/*
export default interface CardProps {
    title: string;
    year: number;
    description: string;
    pageLink: string;
    liveLink?: string;
    githubLink?: string;
    imagePath: string;
    keys?: string[];
  }
   */
