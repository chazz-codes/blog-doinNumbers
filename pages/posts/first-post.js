import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout.js'

export default function FirstPost(){
    return(
        <Layout>
            <div>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>
                    First Post
                </h1>
                <h2>
                    <Link href='/'>
                        <a> Back to Home </a>
                    </Link>
                </h2>
            </div>
        </Layout>
    )
}