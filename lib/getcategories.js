import { GraphQLClient, gql } from "graphql-request";

// Get data from GraphCMS

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
)

const QUERY2 = gql`
query Categories {
    categories {
      name
      slug
    }
  }
`



export async function getGraphCMSCat(){
    const { categories } = await graphcms.request(QUERY2)
 
    return {
        props: {
            categories
        }
    }
}

