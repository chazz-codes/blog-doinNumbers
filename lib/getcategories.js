import { GraphQLClient, gql } from "graphql-request";

// Get data from GraphCMS

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
)

const QUERY_Categories =gql`
{
    categories {
      name
      slug
    }
  }
  
`

export async function getBlogCategories(){
    const { categories } = await graphcms.request(QUERY_Categories)

    return {
        props: {
            categories
        }
    }
}