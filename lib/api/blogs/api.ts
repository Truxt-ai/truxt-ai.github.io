type Author = {
    name: string;
    username: string;
    profilePicture: string;
};

type Blog = {
    id: string;
    slug: string;
    brief: string;
    title: string;
    subtitle: string;
    url: string;
    publishedAt: string;
    author: Author;
    coverImage?: {
        url: string;
    };
    content?: {
        html: string;
    };
    seo: {
        title: string;
        description: string;
    };
};

const HASHNODE_API_URL = process.env.HASHNODE_API_URL || 'https://gql.hashnode.com';

async function fetchGraphQL(query: string, variables?: Record<string, any>) {
    const response = await fetch(HASHNODE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate', // Ensure no caching at any level
            Pragma: 'no-cache',
            Expires: '0'
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    // @ts-ignore
    const { data, errors } = await response.json();
    if (errors) {
        console.error(errors);
        throw new Error('Failed to fetch API');
    }
    return data;
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
    const query = `
    query GetPostBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
              id
              slug
              title
              subtitle
              brief
              publishedAt
              author {
                name
                username
                profilePicture
              }
              content {
                html
              }
              url
              tags {
                slug
              }
              seo {
                title
                description
              }
              coverImage {
                url
              }

        }
      }
    }
  `;

    const variables = { host: process.env.HASHNODE_BLOG_URL, slug: slug };
    const data = await fetchGraphQL(query, variables);
    return data.publication.post;
}

export async function getAllBlogs(): Promise<Blog[]> {
    const query = `
    query GetAllPosts($host: String!) {
      publication(host: $host) {
        isTeam
        title
        posts(first: 20) {
          edges {
            node {
              id
              slug
              title
              subtitle
              brief
              publishedAt
              url
              author {
                name
                username
                profilePicture
              }
              tags {
                slug
              }
              seo {
                title
                description
              }
              coverImage {
                url
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `;

    const variables = { host: process.env.HASHNODE_BLOG_URL };
    const data = await fetchGraphQL(query, variables);
    return data.publication.posts.edges.map((edge: any) => edge.node);
}
