import { getGraphCMS, getPostbyID } from "../../lib/graphcms";
import Head from "next/head";
import Layout from "../../components/layout";
import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
);


export async function getStaticProps( context ){
    
    const { posts } = await graphcms.request(
        `
        query PostbyId($slug: String!) {
            posts(where: {slug: $slug}) {
              id
              slug
              title
              publishedAt
              excerpt
              featuredImage {
                fileName
                height
                size
                width
                url
              }
              content {
                markdown
              }
              author {
                id
                name
                photo {
                  id
                  url
                  width
                }
              }
            }
          }
          
        `, {
            slug: context.params.slug
        }
    );

    return {
        props: {
            posts
        }
    }
}


export async function getStaticPaths(){
    const posts = await (await getGraphCMS()).props.posts;

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    }
}

export default function Blog({ posts }){
  
    return (
        <Layout>
            <Head>
                <title>{posts[0].title}</title>
            </Head>
            <div className="articleBox">
                {posts[0].excerpt}
                {posts[0].slug}
                
            </div>
        </Layout>
    )
}


