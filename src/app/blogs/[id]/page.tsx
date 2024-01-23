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

  const isOnDemand = true;

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className=" text-2xl font-medium capitalize dark:text-white text-gray-200">
          {"Page" + params.id}
        </h1>
        <p className="line-clamp-3 font-medium dark:text-neutral-400 text-gray-500">
          {JSON.stringify(data)}
        </p>
      </div>
    </div>
  );
}
