import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Contact from './Contact';
import Form from './Form';

const Header = () => {

   const [isActive, setActive] = useState(false)

   
//    const modal = document.getElementById("modal")
   const toggleClass = () => {
       setActive(!isActive)
   }


  return (
    <div >
        <div className="header-container">
            <div></div>
            <div className='header'>
                <Link href="/">
                    <span >
                <Image 
                    width={210}
                    height={100}
                    src={'/doinNumbers.svg'}
                    />
                    </span>
                </Link>
            </div>
            <div className="header-button-container">
                <button id="modalButton" onClick={toggleClass}>Contact</button>
                
            </div>
            <div className={`modal ${isActive ? "visible" : "not"}`} id="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={toggleClass}>&times;</span>
                        <h2>Contact</h2>
                    </div>
                    <div className='modal-body'>
                        <Form />
                    </div>
                    <div className="modal-footer">
                        <small>please allow 24-72 hours for response</small>
                    </div>
                </div> 
            
            </div>
        </div>

    </div>
  )
};

export default Header;