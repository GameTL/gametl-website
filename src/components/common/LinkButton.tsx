import Link from "next/link";
import clsx from "clsx";
import { ReactNode, useMemo } from "react";
import {
  SocialFacebook,
  SocialInstagram,
  SocialYoutube,
  Live,
} from "../materials/Socials";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  href: string;
  className?: string;
  accentColor?: boolean;
  children: ReactNode;
  buttonLogo?: ReactNode | undefined;
  pillRound?: boolean;
}

export function LinkButton({
  size = "md",
  href,
  className,
  children,
  buttonLogo,
  pillRound = false,
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
      default:
        return "text-base";
    }
  }, [size]);

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          pillRound ? "rounded-full" : "rounded-xl",
          "px-7 py-3",
          "max-h-16",
          "inline-flex items-center justify-center rounded-full text-center font-display",
          "shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
          "hover:text-accentColor",
          "active:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(150,150,150)]",
          "bg-backGroundColor text-primaryColor transition-all ",
          className,
          textSize
        )}
        {...props}
      >
        {/* <{...buttonLogo} className={`w-6 h-6 mr-2`} /> */}
        {buttonLogo && <span className="mr-2 h-6 w-6">{buttonLogo}</span>}

        {children}
      </a>
    </Link>
  );
}
