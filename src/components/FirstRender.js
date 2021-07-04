import React from 'react'
import Gif from '../images/gif.gif'
import './FirstRender.scss'

const FirstRender = () => {
  return (
    <div className='gifDiv'>
      <img src={Gif} alt='' />
    </div>
  )
}

export default FirstRender
