import Image from "next/image";
import React, { ReactNode } from "react";

type BentoCardType = "small" | "large" | "medium" | "long" | "vertical";

interface BentoSizes {
  [key: string]: { width: string; height: string };
}
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

function BentoHeader() {
  return <div></div>;
}

function BentoDescription() {
  return <div></div>;
}

function BentoImage({ src, alt = "image" }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} />;
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string;
  rounded?: boolean;
  border?: string;
}

function BentoCard({
  type = "small",
  rounded = true,
  border = "2px solid #eee",
  children,
  ...props
}: BentoCardProps) {
  const { width, height } = BentoSizes[type];
  return (
    <div
      data-state={type}
      style={{
        width,
        height,
        border: border,
        transition: "all .24s cubic-bezier(.31,.026,0,.997)",

        borderRadius: rounded ? "20px" : "0px",
        overflow: "hidden",
        position: "relative",

        // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      {...props}
    >
      <div
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,.04)",
          padding: "1.5rem",
          width,
          height,
          position: "absolute",
          top: "0px",
        }}
        className=" font-semibold"
      >
        {children}
      </div>
      <div
        style={{
          borderColor: "rgba(0,0,0,.08)",
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
      ></div>
      <div
        style={{
          top: "1px",
          right: "1px",
          bottom: "1px",
          borderColor: "hsla(0,0%,100%,.22)",
          opacity: 1,
          borderWidth: 1,
          transition: "border .2s ease-in-out,opacity .2s ease-in-out",
          pointerEvents: "none",
          borderRadius: "19px",

          maskImage: "linear-gradient(0deg,transparent,#000)",
        }}
      ></div>
    </div>
  );
}

export default BentoCard;
