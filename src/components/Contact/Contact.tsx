import Image from "next/image";
import Link from "next/link";
import Typography from "../common/Typography";
import LinkButton from "../common/LinkButton";
import {
  SocialFacebook,
  SocialInstagram,
  SocialYoutube,
} from "../materials/Socials";

export default function Contact() {
  return (
    <section className="relative h-screen overflow-hidden sm:text-sm md:text-lg">
      <div className="flex items-center justify-center">
        <LinkButton href="https://www.instagram.com/gametl02" size="lg" defaultMargin>
          Instagram | @gametl02
        </LinkButton>
        <LinkButton href="https://www.linkedin.com/gametl" size="lg" defaultMargin>
          LinkedIn | gametl
        </LinkButton>
        <LinkButton
          href="https://www.youtube.com/channel/UCQGAyCl6LsGukYzBTWf9rVw"
          size="lg"
          defaultMargin
        >
          Youtube | GameTL
        </LinkButton>
      </div>
      <div className="relative z-10 m-10 text-center">
        <Typography
          type="h1"
          className="pt-20 font-display text-2xl"
          custom={true}
        >
          limsila.limsila@gmail.com
        </Typography>
        {/* <Typography
          type="caption"
          className="text-red my-4 flex justify-center text-center font-display text-[#D24E45] md:px-40 lg:px-96"
        >
        </Typography> */}

        {/* <div className="flex justify-center gap-4">
          <Link href="https://www.facebook.com/eicchulalongkorn/" passHref>
            <a>
              <SocialFacebook className="h-10 w-10 text-black transition-colors hover:text-accentColor" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/eic_chula/">
            <a>
              <SocialInstagram className="h-10 w-10 text-black transition-colors hover:text-accentColor" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@eic_chula">
            <a>
              <SocialYoutube className="h-10 w-10 text-black transition-colors hover:text-accentColor" />
            </a>
          </Link>
        </div> */}
      </div>


      {/* <div className="absolute left-1/2 max-w-6xl -translate-x-1/2">
        <Image
          src="/assets/building-1.png"
          alt="EIC Building"
          className="w-full"
          width={1870}
          height={1131}
        />
      </div> */}
    </section>
  );
}
