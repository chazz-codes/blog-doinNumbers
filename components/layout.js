import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

import Header from './Header'
import Footer from './Footer'


export const siteTitle = 'doinNumbers'


export default function Layout({ children, home }) {

  return (
    <div >
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
        <meta
          name="description"
          content="Coding, Career, and Life"
        />
        
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <img src={previewImage.src}></img>
          {previewImage.src}
        </div>
      )}
      <Footer />
    </div>
  )
}