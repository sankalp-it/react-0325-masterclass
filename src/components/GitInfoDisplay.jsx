import React from 'react'
import { gitInfo } from '../utils/git-info.js'
import './GitInfoDisplay.css'

export const GitInfoDisplay = () => {
  return (
    <div className="gitinfo">
        <p>Git Info: {gitInfo}</p>
    </div>
  )
}
