import { useEffect, useState } from "react";
import BentoCard, {
  BentoContainer,
  BentoImage,
  BentoToolTip,
} from "@/components/BentoCard";
import Link from "next/link";
import { getPosts } from "@/lib/datafetch/getPost";
import LoadMore from "@/components/LoadMore";
import { getPostsByTags } from "@/lib/datafetch/getPostByTags";

async function Posts({ params }: { params: { id: string } }) {
  const tag = params.id;
  const staticdata = await getPostsByTags({ after: "", tag: tag });

  console.log("staticdata", staticdata);
  return (
    <div className="text-black dark:text-white flex flex-col gap-4 mt-10  no-scrollbar  items-center">
      <img
        alt={"Profile Pic " + staticdata.data.publication.title}
        className=" w-32 h-32 rounded-full border border-neutral-400 border-opacity-80"
        src={staticdata.data.publication.favicon}
      />
      <div className="text-neutal-800 text-4xl font-extrabold  ">
        {staticdata.data.publication.title}
      </div>

      <div
        className=" max-w-lg dark:text-neutral-400"
        dangerouslySetInnerHTML={{
          __html: staticdata.data.publication.about.markdown,
        }}
      />
      <div className="text-black flex flex-col gap-4 ">
        {staticdata.data.publication.posts.edges.map((e: any) => {
          return (
            <BentoCard
              type="large"
              key={e.node.id}
              isLink
              href={"/blogs/" + e.node.slug}
            >
              <BentoContainer type="large">
                <div className="flex flex-col h-full justify-between ">
                  <div className="flex flex-col gap-2">
                    <div className="text-black dark:text-neutral-200">
                      {e.node.title}
                    </div>
                    <div className="text-neutral-600 text-md font-normal dark:text-neutral-200">
                      {e.node.subtitle}
                    </div>
                    <div className=" text-neutral-400 font-normal dark:text-white">
                      {e.node.readTimeInMinutes} mins
                    </div>
                  </div>
                  <BentoImage
                    type="large"
                    src={e.node.coverImage.url}
                    alt={e.node.title}
                  />
                </div>
              </BentoContainer>
            </BentoCard>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
