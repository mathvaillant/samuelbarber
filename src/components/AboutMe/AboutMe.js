import React from 'react'
import './AboutMe.scss'
import Pole from '../../images/pole.png'

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='left'>
        <h3>Nº1</h3>
        <small>Barbeiro a domicílio Nº 1 de Lisboa</small>
      </div>
      <div className='right'>
        <h3>Sobre mim</h3>
        <div>
          <span id='1'></span>
          <span id='2'></span>
        </div>
        <small>Curta descrição sobre voce e sua carreira</small>
      </div>
      <div className='pole'>
        <img src={Pole} alt='' />
      </div>
    </div>
  )
}

export default AboutMe
