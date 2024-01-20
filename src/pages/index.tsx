import Hero from "@/components/Home/Hero"
import Vision from "@/components/Home/Vision"
import Achievement from "@/components/Home/Achievement"
// import Robocup from "misc/Robocup"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function Page() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Portfolio of Game Limsila" imgURL="./OG-Banner.jpg">
      <Hero />
      {/* <Vision /> */}
      {/* <Robocup /> */}
      {/* <Achievement /> */}
    </DescribeRoute>
  )
}
