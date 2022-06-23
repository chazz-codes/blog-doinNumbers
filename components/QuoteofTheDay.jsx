import React, {useState, useEffect} from 'react'
import useSWR from 'swr'

const QuoteofTheDay = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    // const { data, error } = useSWR('https://zenquotes.io/api/today', fetcher)
    const {isLoading, setIsLoading} = useState(true)
    const {quoteData, setQuoteData} = useState(null)


    useEffect( () => {
      fetch("https://zenquotes.io/api/today")
    .then( (res) => res.json())
    .then((data) => {
      setQuote(data)
      setIsLoading(false)
    })
}, [])


  return (
    <React.Fragment>
        <h2>Quote of the Day </h2>
           {isLoading ? <h2>Now Loading...</h2> :
              <div dangerouslySetInnerHTML={{__html: data[0].h}}/> 
  }
    </React.Fragment>
  )
}

export default QuoteofTheDay