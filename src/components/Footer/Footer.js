import React from 'react'
import './Footer.scss'
import Barb from '../../images/mustache.png'
import Facebook from '../../images/fb.png'
import Instagram from '../../images/ins.png'
import Machine from '../../images/machine.png'

const Footer = () => {
  return (
    <>
      <img src={Machine} alt='' className='machine' />
      <div className='footer'>
        <h2>Contacto por email?</h2>

        <form>
          <label htmlFor='name'>Nome</label>
          <input type='text' name='name' placeholder='Nome' id='name' />

          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Email' id='email' />

          <label htmlFor='message'>Mensagem</label>
          <textarea name='message' id='message' cols='30' rows='6'></textarea>

          <button type='submit' className='submitBtn'>
            Enviar email
          </button>
        </form>
        <div>
          {' '}
          <small>+ 351 999 999 999</small>
          <ul>
            <li>
              <a href='#'>
                <img src={Facebook} alt='' />
              </a>
            </li>
            <li>
              <a href='#'>
                <img src={Instagram} alt='' />
              </a>
            </li>
          </ul>
        </div>
        <h5>Made by MattVaillant - 2021</h5>
      </div>
    </>
  )
}

export default Footer
