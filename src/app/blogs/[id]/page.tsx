import { MarkdownToHtml } from "@/components/markdowntohtml";
import Head from "next/head";
import { notFound } from "next/navigation";
import { Editor } from "novel";

const endpoint = "https://gql.hashnode.com"; // Replace with your actual GraphQL endpoint URL
const host = "blog.coolhead.in"; // Replace with the desired host value
const first = 10;

const query = `
query getPostFromSlug($slug: String!, $host: String!) {
  publication(host: $host) {
    post(slug:$slug) {
      id
      title
      subtitle
      author {
      id
      profilePicture
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

async function fetchData(slug: string) {
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

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchData(params.id);
  const newdata = data.data.publication.post;

  const isOnDemand = true;
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  return (
    <div className="flex justify-center mt-20 overflow-scroll">
      <Head>
        <style
          dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}
        ></style>
      </Head>
      <div className="flex flex-col items-center gap-5 max-w-screen-md">
        <h1 className=" sticky top-0 bg-neutral-900 text-3xl font-medium capitalize dark:text-white text-gray-200">
          {newdata.title}
        </h1>
        <img
          src={newdata.coverImage.url}
          style={{
            width: "500px",
            height: "300px",
          }}
        />

        <MarkdownToHtml contentMarkdown={newdata.content.markdown} />
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
