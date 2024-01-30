import { DateFormatter } from "@/components/date-formatter";
import { MarkdownToHtml } from "@/components/markdowntohtml";
import { getAutogeneratedPostOG } from "@/lib/social/og";
import { ResolvingMetadata } from "next";
import Head from "next/head";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Editor } from "novel";

// TODO: refactor setup request functions at one place
// TODO: add Editor save button

const query = `
query getPostFromSlug($slug: String!, $host: String!) {
  publication(host: $host) {
    favicon
    title
    post(slug:$slug) {
      id
      title
      subtitle
      author {
      id
      name
      profilePicture
      
    }
    publishedAt
      tags {
        id
        slug
      }
    ogMetaData {
      image
      
    }
      publishedAt
      updatedAt
      coverImage {
        url
        attribution
        
      }
     
      
      content {
        markdown
        html
      }
      
      
    }
    
  }
}
`;

async function fetchData(slug: string) {
  const endpoint =
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT || "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
  const host =
    process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST || "blog.coolhead.in"; // Replace with the desired host value
  const first = 10;
  const variables = (slug: string) => ({
    host,
    slug,
  });

  const requestOptions = (slug: string) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers as needed
    },
    body: JSON.stringify({ query, variables: variables(slug) }),
  });
  try {
    const response = await fetch(endpoint, requestOptions(slug));
    const data = await response.json();

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error("Error during GraphQL request:", error);
  }
}

// export async function generateStaticParams() {
//   // Generate two pages at build time and the rest (3-100) on-demand

//   return [{ id: "1" }, { id: "2" }];
// }

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  const id = params.id;

  const data = await fetchData(id);

  const publication = data.data.publication;

  const post = data.data.publication.post;

  return {
    title: post.seo?.title || post.title,

    description: post.seo?.description || post.subtitle || post.brief,
    openGraph: {
      title: post.title,
      description: post.descriptionSEO,

      authors: [post.author.name],
      images:
        post.ogMetaData?.image ||
        post.coverImage?.url ||
        getAutogeneratedPostOG(post),
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: post.displayTitle || post.title,
      description:
        post.descriptionSEO || post.title || `${post.author.name}'s Blog`,
      card: "summary_large_image",
      images: {
        url:
          post.ogMetaData.image ||
          post.coverImage?.url ||
          getAutogeneratedPostOG(post),
        alt: post.displayTitle || post.title,
      },
    },
    icons: {
      icon: publication.favicon,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchData(params.id);

  const publication = data.data.publication;

  const newdata = data.data.publication.post;

  const isOnDemand = true;
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  const tagsList = newdata.tags?.map((tag: any) => (
    <li key={tag.id}>
      <Link
        href={`/tag/${tag.slug}`}
        className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4"
      >
        #{tag.slug}
      </Link>
    </li>
  ));
  return (
    <div className=" markdown  flex justify-center mt-20 max-w-screen-md text-wrap ">
      <div className="  flex flex-col items-center gap-2  text-left  ">
        <h1 className=" mx-auto w-full px-5  text-3xl font-medium capitalize dark:text-white text-neutral-900">
          {newdata.title}
        </h1>
        <div className="mx-auto  px-5 text-neutral-600 w-full flex dark:text-neutral-400 text-left">
          <DateFormatter dateString={newdata.publishedAt} />
        </div>
        {(newdata.tags ?? []).length > 0 && (
          <div className="mx-auto w-full px-5 text-slate-600 dark:text-neutral-300 md:max-w-screen-md">
            <ul className="flex flex-row flex-wrap items-center gap-2">
              {tagsList}
            </ul>
          </div>
        )}

        <img
          src={newdata.coverImage.url}
          style={{
            width: "500px",
            height: "300px",
          }}
        />

        <MarkdownToHtml contentMarkdown={newdata.content.markdown} />
        <footer className="border-t pt-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} {publication.title}
        </footer>
        {/* 
        <Editor
          className="h-screen w-[600px]"
          defaultValue={newdata.content.markdown}
          disableLocalStorage
          storageKey="hmu"
          completionApi="/api/chat"
        /> */}

        {/* <article
          className=""
          dangerouslySetInnerHTML={{ __html: newdata.content.html }}
        ></article> */}
      </div>
    </div>
  );
}
