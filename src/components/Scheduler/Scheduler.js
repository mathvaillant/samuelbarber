import React, { useState } from 'react'
import './Scheduler.scss'
import Barb from '../../images/mustache.png'
import WhatsApp from '../../images/whatsapp.png'
import DateTimePicker from 'react-datetime-picker'

import Scissors from '../../images/b4.png'

const Scheduler = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [day, setDay] = useState('')
  const [observations, setObservations] = useState('')
  const [address, setAddress] = useState('')

  const onChange = (date) => {
    if (date !== null) {
      const fullDate = date.toLocaleDateString()
      const fullTime = date.getHours()
      const fullMinutes = date.getMinutes()
      setDate(date)
      setDay(fullDate.toString())
      setTime(`${fullTime.toString()}:${fullMinutes.toString()}`)
    } else {
      return null
    }
  }

  const whatsAppHandler = (e) => {
    e.preventDefault()
    if (time === '' || day === '' || name === '') {
      alert('Informe data, hora e seu nome')
    } else {
      let newTime = time
      let newDay = day
      let newAddress = address
      let Obs = observations !== '' ? 'Obs: ' + observations : null
      let clientName = name
      let message = `Olá Samuel, como está? Gostava de agendar um corte para o dia ${newDay} às ${newTime} horas. De preferência na ${newAddress}. Fico a aguardar uma confirmação, Obrigado! ${clientName}. ${Obs}`
      const location = window.location
      location.replace(
        `https://api.whatsapp.com/send?phone=+351963007246&text=${message}&source=&data=&app_absent=`
      )
    }
  }

  return (
    <div className='scheduler' id='agendar'>
      <h1>Agendamentos</h1>
      <img src={Barb} alt='bar.png' />
      <div className='scheduler__inner'>
        <form>
          <label htmlFor='name'>Diga-nos o seu nome</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />

          <h4>Selecione a melhor data e horário </h4>

          <DateTimePicker
            minDate={new Date()}
            className='datePicker'
            onChange={onChange}
            value={date}></DateTimePicker>

          <label htmlFor='where'>Onde prefere cortar?</label>
          <select
            name='where'
            id='where'
            value={address}
            onChange={(e) => setAddress(e.target.value)}>
            <option value='Minha residência'>Em minha residência</option>
            <option value='Residência do Barbeiro'>
              Residência do Barbeiro
            </option>
          </select>

          <label htmlFor='message'>Observações</label>

          <textarea
            onChange={(e) => setObservations(e.target.value)}
            name='message'
            id='message'
            cols='30'
            rows='3'></textarea>
          <br />
          <button className='book' onClick={whatsAppHandler}>
            Agendar
            <img src={WhatsApp} alt='' className='WhatsAppimg' />
          </button>
        </form>
      </div>
      <img src={Scissors} alt='' className='scissors' />
    </div>
  )
}

export default Scheduler
