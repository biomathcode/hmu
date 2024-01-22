import { useEffect, useState } from "react";
import BentoCard from "../BentoCard";
import Link from "next/link";

const endpoint = "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
const host = "blog.coolhead.in"; // Replace with the desired host value

const query = `
  query Publication($host: String!) {
    publication(host: $host) {
      title
      displayTitle
      followersCount
      favicon
      domainInfo {
        domain {
          host
        }
      }
      links {
        github
        youtube
        instagram
        twitter
        hashnode
        linkedin
        dailydev
        website
        mastodon
      }
      about {
        markdown
      }
    }
  }
`;

const variables = {
  host,
};

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers as needed
  },
  body: JSON.stringify({ query, variables }),
};

async function fetchData() {
  try {
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error("Error during GraphQL request:", error);
  }
}

async function Posts() {
  const staticdata = await fetchData();

  console.log(staticdata);

  console.log(staticdata.data.publication.links.github.split("/").slice(-1)[0]);

  return (
    <div className="text-black flex flex-col gap-4">
      <img
        alt={"Profile Pic " + staticdata.data.publication.title}
        className=" w-32 h-32 rounded-full border border-neutral-400 border-opacity-80"
        src={staticdata.data.publication.favicon}
      />
      <div className="text-neutal-800 text-4xl font-extrabold dark:text-white ">
        {"Pratik Sharma " || staticdata.data.publication.title}
      </div>

      <div
        className="text-black max-w-lg dark:text-neutral-400"
        dangerouslySetInnerHTML={{
          __html: staticdata.data.publication.about.markdown,
        }}
      />
    </div>
  );
}

export default Posts;
