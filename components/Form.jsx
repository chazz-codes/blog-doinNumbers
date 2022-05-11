import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'



function Form({func}) {
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
    <div className="modal">
        {/* <a href="#" onClick={func}><b>x</b></a> */}
        {sendStatus ? 
          <div> Sent!
          </div> :
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form">
                <div className="upper-form">
                  <div className="nameEmail">
                    <label>Name</label> <br/>
                    <input type="text" name="from_name" />
                  </div>
                  <div className="nameEmail">
                    <label>Email</label> <br/>
                    <input type="email" name="user_email" />
                  </div>
                </div>
                  <br/>
                <div className="text-space">
                  <label>Message</label> <br/>
                  <textarea name="message" /> <br/>
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>}  
    </div>
  )
}

export default Form