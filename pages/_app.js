
import React from 'react'
import '../styles/globals.scss'
import { SnipcartProvider } from 'use-snipcart/useSnipcart'
 


// CartProvider wrapped around entire application 
export default function MyApp({ Component, pageProps }) {
  return (
  
     <SnipcartProvider>
          
          <Component {...pageProps} />
        
      </SnipcartProvider>
   
  ) 
}

