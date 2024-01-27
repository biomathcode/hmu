import Image from "next/image";

function ShopCard({ e }: { e: any }) {
  return (
    <div key={e.id} className="flex flex-col gap-4 border p-3 max-w-lg">
      <Image
        alt={e.attributes.name}
        src={e.attributes.large_thumb_url || ""}
        width={100}
        height={100}
        className=" max-w-lg max-h-lg "
      />
      <div className="text-2xl font-semibold ">{e.attributes.name}</div>
      <div className="">{e.attributes.price_formatted}</div>

      <div
        className=" text-base text-neutral-600 truncate"
        dangerouslySetInnerHTML={{ __html: e.attributes.description }}
      ></div>
      <a
        href="https://shop.coolhead.in/checkout/buy/3ecca4d6-e805-4e83-8552-a0b6be52c916?embed=1"
        className="lemonsqueezy-button"
      >
        Buy
      </a>

      {/* {JSON.stringify(e)} */}
    </div>
  );
}

export default ShopCard;
