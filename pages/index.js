import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { fetchData } from '../lib/quotes'


import Link from 'next/link'
import moment from 'moment'
import Image from 'next/image'
import { getGraphCMS } from '../lib/graphcms'
import Categories from '../components/Categories'

import React, { useState, useEffect } from 'react'
import { getGraphCMSCat } from '../lib/getcategories'
import { QuoteofTheDay } from '../components'

import { printful } from '../lib/printful-client'

// Homepage of doinNumbers Application


export async function getStaticProps(){

  const graphCMSPosts = await (await getGraphCMS()).props.posts;
  const products = await (await getGraphCMS()).props.products
  const graphCategory = await (await getGraphCMSCat()).props.categories;
  const res = await fetch("https://zenquotes.io/api/quotes");
  const quoteData = await res.json()
  // const { result } = await printful.get("products")



  return {
    props: {
      quoteData,
      graphCMSPosts,
      graphCategory,
      products
    }
  }
}

export default function Home({ quoteData, graphCMSPosts, graphCategory, products }) {
  
  const [windowWidth, setWindowWidth] = useState('')
  
  // store date in variable for use with Quote of the Day Component
  let today = new Date().getUTCDate()


useEffect(()=> {

    // logic here is necessary for talk bubble responsiveness

    setWindowWidth(window.innerWidth)
    let handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
   
  }, [])

  
  

 
 
  return (
    <Layout home>
      {/* Metadata and Head Details */}
      <Head>
        <title>{siteTitle}</title>
        <meta
          property="og:image" content="https://res.cloudinary.com/doinnumbers/image/upload/v1654539207/preview-img_vr4ldh.png"

        />
      </Head>

        {/* Quote of the Day Section */}
            <div className="img-bg"></div>
          <figure className="qotd">
         {/* talk cloud logic, resizes proportions based on screensize */}
            <Image
                src="https://res.cloudinary.com/doinnumbers/image/upload/v1655832942/talkbox_yfjonb.png"
                width={700 }
                height={windowWidth > 688 ? 400 :  windowWidth > 520 ? 600 : windowWidth > 400 ? 1000 : windowWidth > 380 ? 1200 : 1400}
                
                className="quotebox"
              /> 
            <figcaption>
              <QuoteofTheDay date={today} quotes={quoteData[today]}/>
            </figcaption>
          </figure>
      <div className="shop-banner" > </div>
      <div className="shop-banner" id="shop-banner"> </div>
      <div className="shop-banner" id="shop-banner" > SHOP </div>
      
      <div className="shop">
        {/* map render products (from graphCMS)  */}
        {products.map(({name, image, price, description, productSlug}) => (
          <div key={productSlug} className="productBox">
              <Image
                src={image[0].url}
                height={300}
                width={300}
              />
              <div className="product-info"> 
                <h3><b>{name}</b></h3>
                <h2>${price}</h2>
                {/* button logic - snipcart api connection */}
                <button className="snipcart-add-item"
                  data-item-id={productSlug}
                  // data-item-url={``}
                  data-item-price={price}
                  data-item-description={description}
                  data-item-image={image[0].url}
                  data-item-name={name}
                  data-item-custom1-name="Size"
                  data-item-custom1-options="Small|Medium|Large|XL|XXL"
                  data-item-custom1-placeholder="Select Size"
                  data-item-stackable="never"
                  data-item-weight="173"
                 
                  >
                  Add to cart
                </button>
              </div>
          </div>
        ))}
      </div>
      <div className="shop-banner" id="shop-banner"></div>
      <div className="shop-banner" id="blog-banner"> <span><h1>Blog</h1></span></div>
      <div className="homeBody">
        {/* Feed of Posts  */}
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
                  {/* map render blog posts */}
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
                          <div className="preview-text-box">
                            <h2> <b>{title}</b></h2> 
                          </div>
                          <small>
                            {/* Moment reorganizes the Data into a human readable format */}
                            {moment(publishedAt).format("dddd | MMM DD,YYYY | h:mma")} <br/>
                          </small>
                      
                          
                          <br/>
                          {/* Clickable Link to article */}
                          <Link href={`/blog/${slug}`}>
                            <a> → Read More →</a>
                          </Link>
                        </div>

                          </div>

                    ))}
                </div>
            </div>
            <div id="categories-stream">
              {/* blog categories passed to categories component as 'choices' prop */}
              <Categories choices={graphCategory} />
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}