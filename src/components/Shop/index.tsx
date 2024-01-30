import Image from "next/image";
import BentoCard, {
  BentoImage,
  BentoSubtitle,
  BentoText,
  BentoTitle,
} from "../BentoCard";

function ShopCard({ e }: { e: any }) {
  return (
    <BentoCard type="large" key={e.id} className="flex flex-col gap-3">
      <BentoImage
        type="large"
        alt={e.attributes.name}
        src={e.attributes.large_thumb_url || ""}
      />
      <div className="flex flex-col gap-2">
        <BentoTitle>{e.attributes.name}</BentoTitle>
        <BentoSubtitle>{e.attributes.price_formatted}</BentoSubtitle>

        <BentoText>
          <div
            className=" text-base font-light text-ellipsis text-w text-neutral-600 truncate line-clamp-2"
            dangerouslySetInnerHTML={{ __html: e.attributes.description }}
          ></div>
        </BentoText>
      </div>

      <a
        href="https://shop.coolhead.in/checkout/buy/3ecca4d6-e805-4e83-8552-a0b6be52c916?embed=1"
        className="lemonsqueezy-button bg-neutral-900 text-white px-4 py-2 rounded-lg mt-8  relative -bottom-7"
      >
        Buy
      </a>

      {/* {JSON.stringify(e)} */}
    </BentoCard>
  );
}

export default ShopCard;
