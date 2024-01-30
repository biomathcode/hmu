"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BentoCard, { BentoImage } from "../BentoCard";
import { getMorePost } from "@/lib/datafetch/loadmore";
import { after } from "node:test";

export type PageInfoFragment = {
  __typename?: "PageInfo";
  endCursor?: string | null;
  hasNextPage?: boolean | null;
};

function LoadMore({ publication, initialPosts, initialPageInfo }: any) {
  const [posts, setPosts] = useState<any>([]);
  const [isNextPage, setIsNextPage] = useState(true);
  const [pageInfo, setPageInfo] = useState<any>(initialPageInfo);

  console.log("pageInfo", pageInfo);

  const loadMore = async () => {
    const data = await getMorePost({ after: pageInfo.endCursor });
    if (!data.data.publication) {
      return;
    }
    const newPosts = data.data.publication.posts.edges.map(
      (edge: any) => edge.node
    );

    console.log(newPosts);

    setIsNextPage(data.data.publication.posts.pageInfo.hasNextPage);

    setPosts([...posts, ...newPosts]);
    setPageInfo(data.data.publication.posts.pageInfo);
  };

  return (
    <>
      {posts?.map((e: any, i: any) => {
        return (
          <Link href={"/blogs/" + e.slug} key={i}>
            <div className="dark:text-white" key={i}>
              <BentoCard type="large">
                <div className="flex flex-col h-full justify-between ">
                  <div className="flex flex-col gap-2">
                    <div className="text-black dark:text-neutral-200">
                      {e.title}
                    </div>
                    <div className="text-neutral-600 text-md font-normal dark:text-neutral-200">
                      {e.subtitle}
                    </div>
                    <div className=" text-neutral-400 font-normal dark:text-white">
                      {e.readTimeInMinutes} mins
                    </div>
                  </div>
                  <BentoImage
                    type="large"
                    src={e.coverImage?.url}
                    alt={e?.title}
                  />
                </div>
              </BentoCard>
            </div>
          </Link>
        );
      })}
      {isNextPage && (
        <button
          className=" w-fit py-4 px-5 mb-36 dark:text-white border-2 rounded-sm "
          onClick={() => loadMore()}
        >
          Load More
        </button>
      )}
    </>
  );
}

export default LoadMore;
