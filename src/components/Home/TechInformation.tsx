import clsx from "clsx";
import Link from "next/link";
import Typography from "../common/Typography";
import { ReactLogo, NextJsLogo, TailWindLogo } from "../materials/Tech";
const TechInformation = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden px-8 py-36 ">

      <div className={clsx(
        "overflow-hidden rounded-lg",
        // normal effect
        "bg-backGroundColor transition-all duration-300",
        "shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
        "hover:shadow-[0.625rem_0.625rem_0.875rem_0.5rem_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0.5rem_rgb(255,255,255)]",
        "text-textPrimaryColor",
      )}>
        <div className="px-6 py-6">
          <Typography type="p" className="font-display  text-xl text-accentColor px-2" >
          {"Website's Tech Stack"}
          </Typography>
          {/* Grey bar divider */}
          <hr className="h-px my-4 border-0 bg-slate-300"></hr>


          <div className="container flex gap-4 hover:">
            <Link href="https://react.dev" passHref>
              <a>
                <ReactLogo className=" h-48 w-48 p-8 text-black transition-colors hover:text-accentColor" />
              </a>
            </Link>
            <Link href="https://tailwindcss.com/" passHref>
              <a>
                <TailWindLogo className=" h-48 w-48 p-8 text-black transition-colors hover:text-accentColor" />
              </a>
            </Link>
            <Link href="https://nextjs.org" passHref>
              <a>
                <NextJsLogo className=" h-48 w-48 p-8 text-black transition-colors hover:text-accentColor" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechInformation;
