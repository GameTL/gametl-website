import { ReactNode } from "react"
import clsx from "clsx"

/* How to use
<Typography type="h1" className="font-display md:text-8xl text-accentColor" >
            Tinapat Limsila
            Porfolio
          </Typography>
*/
interface TypographyProps {
  type?: "h1" | "h2" | "h3"| "h4" | "h5" | "p" | "span" | "grid" | "caption"
  className?: string
  children: ReactNode
  custom?: Boolean
}
//FUCK
export default function Typography({ type, className, children, custom }: TypographyProps) {
  function getClassName(cn: string) {
    return clsx(cn, className, "font-display")
  }

  switch (type) {
    case "h1":
      return (
        <h1
          className={
            custom && className ? getClassName(className) : getClassName("text-[98px] font-medium xl:text-[120px]")
          }
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 className={custom && className ? getClassName(className) : getClassName("text-2xl font-bold text-textPrimaryColor")}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 className={custom && className ? getClassName(className) : getClassName("text-2xl font-bold text-textPrimaryColor")}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 className={custom && className ? getClassName(className) : getClassName("text-2xl font-bold text-textPrimaryColor")}>
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5 className={custom && className ? getClassName(className) : getClassName("text-lg font-bold text-textPrimaryColor")}>
          {children}
        </h5>
      )
    case "p":
      return (
        <p className={custom && className ? getClassName(className) : getClassName("text-lg font-base text-textPrimaryColor")}>
          {children}
        </p>
      )
    case "caption":
      return (
        <p className={custom && className ? getClassName(className) : getClassName("text-md px-3 pt-2 font-medium")}>
          {children}
        </p>
      )
    case "grid":
      return (
        <span
          className={
            custom && className ? getClassName(className) : getClassName("min-h-[50px] rounded-lg bg-red-500 shadow-xl")
          }
        >
          {children}
        </span>
      )
    case "span":
      return (
        <span className={custom && className ? getClassName(className) : getClassName("text-md font-medium")}>
          {children}
        </span>
      )

    default:
      return (
        <p className={custom && className ? getClassName(className) : getClassName("text-md font-medium")}>
          {children}
        </p>
      )
  }
}
