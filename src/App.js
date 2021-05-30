import './App.scss'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Scheduler from './components/Scheduler/Scheduler'
import Showcase from './components/Showcase/Showcase'
import Work from './components/Work/Work'

function App() {
  return (
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
  )
}

export default App
