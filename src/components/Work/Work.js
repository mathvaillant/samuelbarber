import React from 'react'
import './Work.scss'
import img1 from '../../images/work/1.jpeg'
import img2 from '../../images/work/2.jpeg'
import img3 from '../../images/work/3.jpeg'
import img4 from '../../images/work/4.jpeg'
import img5 from '../../images/work/5.jpeg'
import img6 from '../../images/work/6.jpeg'
import img7 from '../../images/work/7.jpeg'
import img8 from '../../images/work/8.jpeg'
import img9 from '../../images/work/9.jpeg'

const Work = () => {
  return (
    <div className='work' id='trabalhos'>
      <h1>Trabalhos</h1>
      <div className='row'>
        <div className='column'>
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
        </div>
        <div className='column'>
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
        </div>
        <div className='column'>
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
        </div>
      </div>
    </div>
  )
}

export default Work
