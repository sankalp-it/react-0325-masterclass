import React from 'react'

/*
 instead of passing different props I want to pass one pro and children
 
*/
export const MessageBox = ({messageType, children}) => {
  return (
    <div className={`box ${messageType}`}>
        {children}
    </div>
  )
}
