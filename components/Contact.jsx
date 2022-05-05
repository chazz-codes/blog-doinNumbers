import React, { useEffect, useRef, useState } from 'react'

const Contact = ({show, onClose}) => {
    const handleClose = (e) => {
        e.preventDefault();
        onClose()
    }
    const [isVisible, setVisible] = useState(false);

    return <div>{show ? <div>Chazz
        <a href="#" onClick={handleClose}>x</a>
    </div> : null}</div>
}

export default Contact