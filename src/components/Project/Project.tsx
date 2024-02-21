import jsonData from "../../../backend/scrapper/projects_scrapped.json";
import teamData from "../../../public/team_project.json";
import Typography from "../common/Typography";
import { CardGrid } from "../common/CardGrid";
//TODO ADD STREAMLIT LOGO TO THE CARDS
function Project() {
  return (
    <section className="min-h-screen  sm:mx-16 md:mx-24 xl:mx-40 ">
      <div>
        <Typography type="h1" className="">
          {"Team Project"}
        </Typography>
        <Typography type="h2" className="font-bold">
          {"(2023) 🤖 Competing Robocup2023@Home at Bordeaux, France"}
        </Typography>
        <Typography type="p" className="font-bold">
          {"Job as Vice-President and Natural Language Processing(NLP) Lead"}
        </Typography>
        <div className="container my-6 px-4 md:mx-auto">
          <CardGrid data={teamData} />
        </div>

        {/* Grey bar divider */}
        <Typography type="h1" className="">
          {"Personal Project"}
        </Typography>
        <hr className="my-10 h-px border-0 bg-slate-400"></hr>

        <div className="container mt-16 px-4 md:mx-auto">
          <CardGrid data={jsonData} />
        </div>
      </div>
    </section>
  );
}

export default Project;
