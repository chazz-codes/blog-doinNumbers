// individual post page with unique route based on slug

import React from 'react';
import {getPosts, getPostDetails} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader} from '../../components'
import { useRouter } from 'next/router'

const PostDetails = ({ post }) => {
  const router = useRouter();
// Makes sure future posts are added to site post deployment
  if (router.isFallback){
    return <Loader />
  }
// section showcasing unique content specific to the post routed to
// section showing postWidget and Categories for navigation purposes
  return( 
  <div className="container mx-auto px-10 mb-8">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className="col-span-1 lg:col-span-8">
                <PostDetail post={post}/>
                <Author author={post.author}/>
                <CommentsForm slug={post.slug}/>
                <Comments slug={post.slug}/>
          </div>
          <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <PostWidget />
                    <Categories />
                </div>
          </div>
      </div>
  </div>

)
};

export default PostDetails;
// API Call to get postDetails using the unique slug identifier
export async function getStaticProps({ params }){
    const data = await getPostDetails(params.slug);
  
    return {
      props: { post:data }
    }
  }
// statically pre-render dynamic routes 
export async function getStaticPaths(){
    const posts = await getPosts();

    return{
        paths: posts.map(({node: { slug }}) => ({ params: { slug }})),
        fallback: true,
    }
}