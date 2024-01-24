import { notFound } from "next/navigation";

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

  console.log(newdata);

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-3 max-w-screen-md">
        <h1 className=" text-3xl font-medium capitalize dark:text-white text-gray-200">
          {"Page" + params.id}
        </h1>

        <article
          className=""
          dangerouslySetInnerHTML={{ __html: newdata.content.html }}
        ></article>
      </div>
    </div>
  );
}
