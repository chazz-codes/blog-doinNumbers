import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { fetchData } from '../lib/quotes'
import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'
import { getGraphCMS } from '../lib/graphcms'
import previewImage from '/public/images/preview-img.png'
import Categories from '../components/Categories'

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
        <meta
          property="og:image" content="https://res.cloudinary.com/doinnumbers/image/upload/v1654539207/preview-img_vr4ldh.png"

        />
      </Head>
      <div className="homeBody">
        <div className="qotd">
          <h2>Quote of the Day</h2>
          <div dangerouslySetInnerHTML={{__html: quotesData[0].h}}/>
        </div>
        <div className="blogFeed">
          <section>
            <br/>
            <p>Hey my name is <b>Chazz</b>. I am a software engineer and I enjoy lofi music.
            contact me via <a href='mailto:chazz@doinnumbers.com'>email</a>
            </p>
            <br/>
            <br/>
          </section>
          <div className="main-feed">
            <div id="post-stream">
                <div className="section-title"> <h1><span>Latest Posts</span></h1></div>
                <div className="graphCMSPosts">
                    {graphCMSPosts.map(({id, title, featuredImage, slug, publishedAt, excerpt, createdAt}) => (
                    
                      <div className='postPreview' key={id}> 
                        <div className='postPreviewImage'>
                          <Image
                            alt="Next.js logo"
                            src={featuredImage.url}
                            width={210}
                            height={210}
                          />
                        </div>
                        <br/>
                        <div className='postPreviewText'>
                          <h2> <b>{title}</b></h2> 
                          <small>
                            {moment(publishedAt).format("dddd | MMM DD,YYYY | h:mma")} <br/>
                          </small>
                      
                          
                          <br/>
                          <Link href={`/blog/${slug}`}>
                            <a> → Read More →</a>
                          </Link>
                        </div>

                          </div>

                    ))}
                </div>
            </div>
            {/* <div id="categories-stream">
              <Categories />
            </div> */}
          </div>
        </div>
      </div>
    </Layout>

  )
}