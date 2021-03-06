import { getGraphCMS } from "../../lib/graphcms";
import Head from "next/head";
import Layout from "../../components/layout";
import { GraphQLClient } from 'graphql-request'
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from "next/image";

// Dynamic Route for Blog Posts


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
                html
                raw
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
            params: { slug }
        })),
        fallback: false
    }
}

export default function Blog({ posts}){
    
    const img = posts[0].featuredImage.url;


    return (
        <Layout>
            <Head>
                <title>{posts[0].title} | doinNumbers</title>
                <meta
                    property="og:image"
                    content={img}
                />
            </Head>
            <div className="articleBox">
                <h1>    
                    {posts[0].title} <br/>
                </h1>
                {posts[0].excerpt} <br/> <br/>
                <div id="postimg">
                    <Image 
                        alt="Next.js logo"
                        src={posts[0].featuredImage.url}
                        width={210}
                        height={210}
                    />
                    <br/>
                </div>
            <RichText content={posts[0].content.raw}/>
            </div>
        </Layout>
    )
}

