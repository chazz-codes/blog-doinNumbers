import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='col-span-1 lg:col-span-8'>
        <section>
          <p>Hey my name is <b>Chazz</b>. I am a software engineer and I enjoy lofi music.
          contact me via <a href='mailto:chazz@doinnumbers.com'>email</a>
          </p>
        </section>
        <section >
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
              <Link href={`/posts/${id}`}>
              <h3>
                <a>{title}</a>    
              </h3> 
              </Link>
              <small >
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}