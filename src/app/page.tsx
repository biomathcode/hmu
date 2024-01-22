import Posts from "@/components/ Blogs";
import BentoCard, { BentoImage } from "@/components/BentoCard";
import { ModeToggle } from "@/components/ThemeToggle";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full justify-between items-center content-center  bg-white dark:bg-black dark:text-white   ">
      <div className=" h-full max-w-[500px] justify-center items-center flex px-24">
        <Posts />
      </div>

      <div className="flex flex-col gap-5 overflow-scroll h-screen py-20">
        <div className="flex gap-[20px] ">
          <BentoCard type="large" border="none">
            <div className="flex flex-col h-full justify-between">
              <div className="flex gap-3 flex-col">
                <div
                  style={{
                    width: "fit-content",
                    padding: "6px",
                    borderRadius: "10px",
                    background: "#222",
                  }}
                >
                  <svg
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>
                <div className="text-black text-[14px] font-normal">
                  Pratik Sharma - Web Developer from New Delhi
                </div>
                <div className="text-neutral-500 text-[12px] font-normal ">
                  coolhead.in
                </div>
              </div>
              <BentoImage src="/og.jpeg" alt="Profile Image" type="large" />
            </div>
          </BentoCard>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[20px]">
              <BentoCard type="small" className="flex flex-col">
                <div
                  style={{
                    width: "fit-content",
                    padding: "6px",
                    borderRadius: "10px",
                    background: "#222",
                  }}
                >
                  <svg
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>

                <div className="text-black text-[14px] font-normal overflow-hidden">
                  Pratik Sharma - Web Developer from New Delhi
                </div>
                <div className="text-neutral-500 text-[12px] font-normal ">
                  coolhead.in
                </div>
              </BentoCard>
            </div>

            <BentoCard type="medium">
              <div className="flex h-full justify-between">
                <div className="flex gap-3 flex-col">
                  <div
                    style={{
                      width: "fit-content",
                      padding: "6px",
                      borderRadius: "10px",
                      background: "#222",
                    }}
                  >
                    <svg
                      viewBox="0 0 38 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                        fill="#1ABCFE"
                      />
                      <path
                        d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
                        fill="#0ACF83"
                      />
                      <path
                        d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
                        fill="#FF7262"
                      />
                      <path
                        d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
                        fill="#F24E1E"
                      />
                      <path
                        d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
                        fill="#A259FF"
                      />
                    </svg>
                  </div>
                  <div className="text-black text-[14px] max-w-fit font-normal">
                    Pratik Sharma - Web Developer from New Delhi
                  </div>
                  <div className="text-neutral-500 text-[12px] font-normal ">
                    coolhead.in
                  </div>
                </div>
                <BentoImage src="/og.jpeg" alt="Profile Image" type="medium" />
              </div>
            </BentoCard>
          </div>
        </div>

        <div className="flex gap-4  mt-5">
          <BentoCard
            type="vertical"
            className="relative"
            rounded={true}
            // border="1px solid #eee"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex gap-3 flex-col">
                <div
                  style={{
                    width: "fit-content",
                    padding: "6px",
                    borderRadius: "10px",
                    background: "#222",
                  }}
                >
                  <svg
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>
                <div className="text-black text-[14px] max-w-fit font-normal">
                  Pratik Sharma - Web Developer from New Delhi
                </div>
                <div className="text-neutral-500 text-[12px] font-normal ">
                  coolhead.in
                </div>
              </div>
              <BentoImage src="/og.jpeg" alt="Profile Image" type="vertical" />
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div> */}
          </BentoCard>

          <div className="flex flex-wrap gap-5 w-[590px]  ">
            {[1, 2, 3, 4].map((e) => (
              <BentoCard
                key={e}
                className="bg-[#70bce9] text-white"
                type="small"
                rounded={true}
                border="none"
              >
                <p>Pratik Sharma</p>
              </BentoCard>
            ))}
          </div>
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
      </div>
    </main>
  );
}
