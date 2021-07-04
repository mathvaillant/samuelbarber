import React, { useEffect } from 'react'
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

import sr, { defaultScrollBottom } from '../../scrollReveal'

const Work = () => {
  useEffect(() => {
    defaultScrollBottom('.imgWork', sr)
  })

  return (
    <div className='work' id='trabalhos'>
      <h1>Trabalhos</h1>
      <div className='row'>
        <div className='column'>
          <img src={img2} className='imgWork' />
          <img src={img3} className='imgWork' />
          <img src={img1} className='imgWork' />
        </div>
        <div className='column'>
          <img src={img4} className='imgWork' />
          <img src={img5} className='imgWork' />
          <img src={img6} className='imgWork' />
        </div>
        <div className='column'>
          <img src={img7} className='imgWork' />
          <img src={img8} className='imgWork' />
          <img src={img9} className='imgWork' />
        </div>
      </div>
    </div>
  )
}

export default Work
