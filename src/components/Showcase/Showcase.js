import React, { Component } from 'react'
import Logo from '../../images/altLogo.png'
import sr, { defaultScrollTop } from '../../scrollReveal'
import './Showcase.scss'

export default class Showcase extends Component {
  componentDidMount = () => {
    defaultScrollTop(this.refs.img, sr)
  }

  render() {
    return (
      <div className='showcase'>
        <img src={Logo} alt='' ref='img' />
      </div>
    )
  }
}
