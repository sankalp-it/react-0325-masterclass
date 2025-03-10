import React from 'react'
import { gitInfo } from '../utils/git-info.js'
import './GitInfoDisplay.css'

export const GitInfoDisplay = () => {
  return (
    <>
        <p><font className='gitinfo-header'>Built from Git Repo: </font><font className='gitinfo-text'>{gitInfo}</font></p>
    </>
  )
}
