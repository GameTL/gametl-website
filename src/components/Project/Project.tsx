import jsonData from "../../../backend/scrapper/projects_scrapped.json";
import { CardGrid } from "./CardGrid";
//TODO ADD STREAMLIT LOGO TO THE CARDS
function Project() {
  return (
    <div >
      <div className="container mt-16 px-4 md:mx-auto">
        <CardGrid data={jsonData} />
      </div>
    </div>
  );
}

export default Project;
