import React from 'react'
import Samuel from '../../images/3.png'
import Logo from '../../images/logo.jpg'
import './Showcase.scss'

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className='showcase__left'>
        <img src={Samuel} alt='' />
      </div>
      <div className='showcase__right'>
        <img src={Logo} alt='' />
      </div>
    </div>
  )
}

export default Showcase
