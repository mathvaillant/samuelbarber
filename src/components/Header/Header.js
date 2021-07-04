import React from 'react'
import './Header.scss'
import Logo from '../../images/logo.jpg'
import Facebook from '../../images/fb.png'
import Instagram from '../../images/ins.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className='row'>
        <img src={Logo} alt='logo.jpg' />
        <ul>
          <li>
            <a href='#agendar'>Agendar</a>
          </li>
          <li>
            <a href='#trabalhos'>Trabalhos</a>
          </li>
          <li>
            <a href='#'>
              <img src={Facebook} alt='' />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/samuelrodrigues.pt/'>
              <img src={Instagram} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
