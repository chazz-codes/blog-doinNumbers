import React, { useEffect, useRef, useState } from 'react'
import Form from './Form';

const Contact = ({show, onClose}) => {
    const handleClose = (e) => {
        e.preventDefault();
        onClose()
    }
    const [isVisible, setVisible] = useState(false);

    return <div>{show ? <div >
        <Form func = {handleClose} /> 
    </div> : null}</div>
}

export default Contact