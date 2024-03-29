import Video from "@/components/common/Video"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"
import Hero from "misc/oldPages/Walkie1/Hero"
import Info from "misc/oldPages/Walkie1/Info"

export default function Page() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Hero />
      <Info />
      <Video src="https://www.youtube.com/embed/qY5Un-Skkgw" />
    </DescribeRoute>
  )
}
