import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { fetchData } from '../lib/quotes'
import Link from 'next/link'
import Date from '../components/date'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { getGraphCMS } from '../lib/graphcms'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  const quotesData = await fetchData()
  const graphCMSPosts = await (await getGraphCMS()).props.posts;
  console.log(graphCMSPosts)
  

  return {
    props: {
      allPostsData, 
      quotesData,
      graphCMSPosts
    }
  }
}

export default function Home({ allPostsData, quotesData, graphCMSPosts }) {
 
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
          {/* <div className="graphCMSPosts">
              {graphCMSPosts.map(({id, title, featuredImage}) => (
                <li key={id}> {title} </li>
              ))}
          </div> */}
        </div>
      </div>
    </Layout>
  )
}