// Post Categories
import React from 'react'
import { getBlogCategories } from '../lib/getcategories'
import { GraphQLClient, gql } from 'graphql-request' 


export async function getStaticProps(){
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
)

  const { categories } = await graphcms.request(
    gql`
    {
        categories {
          name
          slug
        }
      }
      
    `
  )

  return {
    props: {
      categories
    }
  }
}

const Categories = ({categories}) => {

  console.log(categories)

  return (
    <React.Fragment>
      <div className="section-title">
          <h1>  
            <span> Categories </span>
          </h1>
      </div>

    </React.Fragment>
  )
}

export default Categories