// Post Categories
import React from 'react'
import Link from 'next/link'







const Categories = ({choices}) => {


  return (
    <React.Fragment>
      <div className="section-title">
       
          <h1>  
            <span> Categories </span>
          </h1>
          <ul>
            {choices.map( ({name, slug}) => (
              <li key={slug}>
               <Link href={slug}>
                <a> 
                  <h3>
                    #{name} 
                  </h3>
                </a>
               </Link>
              </li>
            ))}
          </ul>
      </div>

    </React.Fragment>
  )
}

export default Categories

