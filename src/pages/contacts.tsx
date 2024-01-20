import Contact from "@/components/Contact/Contact"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function ContactPage() {
  return (
    <DescribeRoute title="Portfolio: Game Limsila" description="Engineering Innovator Club" imgURL="./OG-Banner.jpg">
      <Contact />
    </DescribeRoute>
  )
}
