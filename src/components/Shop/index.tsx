import Image from "next/image";
import BentoCard, {
  BentoContainer,
  BentoImage,
  BentoSubtitle,
  BentoText,
  BentoTitle,
  BentoToolTip,
} from "../BentoCard";

function ShopCard({ e }: { e: any }) {
  return (
    <BentoCard type="large" key={e.id}>
      <BentoContainer type="large">
        <BentoImage
          type="large"
          alt={e.attributes.name}
          src={e.attributes.large_thumb_url || ""}
        >
          <BentoToolTip type="large">
            {e.attributes.price_formatted}
          </BentoToolTip>
        </BentoImage>
        <div className="flex flex-col gap-2">
          <BentoTitle>{e.attributes.name}</BentoTitle>

          <BentoText>
            <div
              className=" text-base font-light text-ellipsis text-w text-neutral-600 truncate line-clamp-2"
              dangerouslySetInnerHTML={{ __html: e.attributes.description }}
            ></div>
          </BentoText>
          <a
            href="https://shop.coolhead.in/checkout/buy/3ecca4d6-e805-4e83-8552-a0b6be52c916?embed=1"
            className="lemonsqueezy-button bg-neutral-900 text-white px-4 py-2 rounded-lg mt-2  "
          >
            Buy
          </a>
        </div>
      </BentoContainer>
    </BentoCard>
  );
}

export default ShopCard;
