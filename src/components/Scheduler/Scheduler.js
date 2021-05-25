import React, { useState } from 'react'
import './Scheduler.scss'
import Barb from '../../images/mustache.png'
import Upload from '../../images/upload.png'
import DateTimePicker from 'react-datetime-picker'

const Scheduler = () => {
  const [date, setDate] = useState(new Date())
  const [scheduleDate, setScheduleDate] = useState('')
  const [chatMessage, setChatMessage] = useState('')
  const [chatOpen, setChatOpen] = useState(false)

  const onChange = (date) => {
    if (date !== null) {
      const fullDate = date.toDateString()
      const fullTime = date.getHours()
      const fullMinutes = date.getMinutes()
      setDate(date)
      setScheduleDate(
        `${fullDate} | Às ${fullTime.toString()}:${fullMinutes.toString()}`
      )
    } else {
      return null
    }
  }

  const openChatHandler = () => {
    setChatOpen(true)
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
        <button className='book' onClick={openChatHandler}>
          Agendar
        </button>
      </div>
    </div>
  )
}

export default Scheduler
