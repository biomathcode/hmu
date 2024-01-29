import { useEffect, useState } from "react";
import BentoCard, { BentoImage } from "../BentoCard";
import Link from "next/link";
import SubscribeBox from "../SubscribeBox";
import SeoHome from "../Seo/home";
import { fetchData } from "@/lib/datafetch/getHome";

async function Posts() {
  const staticdata = await fetchData();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 text-black sticky top-3 dark:text-white flex flex-col gap-4">
      <img
        alt={"Profile Pic " + staticdata.data.publication.title}
        className=" w-32 h-32 rounded-full border border-neutral-400 border-opacity-80"
        src={staticdata.data.publication.favicon}
      />
      <div className="text-neutal-800 md:text-5xl font-bold  text-2xl   ">
        {staticdata.data.publication.title}
      </div>

      <div
        className=" max-w-lg dark:text-neutral-400 mt-3 text-neutral-500 xl:mt-3 xl:text-xl"
        dangerouslySetInnerHTML={{
          __html: staticdata.data.publication.about.markdown,
        }}
      />
      <SeoHome publication={staticdata.data.publication} />

      <SubscribeBox publicationId={staticdata.data.publication.id} />
    </div>
  );
}

export default Posts;
