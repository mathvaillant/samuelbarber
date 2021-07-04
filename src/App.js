import './App.scss'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Scheduler from './components/Scheduler/Scheduler'
import Showcase from './components/Showcase/Showcase'
import Work from './components/Work/Work'
import FirstRender from './components/FirstRender'
import { useEffect, useState } from 'react'

function App() {
  const [runGif, setRunGif] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setRunGif(false)
    }, 4000)
  }, [runGif])

  return (
    <>
      {!runGif ? (
        <>
          <Showcase />
          <Header />
          <div className='App'>
            <AboutMe />
            <Scheduler />
            <Work />
          </div>
          <Footer />
        </>
      ) : (
        <FirstRender />
      )}
    </>
  )
}

export default App
