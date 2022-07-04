import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { useSnipcart } from 'use-snipcart/useSnipcart'


const Header = () => {

    const { cart = {}} = useSnipcart()
   
   const [isActive, setActive] = useState(false)

   

   const toggleClass = () => {
       setActive(!isActive)
   }


  return (
    <div >
        <div className="header-container">
            <div className='left'>
                <a href="#" onClick={toggleClass}>
                    <FontAwesomeIcon className='burger' icon={faBars} size="1x"/>
                </a>
            </div>
            
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
                <span>
                    <button id="cashout" className="snipcart-checkout">
                        <div id="cashout-txt">
                            <h3>
                            $ {cart.subtotal?.toFixed(2)}
                            </h3>
                        </div>
                        <div id="cart">
                            <FontAwesomeIcon icon={faShoppingCart} size="2xs" />
                        </div>
                    </button>
                    
                </span>
                <br/>
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