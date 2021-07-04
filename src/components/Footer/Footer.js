import React, { useEffect } from 'react'
import './Footer.scss'
import sr, { defaultScrollBottom } from '../../scrollReveal'

import Machine from '../../images/machine.png'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_hEgn7VwEaikcA4ZnuQmJ1')

const Footer = () => {
  useEffect(() => {
    defaultScrollBottom('.machine', sr)
  })

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_r309llj',
        e.target,
        'user_hEgn7VwEaikcA4ZnuQmJ1'
      )
      .then(
        (result) => {
          alert('Email enviado')
        },
        (error) => {
          alert('Campos inválidos ou não preenchidos')
        }
      )
    e.target.reset()
  }
  return (
    <>
      <img src={Machine} alt='' className='machine' />
      <div className='footer'>
        <h2>Contacto por email?</h2>
        <form onSubmit={sendEmail}>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            id='name'
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            id='email'
            required
          />

          <label htmlFor='message'>Mensagem</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='6'
            required></textarea>

          <input type='submit' className='submitBtn'></input>
        </form>
        <a target='_blank' href='https://matheusvaillant.com'>
          Made by Matheus Vaillant - 2021
        </a>
      </div>
    </>
  )
}

export default Footer
