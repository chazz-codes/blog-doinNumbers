import React from 'react'
import useSWR from 'swr'

const QuoteofTheDay = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR('https://zenquotes.io/api/today', fetcher)

  return (
    <React.Fragment>
        <h2>Quote of the Day </h2>
            {data ?
              <div dangerouslySetInnerHTML={{__html: data[0].h}}/> :
              <div> Quote Loading ...</div>}
    </React.Fragment>
  )
}

export default QuoteofTheDay