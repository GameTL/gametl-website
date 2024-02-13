import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Hero from "misc/oldPages/Walkie2/Hero"
import Info from "misc/oldPages/Walkie2/Info"
import Tasks from "misc/oldPages/Walkie2/Tasks"

export default function Page() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Engineering Innovator Club">
      <Hero />
      <Info />
      <Tasks />
    </DescribeRoute>
  )
}
