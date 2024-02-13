import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Publications from "@/components/Publications"

export default function Page() {
  return (
    <DescribeRoute title="Publications: Game Limsila" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Publications/>
    </DescribeRoute>
  )
}
