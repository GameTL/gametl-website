import Contact from "@/components/Contact/Contact"
import { DescribeRoute } from "@/components/Meta/DescribeRoute"

export default function ContactPage() {
  return (
    <DescribeRoute title="Contacts: Game Limsila" description="Engineering Innovator Club" >
      <Contact />
    </DescribeRoute>
  )
}
