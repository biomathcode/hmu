import LemonPay from "@/libs/Payments/LemonPay";

function Shop() {
  return (
    <div className=" h-screen w-screen text-white">
      <LemonPay />

      <a
        href="https://shop.coolhead.in/checkout/buy/3ecca4d6-e805-4e83-8552-a0b6be52c916?embed=1"
        className="lemonsqueezy-button"
      >
        Buy Chandrayaan-3 Site Code
      </a>
    </div>
  );
}

export default Shop;
