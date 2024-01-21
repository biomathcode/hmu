import Script from "next/script";

function LemonPay() {
  return (
    <Script
      id="lemonPay"
      src="https://app.lemonsqueezy.com/js/lemon.js"
      strategy="lazyOnload"
    />
  );
}

export default LemonPay;
