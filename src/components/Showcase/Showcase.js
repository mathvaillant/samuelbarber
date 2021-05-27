import React from 'react'
import Samuel from '../../images/3.png'
import Logo from '../../images/altLogo.png'

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
        <img src={Logo} alt='' className='logo' />
      </div>
    </div>
  )
}

export default Showcase
