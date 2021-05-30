import React from 'react'
import './AboutMe.scss'
import Pole from '../../images/pole.png'
import Logo from '../../images/logo.jpg'
import Saw from '../../images/bg.png'
import Star from '../../images/star.png'
import Barber from '../../images/2.jpeg'
import Barber2 from '../../images/1.2.jpeg'

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <img src={Saw} alt='' className='saw' />
      <div className='left'>
        <img src={Logo} alt='' />
        <h3>
          <img src={Star} alt='' className='star' />
          <img src={Star} alt='' className='star' />
          <img src={Star} alt='' className='star' />
          <img src={Star} alt='' className='star' />
          <img src={Star} alt='' className='star' />
        </h3>
        <p>"Barbeiro a domicílio Nº 1 de Lisboa"</p>
        <img className='barber' src={Barber} alt='' />
        <img className='barber2' src={Barber2} alt='' />
      </div>
      <div className='right'>
        <p>
          Atendimento de confiança ao seu alcançe 24/7, porque Barba, Cabelo e
          Bigode são coisas sérias{' '}
        </p>
      </div>
      <div className='pole'>
        {' '}
        <img src={Pole} alt='' />
      </div>
    </div>
  )
}

export default AboutMe
