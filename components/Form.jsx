// Email Form


import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'



function Form() {
  const form = useRef();
  const [sendStatus, setSendStatus] = useState(false)
  

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('contact_service', 'contact_form', form.current, '4nPO9xMl7qDQ_H8bq')
      .then((result) => {
        
          setSendStatus(true)
      }, (error) => {
        alert("Error")
          console.log(error.text);
      });
  }


  return (
    <div id="modalForm" >
        {sendStatus ? 
          <div> Sent!
          </div> :
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form">
                <div className="row">
                  <div className="col-25">
                    <label>Name</label> 
                  </div>
                  <div className="col-75">
                    <input type="text" name="from_name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label>Email</label> 
                  </div>
                  <div className="col-75">
                    <input type="email" name="user_email" />
                  </div>
                </div>
                  <div className="col-25">
                    <label>Message</label> <br/>
                  </div>
                  <div className="col-75">
                    <textarea name="message" /> <br/>
                  </div>
                  <div className="row">
                    <input type="submit" value="Send" />
                  </div>
              </div>
            </form>
          </div>}  
    </div>
  )
}

export default Form