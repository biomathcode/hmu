import Image from "next/image";
import React, { ReactNode } from "react";

type BentoCardType = "small" | "large" | "medium" | "long" | "vertical";

interface BentoSizes {
  [key: string]: { width: string; height: string };
}

const Flavicon = {
  width: "40px",
  height: "40px",
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

function BentoHeader() {
  return <div></div>;
}

function BentoDescription() {
  return <div></div>;
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
      className=" object-cover object-center rounded-[20px]"
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
}

function BentoCard({
  type = "small",
  rounded = true,
  border = "none",
  children,

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
        transition: "all .24s cubic-bezier(.31,.026,0,.997)",

        borderRadius: rounded ? "20px" : "0px",
        overflow: "hidden",
        position: "relative",
      }}
      {...props}
    >
      <div
        style={{
          // boxShadow: "0 2px 4px rgba(0,0,0,.04)",

          padding: "1.5rem",
          width,
          height,
          position: "absolute",
          top: "0px",
        }}
        data-bento-card-container={type}
        className=" shadow-[0_2px_4px_rgba(0,0,0,.04)] dark:shadow-[0_2px_4px_rgba(255,255,255,.04)]  font-semibold dark:text-white   dark:shadow-neutral-700 "
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
        className=" border-[color:rgba(0,0,0,.08)] dark:border-4  dark:border-[color:rgba(255,255,255,0.08)]"
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
        className=" border-[color:hsla(0,0%,100%,.22)] dark:border-4  dark:border-[color:#292929]"
      ></div>
    </div>
  );
}

export default BentoCard;
