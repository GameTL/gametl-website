import Link from "next/link";
import clsx from "clsx";
import { ReactNode, useMemo } from "react";

interface ButtonProps {
  size?: "sm" | "md" | "lg" | "xl";
  href: string;
  className?: string;
  accentColor?: boolean;
  children: ReactNode;
  buttonLogo?: ReactNode | undefined;
  pillRound?: boolean;
  defaultMargin?: boolean;
}

export default function LinkButton({
  size = "md",
  href,
  className,
  children,
  buttonLogo,
  pillRound = false,
  defaultMargin = false,
  ...props
}: ButtonProps) {
  const textSize = useMemo(() => {
    switch (size) {
      case "sm":
        return "text-md";
      case "md":
        return "text-lg";
      case "lg":
        return "text-xl";
      case "xl":
        return "text-2xl";
      default:
        return "text-base";
    }
  }, [size]);

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          "px-7 py-3",
          "max-h-16",
          "inline-flex items-center justify-center rounded-full text-center font-display",
          "hover:text-accentColor",
          // normal effect
          "bg-backGroundColor transition-all duration-300",
          "shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
          "hover:shadow-[0.625rem_0.625rem_0.875rem_0.5rem_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0.5rem_rgb(255,255,255)]",
          "text-textPrimaryColor",
          pillRound ? "rounded-full" : "rounded-xl",
          defaultMargin ? "m-10" : "",
          className,
          textSize
        )}
        {...props}
      >
        {buttonLogo && <span className="mr-2 h-6 w-6">{buttonLogo}</span>}

        {children}
      </a>
    </Link>
  );
}
