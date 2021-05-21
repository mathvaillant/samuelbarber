import React from 'react'
import './Scheduler.scss'
import Barb from '../../images/mustache.png'

const Scheduler = () => {
  return (
    <div className='scheduler'>
      <h1>Agendamentos</h1>
      <img src={Barb} alt='' />
      <div className='scheduler__calendar'>{/* HARDEST PART OF THE APP */}</div>
    </div>
  )
}

export default Scheduler
