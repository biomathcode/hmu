import ShopCard from "@/components/Shop";
import LS from "@/lib/Payments/GetProducts";
import LemonPay from "@/lib/Payments/LemonPay";
import Image from "next/image";

async function Shop() {
  const data = (await LS.getProducts()).data;

  return (
    <div className=" h-screen w-screen ">
      <LemonPay />
      {data.map((e) => {
        return <ShopCard e={e} key={e.id} />;
      })}
    </div>
  );
}

export default Shop;
