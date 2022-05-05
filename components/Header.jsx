import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Contact from './Contact';

const Header = () => {

   

  return (
    <div >
        <div >
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
            <Contact />
        </div>

    </div>
  )
};

export default Header;