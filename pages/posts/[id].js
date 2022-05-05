import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
  console.log(postData)
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <div className="articleBox">
          <article>
            <h1 >{postData.title}</h1>
            <div >
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </div>
      </Layout>
    )
  }