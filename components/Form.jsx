import React from 'react'

function Form({func}) {
   
  return (
    <div className="modal">
        <a href="#" onClick={func}>x</a>
    </div>
  )
}

export default Form