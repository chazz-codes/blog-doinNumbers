import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Contact from './Contact';

const Header = () => {

   const [clicked, setClicked] = useState(false)

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
                <button onClick={() => setClicked(true)} className="contact"> Contact </button>
                <Contact 
                    onClose={() => setClicked(false)}
                    show = {clicked}  
                />
            </div>
        </div>

    </div>
  )
};

export default Header;