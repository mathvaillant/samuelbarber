import React from 'react'
import './Work.scss'
import Barb from '../../images/mustache.png'

const Work = () => {
  return (
    <div className='work'>
      <h1>Trabalho</h1>
      <img src={Barb} alt='' />
      <div className='Work'>{/* HARDEST PART OF THE APP */}</div>
    </div>
  )
}

export default Work
