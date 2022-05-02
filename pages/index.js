// Homepage

// Imports
import Head from 'next/head'
<<<<<<< Updated upstream
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
=======
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { fetchData } from '../lib/quotes'
import Link from 'next/link'
import Date from '../components/date'
import { getGraphCMS } from '../lib/graphcms'
import Image from 'next/image'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
     <div className="lg:col-span-8 col-span-1">
        {posts.map((post,index) => (
        <PostCard post={post.node} key={post.title}/>
      ))}
=======
      <div className="homeBody">
        <div className="qotd">
          <h2>Quote of the Day</h2>
          <div dangerouslySetInnerHTML={{__html: quotesData[0].h}}/>
        </div>
        <div className="blogFeed">
          <section>
            <p>Hey my name is <b>Chazz</b>. I am a software engineer and I enjoy lofi music.
            contact me via <a href='mailto:chazz@doinnumbers.com'>email</a>
            </p>
            
          </section>
          <section className='Blog-Main'>
            <h2>Blog</h2>
            <ul>
              {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small >
                  <Date dateString={date} />
                </small>
              </li>
              ))}
            </ul>
          </section>
          <div className="graphCMSPosts">
              {graphCMSPosts.map(({id, title, featuredImage, slug, publishedAt, excerpt}) => (
                // <li key={id}> {title} </li>
                <div className='postPreview' key={id}> 
                  <Image
                    className='postPreviewImage'
                    alt="Next.js logo"
                    src={featuredImage.url}
                    width="200%"
                    height="200%"
                    
                  />
                  <br/>
                  <div className='postPreviewText'>
                    <h2> {title}</h2> 
                    <small>

                    {publishedAt} <br/>
                    </small>
                    <br/>
                    {excerpt} <br/> <br/>
                    <Link href={`/blog/${slug}`}>
                    <a> → Read More →</a>
                    </Link>
                  </div>

                </div>
              ))}
          </div>
        </div>
>>>>>>> Stashed changes
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