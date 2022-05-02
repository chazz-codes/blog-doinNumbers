import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Header = () => {
    const [categories, setCategories] = useState([])

   

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
          
        </div>

    </div>
  )
};

export default Header;