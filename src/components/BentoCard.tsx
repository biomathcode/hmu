import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import {
  Figma,
  Github,
  Onepassword,
  Instagram,
  Linkedin,
  Hashnode,
  Youtube,
  Twitter,
  Mastodon,
  DailyDev,
} from "@/assert/allicons";
import { cn } from "@/lib/utils";
import { ExternalLink, Globe } from "lucide-react";

const styles = {
  width: "24px",
  height: "24px",
};

// TODO :remove Bento Card default width and height and replace with tailwind css

type BentoCardType = "small" | "large" | "medium" | "long" | "vertical";

interface BentoSizes {
  [key: string]: { width: string; height: string };
}

// similar to subtitle but multiline is allowed
export const BentoDescription = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-neutral-500 text-[12px] font-normal ">{children}</div>
  );
};

export const BentoBackground = ({
  classname,
  background,
}: {
  classname: string;
  background?: string;
}) => {
  return (
    <div
      style={{
        background: background,
      }}
      className={cn(
        " -z-10 pointer-events-none absolute bottom-0 left-0 right-0 top-0 ",
        classname
      )}
    ></div>
  );
};

export const BentoText = ({ children }: PropsWithChildren) => {
  return (
    <p className=" font-medium w-full h-full text-wrap overflow-scroll no-scrollbar">
      {children}
    </p>
  );
};

export const BentoButton = ({
  href,
  label,
  count,
  background,
}: {
  href: string;
  label: string;
  count: string;
  background: "blue" | "red" | "purple";
}) => {
  return (
    <a
      className=""
      href={href}
      style={{
        background,
      }}
    >
      {label + "  " + count}
    </a>
  );
};

export const BentoFlavicon = ({
  icon,
  color,
}: {
  icon: keyof typeof Icons;
  color?: string;
}) => {
  const Icons = {
    figma: <Figma style={styles} />,
    github: <Github style={styles} />,
    instagram: <Instagram style={styles} />,
    hashnode: <Hashnode style={styles} />,
    linkedin: <Linkedin style={styles} />,
    youtube: <Youtube style={styles} />,
    twitter: <Twitter style={styles} />,
    mastodon: <Mastodon style={styles} />,
    dailydev: <DailyDev style={styles} />,
    website: <Globe style={styles} />,
  };

  const colors = {
    twitter: "#1DA1F2",
    figma: "#F24E1E",
    github: "#1B1F23",
    instagram: "#E4405F",
    linkedin: "#0077B5",
    youtube: "#fff",
    website: "#000",

    mastodon: "#2C5282",
    dailydev: "#111",
    hashnode: "#fff",
  };
  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        padding: "6px",
        borderRadius: "10px",
        display: "flex",
        background: colors[icon],
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Icons[icon]}
    </div>
  );
};

const sizes = {
  small: {
    width: "160px",
    height: "160px",
  },
  long: {
    width: "360px",
    height: "80px",
  },
  large: {
    width: "360px",
    height: "360px",
  },
  medium: {
    width: "360px",
    height: "160px",
  },
  vertical: {
    width: "160px",
    height: "360px",
  },
};

const BentoSizes: BentoSizes = {
  small: {
    width: "160px",
    height: "160px",
  },
  long: {
    width: "360px",
    height: "80px",
  },
  large: {
    width: "360px",
    height: "360px",
  },
  medium: {
    width: "360px",
    height: "160px",
  },
  vertical: {
    width: "160px",
    height: "360px",
  },
};

const BentoImageSize: BentoSizes = {
  small: {
    width: "0px",
    height: "0px",
  },
  long: {
    width: "0px",
    height: "0px",
  },
  vertical: {
    width: "130px",
    height: "68px",
  },
  medium: {
    width: "160px",
    height: "130px",
  },
  large: {
    width: "332px",
    height: "174px",
  },
};

// line  clamp values long, vertical, => 3, short, medium, long => 2
export function BentoTitle({
  children,
  type,
}: {
  children: ReactNode;
  type?: BentoCardType;
}) {
  return (
    <div
      data-type={type}
      className=" line-clamp-3 text-[14px] font-normal data-[type=medium]:line-clamp-2 data-[type=small]:line-clamp-2 "
    >
      {children}
    </div>
  );
}

export function BentoSubtitle({
  children,
  type,
}: {
  children: ReactNode;
  type?: BentoCardType;
}) {
  return (
    <div
      data-type={type}
      className="text-neutral-500 text-[12px] font-normal  data-[type=medium]:line-clamp-2 data-[type=small]:line-clamp-2  "
    >
      {children}
    </div>
  );
}

export function BentoImage({
  src,
  alt = "image",
  type,
  children,
}: {
  src: string;
  alt: string;
  type: BentoCardType;
  children?: ReactNode;
}) {
  const { width, height } = BentoImageSize[type];
  return (
    <div className="relative">
      {children}

      <img
        data-type={type}
        className=" object-cover border border-neutral-100 object-center data-[type=small]:hidden data-[type=vertical]:rounded-[10px] data-[type=medium]:rounded-[14px] data-[type=large]:rounded-[10px]"
        src={src}
        style={{
          width,
          height,
        }}
        alt={alt}
        width={Number(BentoImageSize[type].width.replace("px", ""))}
        height={Number(BentoImageSize[type].height.replace("px", ""))}
      />
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  rounded?: boolean;
  border?: string;
  background?: ReactNode;
  isLink?: boolean;
  href?: string;
  external?: boolean;
}

export function BentoToolTip({
  children,
  type,
}: {
  type: BentoCardType;
  children: ReactNode;
}) {
  return (
    <div className=" z-20 absolute font-normal left-0 bottom-0 p-4 transition-opacity duration-200 ease-in">
      <div
        className=" max-w-[200px] 
    bg-white/70 dark:bg-black/30 px-2 py-1.5 text-[14px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06)] backdrop-blur-[20px] rounded-[8px]
    "
      >
        <div className=" line-clamp-1">{children}</div>
      </div>
    </div>
  );
}

export function BentoContainer({
  type,
  children,
}: {
  type: BentoCardType;
  children: ReactNode;
}) {
  return (
    <div
      data-bento-card={type}
      className=" w-full h-full  p-6 absolute top-0   font-semibold dark:text-white    "
    >
      {children}
    </div>
  );
}

function BentoCard({
  type = "small",
  rounded = true,
  border = "none",
  children,
  background = <div></div>,
  isLink = false,
  href = "",
  external = false,

  ...props
}: BentoCardProps) {
  const { width, height } = BentoSizes[type];

  return (
    <div
      date-bento-card={type}
      style={{
        width,
        height,
        border: border,

        borderRadius: rounded ? "20px" : "0px",
        overflow: "hidden",
        position: "relative",
      }}
      {...props}
    >
      {/* <div
        data-bento-card-container={type}
        className=" shadow-sm  w-full h-full p-6 absolute top-0 dark:shadow-[0_2px_4px_rgba(255,255,255,.04)]  font-semibold dark:text-white   dark:shadow-neutral-700 "
      > */}
      {children}
      {/* </div> */}
      <div
        style={{
          opacity: 1,
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          borderRadius: "inherit",
          borderWidth: 1,
          pointerEvents: "none",
        }}
        className=" border-[color:rgba(0,0,0,.08)] hover:border-opacity-60 dark:border-4  dark:border-[color:rgba(255,255,255,0.08)]"
      ></div>

      <div
        style={{
          top: "1px",
          right: "1px",
          bottom: "1px",

          opacity: 1,
          borderWidth: 1,
          transition: "border .2s ease-in-out,opacity .2s ease-in-out",
          pointerEvents: "none",
          borderRadius: "19px",

          maskImage: "linear-gradient(0deg,transparent,#000)",
        }}
        className=" border-[color:hsla(0,0%,100%,.22)]   dark:border-4  dark:border-[color:#292929]"
      ></div>

      {isLink && (
        <Link
          href={href}
          target={external ? "_blank" : "_self"}
          style={{
            zIndex: "20",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            borderRadius: "inherit",
            borderWidth: 1,
            cursor: "pointer",
          }}
          className="hover:opacity-10 transition-all duration-300 ease-linear  opacity-0 bg-neutral-300"
        ></Link>
      )}
    </div>
  );
}

export default BentoCard;
