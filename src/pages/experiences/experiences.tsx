import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import RobotList from "@/components/Robots"

export function Page() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <RobotList />
    </DescribeRoute>
  )
}
