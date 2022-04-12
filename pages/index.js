// Homepage

// Imports
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

// Content

/* Summary -> {
  title of blog in tab header
  map over posts object to populate PostCard widget posts.length amount of times
  populate PostWidget and Categories for enhanced navigation
}
*/
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head> 
        <title>doinNumbers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
     <div className="lg:col-span-8 col-span-1">
        {posts.map((post,index) => (
        <PostCard post={post.node} key={post.title}/>
      ))}
      </div>
    <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
      </div>
    </div>
      
    </div>
  )
}
// static site generation using API response from getPosts() to gather posts 
// and assign {posts} as a prop to the Home function
export async function getStaticProps(){
  const posts = (await getPosts() || []);

  return {
    props: { posts }
  }
}