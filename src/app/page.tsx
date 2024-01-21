import BentoCard from "@/components/BentoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-between p-24">
      <div className="flex gap-[20px]">
        <BentoCard type="large" />
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <BentoCard type="small" />
            <BentoCard type="small" />
          </div>

          <BentoCard type="medium" />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 w-[600px] my-4 ">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <BentoCard
            key={e}
            className="bg-[#70bce9]"
            type="small"
            rounded={true}
            border="none"
          >
            <p>Pratik Sharma</p>
          </BentoCard>
        ))}
      </div>

      <div className="flex gap-[20px]">
        <BentoCard
          type="vertical"
          className="relative"
          rounded={true}
          border="1px solid #eee"
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </BentoCard>
        <div className="flex flex-col gap-[20px]">
          <BentoCard
            type="long"
            className="relative"
            rounded={true}
            border="1px solid #eee"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
          </BentoCard>
          <div className="flex gap-5">
            <BentoCard
              type="small"
              className="relative"
              rounded={true}
              border="1px solid #eee"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0  bg-[rgba(173,109,244,0.5)] "></div>
            </BentoCard>
            <BentoCard
              type="small"
              className="relative"
              rounded={true}
              border="1px solid #eee"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,38,.5)_100%)]"></div>
            </BentoCard>
          </div>

          <BentoCard
            type="long"
            className="relative"
            rounded={true}
            border="1px solid #eee"
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
          </BentoCard>
        </div>
      </div>

      <BentoCard type="long" />
    </main>
  );
}
