import React from 'react'
import './Work.scss'
import Barb from '../../images/mustache.png'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles.js'
import img1 from '../../images/work/1.jpeg'
import img2 from '../../images/work/2.jpeg'
import img3 from '../../images/work/3.jpeg'
import img4 from '../../images/work/4.jpeg'

const Work = () => {
  return (
    <div className='work' id='trabalhos'>
      <h1>Trabalhos</h1>
      <img src={Barb} alt='' />
      <AwesomeSlider className='slider' cssModule={AwsSliderStyles}>
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
      </AwesomeSlider>
    </div>
  )
}

export default Work
