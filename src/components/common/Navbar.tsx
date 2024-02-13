import Typography from "@/components/common/Typography";
import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const navigation = [
  { title: "Home", url: "/" },
  { title: "Experience & Events", url: "/experiences" },
  { title: "Projects", url: "/projects" },
  { title: "Publications", url: "/publications" },
  { title: "About me & Contacts", url: "/contacts" },
];

export default function Navbar() {
  const router = useRouter();
  const location = useMemo(() => {
    return `/${router.pathname.split("/")[1]}`;
  }, [router]);

  return (
    <Disclosure
      as="header"
      className="fixed left-0 top-0 z-50 mb-4 w-full bg-backGroundColor transition-all duration-150 ease-out sm:relative sm:py-4  "
    >
      {({ open }) => (
        <>
          {/* <nav className="sticky flex items-center justify-center  px-6 py-4 md:mx-24 "> */}
          <nav className="  sm:mx-16 md:mx-24 xl:mx-40 ">
            {/* <ul className="hidden h-auto justify-between snap-center md:flex"> */}
            <ul className="-ml-2 hidden items-start justify-between md:flex">
              {navigation.map((item) => (
                <li key={item.url}>
                  <Link href={item.url} passHref>
                    <a>
                      <Typography
                        type="span"
                        className={clsx(
                          "rounded-xl text-xl font-light ",
                          "hover:text-accentColor",
                          // normal effect without inactive bling
                          "bg-backGroundColor transition-all duration-300",
                          "hover:shadow-[0.625rem_0.625rem_0.875rem_0.5rem_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0.5rem_rgb(255,255,255)]",

                          "flex h-auto w-auto items-center justify-center px-6 py-4 text-center", //text
                          // location === item.url && "bg-accentColor shadow text-textPrimaryColor transition-colors hover:bg-gray-800"
                          location === item.url &&
                            clsx(
                              "hover:text-textPrimaryColor",
                              "hover:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]",
                              "p-10 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(200,200,200),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)]"
                              // " w-[8rem] h-[8rem] rounded-md bg-purple-7 py-4 [&>*:hover]:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)][&>*>div]:w-16 [&>*>div]:h-16 [&>*>div]:rounded-full [&>*>div]:text-white [&>*>div]:flex [&>*>div]:items-center [&>*>div]:justify-center [&>*>div]:mx-auto [&>*>h2]:text-[0.8rem] [&>*>h2]:mt-4 [&>*>h2]:text-center"
                            )
                        )}
                      >
                        {item.title}
                      </Typography>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu */}
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </nav>

          {/* Mobile Nav */}
          <Transition
            show={open}
            as="div"
            enter="transition ease-in-out duration-500 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            className="absolute inset-x-0 z-20 flex min-h-screen justify-end bg-backGroundColor pr-8 sm:hidden"
          >
            <Disclosure.Panel as="div">
              {({ close }) => (
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Link href={item.url} key={item.title} passHref>
                      <Disclosure.Button
                        as="a"
                        href="#"
                        onClick={() => {
                          close();
                        }}
                        className={clsx(
                          location === item.url ? "underline" : "no-underline",
                          "text-20 flex justify-end py-2 pl-3 pr-4 font-bold"
                        )}
                      >
                        {item.title}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
