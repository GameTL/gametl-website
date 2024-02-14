import Project from "../components/Project/Project"; // Assuming Robots.js is in the same folder
import { DescribeRoute } from "@/components/Meta/DescribeRoute";

export default function Page() {
  return (
    <DescribeRoute
      title="Projects: Game Limsila"
      description="All documented projects by Game"
    >
      <Project />
    </DescribeRoute>
  );
}
