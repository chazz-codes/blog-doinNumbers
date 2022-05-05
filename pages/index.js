import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { fetchData } from '../lib/quotes'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'

import { getGraphCMS } from '../lib/graphcms'

export async function getStaticProps(){
  const quotesData = await fetchData()
  const graphCMSPosts = await (await getGraphCMS()).props.posts;
  

  return {
    props: {
      quotesData,
      graphCMSPosts
    }
  }
}

export default function Home({ quotesData, graphCMSPosts }) {

 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
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
         
          <div className="graphCMSPosts">
              {graphCMSPosts.map(({id, title, featuredImage, slug, publishedAt, excerpt}) => (
               
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

                    {moment(publishedAt).format("dddd | MMM DD,YYYY | h:mma")} <br/>
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
      </div>
    </Layout>
  )
}