export async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "iamjaasi") {
            publication {
                posts(page: $page) {
                     _id
                    coverImage
                    slug
                    title
                    brief
                    dateAdded
                    dateUpdated
                }
            }
        }
    }
`;
