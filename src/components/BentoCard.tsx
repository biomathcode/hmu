import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactNode } from "react";
import { Figma, Onepassword } from "@/assert/allicons";
// TODO :remove Bento Card default width and height and replace with tailwind css

type BentoCardType = "small" | "large" | "medium" | "long" | "vertical";

interface BentoSizes {
  [key: string]: { width: string; height: string };
}

const Flavicon = {
  width: "40px",
  height: "40px",
};

type BentoFlaviconType = {
  icon: "figma" | "instagram" | "";
};

// similar to subtitle but multiline is allowed
export const BentoDescription = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-neutral-500 text-[12px] font-normal ">{children}</div>
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

export const BentoFlavicon = () => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        padding: "6px",
        borderRadius: "10px",
        display: "flex",
        background: "#222",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Figma
        style={{
          width: "24px",
          height: "24px",
        }}
      />
    </div>
  );
};

const BentoSizes: BentoSizes = {
  small: {
    width: "180px",
    height: "180px",
  },
  long: {
    width: "380px",
    height: "80px",
  },
  large: {
    width: "380px",
    height: "380px",
  },
  medium: {
    width: "380px",
    height: "180px",
  },
  vertical: {
    width: "180px",
    height: "380px",
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
    width: "180px",
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
}: {
  src: string;
  alt: string;
  type: BentoCardType;
}) {
  const { width, height } = BentoImageSize[type];
  return (
    <img
      data-type={type}
      className=" object-cover border border-neutral-100 object-center data-[type=small]:hidden data-[type=vertical]:rounded-[10px] data-[type=medium]:rounded-[14px] data-[type=large]:rounded-[10px]"
      src={src}
      style={{
        width,
        height,
        aspectRatio: "4:3",
      }}
      alt={alt}
      width={Number(BentoImageSize[type].width.replace("px", ""))}
      height={Number(BentoImageSize[type].height.replace("px", ""))}
    />
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
      className=" shadow-sm  w-full h-full p-6 absolute top-0 dark:shadow-[0_2px_4px_rgba(255,255,255,.04)]  font-semibold dark:text-white   dark:shadow-neutral-700 "
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

      {/* <div className=" pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div> */}
    </div>
  );
}

export default BentoCard;
