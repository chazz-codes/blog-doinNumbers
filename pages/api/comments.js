// Comments API Backend

// Imports
import { GraphQLClient, gql } from "graphql-request"

 // Abbreviate GRAPHCMS access 
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

// Comments function
export default async function comments(req, res){

  // destructure the request object
  const { name, email, slug, comment } = req.body;

  // configure graphQL connection
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
        authorization: `Bearer ${graphcmsToken}`
    }
  })
  
// configure graphql request
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: { name: $name, email: $email, comment: $comment, post: {connect: { slug: $slug } } } ){ id }
    }
  `

// try to access data from graphql or return failure to console
try {
  const result = await graphQLClient.request(query, req.body)
  return res.status(200).send(result);
} catch (error) {
  console.log(error)
}
  return res.status(200).send(result);
}