import React from 'react'
import './App.scss'
import AboutMe from './components/AboutMe/AboutMe'
import Header from './components/Header/Header'
import Scheduler from './components/Scheduler/Scheduler'
import Showcase from './components/Showcase/Showcase'

function App() {
  return (
    <div className='App'>
      <Header />
      <Showcase />
      <AboutMe />
      <Scheduler />
    </div>
  )
}

export default App
