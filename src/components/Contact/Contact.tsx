
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
      <div className="flex items-center justify-center">

        <ol className="relative border-s border-accentColor dark:border-gray-700 ">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-accentColor rounded-full mt-2.5 -start-1.5 border dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2024</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nanyang Technological University</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Exchange at School of Electrical and Electronic Engineering</p>
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></a> */}
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-accentColor rounded-full mt-2.5 -start-1.5 border dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2025</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chulalongkorn University, Bangkok, Thailand</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelor in Robotics and Artifical Intelligence Engineering</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-accentColor rounded-full mt-2.5 -start-1.5 border dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lanna International School, Chaing Mai, Thailand</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cambrige International Examination A-Levels </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">  - Physics</p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">  - Computer Science</p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">  - Maths (Mechanics and Statistic)</p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">  - Chemistry</p>
          </li>
        </ol>


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
