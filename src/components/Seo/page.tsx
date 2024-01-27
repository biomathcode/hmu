import Head from "next/head";
import { getAutogeneratedPostOG } from "@/libs/social/og";
import { addArticleJsonLd } from "@/libs/seo/addArticleJsonLd";

// TODO: Update this with generateMetaData
const SeoPage = ({ post, publication }: { post: any; publication: string }) => {
  return (
    <Head>
      <title>{post.seo?.title || post.title}</title>
      <link rel="canonical" href={post.url} />
      <meta
        name="description"
        content={post.seo?.description || post.subtitle || post.brief}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={post.seo?.title || post.title} />
      <meta
        property="twitter:description"
        content={post.seo?.description || post.subtitle || post.brief}
      />
      <meta
        property="og:image"
        content={
          post.ogMetaData?.image ||
          post.coverImage?.url ||
          getAutogeneratedPostOG(post, publication)
        }
      />
      <meta
        property="twitter:image"
        content={
          post.ogMetaData?.image ||
          post.coverImage?.url ||
          getAutogeneratedPostOG(post, publication)
        }
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addArticleJsonLd(publication, post)),
        }}
      />
    </Head>
  );
};