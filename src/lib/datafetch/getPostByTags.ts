const apiUrl = "YOUR_GRAPHQL_API_ENDPOINT";

const tagPostsByPublicationQuery = `
  query TagPostsByPublication($host: String!, $tagSlug: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      id
      title
      displayTitle
      url
      metaTags
      favicon
      isTeam
      followersCount
      descriptionSEO
      posts(first: $first, after: $after) {
        totalDocuments
        edges {
          node {
            id
            title
            url
            publishedAt
            slug
            brief
            author {
              name
              profilePicture
            }
            coverImage {
              url
            }
            comments {
              totalDocuments
            }
          }
        }
      }
      author {
        name
        username
        profilePicture
        followersCount
      }
      ogMetaData {
        image
      }
      preferences {
        logo
        darkMode {
          logo
        }
        navbarItems {
          id
          type
          label
          url
        }
      }
      links {
        twitter
        github
        linkedin
        hashnode
      }
      integrations {
        umamiWebsiteUUID
        gaTrackingID
        fbPixelID
        hotjarSiteID
        matomoURL
        matomoSiteID
        fathomSiteID
        fathomCustomDomain
        fathomCustomDomainEnabled
        plausibleAnalyticsEnabled
      }
    }
  }
`;

const variables = {
  host: "YOUR_HOST",
  tagSlug: "YOUR_TAG_SLUG",
  first: 10, // or any other value for 'first'
  after: null, // or provide a cursor for 'after' if needed
};

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Add any additional headers if needed
  },
  body: JSON.stringify({
    query: tagPostsByPublicationQuery,
    variables,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("GraphQL Response:", data);
    // Handle the GraphQL response here
  })
  .catch((error) => console.error("GraphQL Request Error:", error));
