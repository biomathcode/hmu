import Link from "next/link";
import BentoCard from "../BentoCard";

const data = {
  flavicon: "",
  title: "",
  description: "",
  thumbnail: "",
};

// staticdata.data.publication.links.github

type linkPreviewType = {
  link: string;
  title: string;
  username: string;
  icon: any;
};

function Github({ link, title, username, icon }: linkPreviewType) {
  return (
    <Link href={link}>
      <BentoCard type="small">
        <div
          style={{
            width: "fit-content",
            padding: "6px",
            borderRadius: "10px",
            // background: "#222",
          }}
        >
          {icon}
        </div>

        <div className="text-black text-[14px] font-normal overflow-hidden">
          {title}
        </div>
        <div className="text-neutral-500 text-[12px] font-normal ">
          {username}
        </div>
      </BentoCard>
    </Link>
  );
}

export { Github };
