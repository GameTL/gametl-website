import clsx from "clsx"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Typography from "./Typography"
// import Sponsor from "./Sponsor"

export default function Footer() {
  const router = useRouter()
  const theme = useMemo(() => {
    const pathnames = router.pathname.split("/")
    const route = pathnames[1]
    if (route === "") return "backGroundColor"
    else if (route === "robots") {
      if (pathnames.length > 2) return "accentColor"
      else return "backGroundColor"
    } else if (route === "contact") {
      return "none"
    } else return "accentColor"
  }, [router])

  return (
    <footer
      className={clsx(
        "p-10 text-center",
        theme === "backGroundColor" && "bg-backGroundColor text-gray-900",
        theme === "accentColor" && "bg-accentColor text-white"
      )}
    >
      {theme !== "none" && (
        <>
          {/* <Sponsor theme={theme} /> */}
          <Typography className="text-xs font-bold"> Website created by GameTL Tinapat Limsila</Typography>
        </>
      )}
    </footer>
  )
}
