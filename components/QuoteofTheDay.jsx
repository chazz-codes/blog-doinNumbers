import React, {useState, useEffect} from 'react'
import useSWR from 'swr'

const QuoteofTheDay = ({quotes}) => {
  


  return (
    <React.Fragment>
        <h2>Quote of the Day </h2>
        {/* importing premade html so use dangerouslySetInnerHTML __html */}
        <div dangerouslySetInnerHTML={{__html: quotes.h}}/>
              
    </React.Fragment>
  )
}

export default QuoteofTheDay