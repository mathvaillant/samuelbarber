import React from 'react'
import Samuel from '../../images/3.png'
import Logo from '../../images/logo.jpg'
import './Showcase.scss'

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase__left'>
        <img src={Samuel} alt='' />
        <span id='blue1'></span>
        <span id='red'></span>
        <span id='blue2'></span>
      </div>
      <div className='showcase__right'>
        <img src={Logo} alt='' />
      </div>
    </div>
  )
}

export default Showcase
