import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Hero from "@/components/Walkie2/Hero"
import Info from "@/components/Walkie2/Info"
import Tasks from "@/components/Walkie2/Tasks"

export default function Page() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Engineering Innovator Club">
      <Hero />
      <Info />
      <Tasks />
    </DescribeRoute>
  )
}
