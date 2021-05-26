import React, { useState } from 'react'
import './Scheduler.scss'
import Barb from '../../images/mustache.png'
import Upload from '../../images/upload.png'
import WhatsApp from '../../images/whatsapp.png'
import DateTimePicker from 'react-datetime-picker'

const Scheduler = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('')
  const [day, setDay] = useState('')
  const [name, setName] = useState('Default name')
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

  const whatsAppHandler = () => {
    if (time === '' || day === '' || name === '') {
      alert('Informe data, hora e seu nome')
    } else {
      let newTime = time
      let newDay = day
      let newAddress = 'Endereço aleatório'
      let clientName = name
      let sampleImg = ''
      let message = `Olá Samuel, como está? Gostava de agendar um corte para o dia ${newDay} às ${newTime} em minha residência que fica no endereço ${newAddress}. Em anexo deixo o estilo que mais curto para meu cabelo. Fico a aguardar uma confirmação, Obrigado! ${clientName}`
      const location = window.location
      location.replace(
        `https://api.whatsapp.com/send?phone=+351963007246&text=${message}&source=&data=&app_absent=`
      )
    }
  }

  return (
    <div className='scheduler'>
      <h1>Agendamentos</h1>
      <img src={Barb} alt='bar.png' />
      <div className='scheduler__inner'>
        <h4>Selecione a melhor data e horário </h4>
        <br />
        <DateTimePicker
          minDate={new Date()}
          className='datePicker'
          onChange={onChange}
          value={date}></DateTimePicker>
        <h4>Qual seu estilo de corte favorito? (Opcional)</h4>
        <br />
        <form>
          <img src={Upload} alt='' />
          <input type='file' name='file' id='file' />
        </form>
        <br />
        <h4>
          Tem alguma alergia? <input type='text' />
        </h4>
        <h4>Observações</h4>
        <br />
        <textarea name='message' id='message' cols='30' rows='3'></textarea>

        <button className='book' onClick={whatsAppHandler}>
          Agendar pelo WhatsApp <img src={WhatsApp} alt='' />
        </button>
      </div>
    </div>
  )
}

export default Scheduler
