import { useEffect, useState } from "react";
import BentoCard, { BentoImage } from "../BentoCard";
import Link from "next/link";

const endpoint = "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
const host = "blog.coolhead.in"; // Replace with the desired host value
const first = 10;
const query = `

query Publication($host: String!, $first: Int!) {
  publication(host:$host) {
    id
    title
    displayTitle
    favicon
    posts(first: $first){
      edges {
        node {
          id
          slug
          title
          subtitle
          coverImage {
            url
          }
          readTimeInMinutes
        }
        
        cursor
        
        
      }
    }
    followersCount
    domainInfo {
      domain {
        host
      }
    }
    author {
      profilePicture
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
  first,
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

  return (
    <div className="text-black sticky top-3 dark:text-white flex flex-col gap-4">
      <img
        alt={"Profile Pic " + staticdata.data.publication.title}
        className=" w-32 h-32 rounded-full border border-neutral-400 border-opacity-80"
        src={staticdata.data.publication.favicon}
      />
      <div className="text-neutal-800 text-4xl font-extrabold  ">
        {staticdata.data.publication.title}
      </div>

      <div
        className=" max-w-lg dark:text-neutral-400 mt-3 text-[#565656] xl:mt-3 xl:text-xl"
        dangerouslySetInnerHTML={{
          __html: staticdata.data.publication.about.markdown,
        }}
      />
    </div>
  );
}

export default Posts;
