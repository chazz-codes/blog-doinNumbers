import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { getGraphCMSCat } from "../../../lib/getcategories";
import { Layout } from "../../../components";
import Link from "next/link";



const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
);

export async function getStaticPaths() {
    const { props } = await getGraphCMSCat()

    return {
        paths: props.categories.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false
    }
}

export async function getStaticProps ( context ) {

    const { category } = await graphcms.request(
        `
        query GetPostsByCategory ($slug: String!){
            category(where: {slug: $slug}) {
              name
              slug
              post {
                id
                title
                slug
              }
            }
          }
        `, {
            slug: context.params.slug
        }
    )

    return {
        props: {
            category
            
        }
    }


}



export default function BlogCategories({ category}){

return (
    <Layout>
      
        <h1> # {category.name} </h1>
        <div>
            { category.post.map( (obj) => (
                <div key={obj.slug}>
                  <Link href={`/blog/${obj.slug}`}>
                    <a>
                        - {obj.title}
                    </a>
                  </Link>
                </div>
            ))}
        </div>
    </Layout>
)
    
}