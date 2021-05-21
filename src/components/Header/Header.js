import React from 'react'
import './Header.scss'
import Logo from '../../images/logo.jpg'
import PT from '../../images/portugal.png'
import EN from '../../images/usa.png'

const Header = () => {
  return (
    <div className='Header'>
      <img src={Logo} alt='logo.jpg' />
      <ul>
        <li>
          <a href='#agendar'>Agendar</a>
        </li>
        <li>
          <a href='#trabalhos'>Trabalhos</a>
        </li>
        <li>
          <a href='#contacto'>Contacto</a>
        </li>
        {/* <li>
          <span>
            <img src={PT} alt='' />
          </span>
          <span>
            <img src={EN} alt='' />
          </span>
        </li> */}
      </ul>
    </div>
  )
}

export default Header
