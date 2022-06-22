
import React from 'react'
import '../styles/globals.scss'
 


// CartProvider wrapped around entire application 
export default function MyApp({ Component, pageProps }) {
  return (
  
      <React.Fragment>
       
          <Component {...pageProps} />
        
      </React.Fragment>
   
  ) 
}

