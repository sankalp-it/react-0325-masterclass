import React from 'react'
import './MessageBox.css'

/*
 instead of passing different props I want to pass one pro and children
 
*/
export const MessageBox = ({messageType, children}) => {
    const [show, setShow] = React.useState(true);
return (
    <div className={show ? '' : 'hidden'}>
            <div className={`box ${messageType}`} style={{ position: 'relative' }}>
                    <button onClick={() => setShow(!show)} className='trigger' style={{ position: 'absolute', right: '10px', top: '0px' }}>X</button>
                    <br></br>
                    {children}
            </div>
    </div>
)
}
