import Link from "next/link";
import BentoCard, { BentoContainer, BentoImage } from "../BentoCard";

const data = {
  flavicon: "",
  title: "",
  description: "",
  thumbnail: "",
};

// staticdata.data.publication.links.github

type linkPreviewType = {
  link: string;
};

async function LinkPreview({ link }: linkPreviewType) {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${url}/api/linkpreview?link=${link}`);

  const data = await res.json();

  return (
    <Link href={link}>
      <BentoCard type="large">
        <BentoContainer type="large">
          <div className="text-black text-[14px] font-normal overflow-hidden">
            {data?.title}
          </div>
          <div className="text-neutral-500 text-[12px] font-normal ">
            {data?.description}
          </div>
          <BentoImage
            type="large"
            alt={data?.description}
            src={data?.ogImage}
          />
        </BentoContainer>
      </BentoCard>
    </Link>
  );
}

export default LinkPreview;
