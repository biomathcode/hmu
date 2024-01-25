import {
  BackpackIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  Pencil1Icon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "../ThemeToggle";

const Links = [
  {
    id: 1,
    label: "home",
    icon: <HomeIcon width={20} />,
    url: "/blogs",
    isRedirect: false,
  },

  {
    id: 6,
    label: "shop",
    isRedirect: false,
    url: "/shop",
    icon: <BackpackIcon width={10} />,
  },
];

function Nav() {
  return (
    <nav className=" z-10 fixed bottom-5  flex w-full   justify-center rounded-[999px]   ">
      <div className=" shadow-[0 25px 60px rgba(0, 0, 0, 0.12)] flex items-center dark:bg-neutral-900 bg-neutral-100 justify-center gap-8  py-2 px-6 rounded-full  ">
        {Links.map((e) => (
          <Link
            data-tooltip
            title={e.label}
            key={e.id}
            className="flex h-[15px] w-[15px] items-center justify-center rounded-3xl"
            href={e.url}
            target={e.isRedirect ? "_blank" : "_self"}
          >
            <div className="rounded-full dark:bg-neutral-800  p-2 dark:text-neutral-600 hover:bg-neutral-900">
              {e.icon}
            </div>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
