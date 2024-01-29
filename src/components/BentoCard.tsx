import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactNode } from "react";

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
  return <p>{children}</p>;
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
        background: "#222",
      }}
    >
      <svg
        style={{
          width: "30px",
          height: "30px",
        }}
        viewBox="0 0 38 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
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
}

function BentoCard({
  type = "small",
  rounded = true,
  border = "none",
  children,
  background = <div></div>,
  isLink = false,
  href = "",

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
      <div
        data-bento-card-container={type}
        className=" shadow-sm  w-full h-full p-6 absolute top-0 dark:shadow-[0_2px_4px_rgba(255,255,255,.04)]  font-semibold dark:text-white   dark:shadow-neutral-700 "
      >
        {children}
      </div>
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
      {isLink && (
        <Link
          href={href}
          target="_blank"
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

      {/* <div className=" pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div> */}
    </div>
  );
}

export default BentoCard;
