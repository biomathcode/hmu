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
    <nav
      style={{
        position: "sticky",

        zIndex: "22",
      }}
      className=" shadow-[0 25px 60px rgba(0, 0, 0, 0.12)] bottom-3 flex h-16 w-fit  justify-center rounded-[999px] dark:bg-neutral-900 bg-neutral-100  "
    >
      <div className="relative flex items-center justify-center gap-6  py-2 px-6 ">
        {Links.map((e) => (
          <Link
            data-tooltip
            title={e.label}
            key={e.id}
            className="flex h-[25px] w-[25px] items-center justify-center rounded-3xl"
            href={e.url}
            target={e.isRedirect ? "_blank" : "_self"}
          >
            <span className="rounded-full dark:bg-neutral-800  p-2 dark:text-neutral-600 hover:bg-neutral-900">
              {e.icon}
            </span>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
