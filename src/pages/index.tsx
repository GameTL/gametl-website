import Introduction from "@/components/Home/Introduction"
import TechInformation from "@/components/Home/TechInformation"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {

  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Portfolio of Game Limsila">
      <Introduction />
      <TechInformation />
    </DescribeRoute>
  )
}
