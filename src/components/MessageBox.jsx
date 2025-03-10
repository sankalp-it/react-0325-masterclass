import React from 'react'

export const MessageBox = ({type,title,description}) => {
  return (
    <div className={type}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
    </div>
  )
}
