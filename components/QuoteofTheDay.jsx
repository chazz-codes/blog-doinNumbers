import React, {useState, useEffect} from 'react'
import useSWR from 'swr'

const QuoteofTheDay = ({quotes}) => {
  

console.log("quotes", quotes)
  return (
    <React.Fragment>
        <h2>Quote of the Day </h2>
        <div dangerouslySetInnerHTML={{__html: quotes.h}}/>
              
    </React.Fragment>
  )
}

export default QuoteofTheDay