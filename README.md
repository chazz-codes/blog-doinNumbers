# doinNumbers
## A blog by Chazz J. 


doinNumbers is a blog meant to demonstrate and chronicle my learnings in technology.

I started learning how to code in 2021. This shall be a living document of my journey. 



## Technologies Included

- Next.js
- Next/Image
- Next/RichText
- GraphCMS
- Quote of the Day API
- FontAwesome
- Emailjs
- Moment
- CSS3
- Adobe Illustrator
- Hosting with Vercel
- Custom Domain from Google
- Personalized Email for Site

In this blog project, I also included certain features to show what I know
 
 - Modal
 - Form Submission
 - Animation
 - Flexbox
 - Responsive Design using Media Queries
 - Interaction with 3rd Party API
 - Interaction with GraphCMS Database
 - Server-side Rendering
 - Model View Controller Design
 - Conditional Rendering
 - Dynamic Routes


Project Background
> Originally wanted to do this project in August 2021 but honestly lacked the knowledge of how to put all my visions together. Had a 5 1/2 month role as an Associate Software Engineer where my entire time was spent learning about Java and Springboot. I've spent time as a graphic designer so my interest in client facing work lead me to desire working on front end technologies a lot more. This project shows a combination of my graphic design know how and what I have been able to teach myself about Next.js.


## Details
### Blog Feed
The latest posts are grabbed from a GraphCMS database. They are sorted in the query based upon the most recently updated post. 
Posts are rendered through use of .map on the JSON object returned from my query. 
```
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
            <h2> {title}</h2> 
            <small>
              {moment(publishedAt).format("dddd | MMM DD,YYYY | h:mma")} <br/>
            </small>
            <br/>
            
             <br/> <br/>
            <Link href={`/blog/${slug}`}>
              <a> → Read More →</a>
            </Link>
          </div>

        </div>
      ))}
</div>
```

### Quote of the Day
Quote of the Day gathers and renders a quote and author. It changes automatically every 24 hours

---
### Contact Button
Contact button has animated transitions and renders an animated modal when clicked
On mobile the contact button is swapped with a burger icon.

*Burger to be used later as a menu button when more parts are added to site*

----
### Contact Form
Contact form allows you to send an email directly to me through the website. It checks for errors and won't accept email inputs without "@" included. Renders a success message when message is sent.

*Future plans include not allowing it to send blank messages.* 

---
### Logo
doinNumbers logo made by me :) has been made on merchandise already. The camelCase in the logo is a nod to the influence of coding on my present and future

---

### Blog Posts
Each blog post is dynamically routed with a slug gathered from the GraphCMS JSON object. The post itself is rendered using RichText.

---

> **Future of this Site**
In coming weeks the following is planned to be added:
-- Shop connected to Shopify API
-- User Authentication & Authorization
-- Search by Post Category
-- Featured Post slideshow
-- Comment on Posts
-- Improved Metadata, Unique Preview Images for each post

If you read this far... thank you. 

Hopefully one day this platform can be an insipration to the youth to get into coding thus making math & science cool.

We can make an impact at scale with the right knowledge. Thats the definition of doinNumbers. 

Chazz
doinnumbers.com
