import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
)

const QUERY = gql`
{
    posts {
        id
        slug
        title
        publishedAt
        featuredImage {
          fileName
          height
          size
          width
          url
        }
      }
}
`

export async function getGraphCMS(){
    const { posts } = await graphcms.request(QUERY)

    return {
        props: {
            posts
        }
    }
}