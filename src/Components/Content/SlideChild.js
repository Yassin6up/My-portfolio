import React, { Component } from 'react'
import "./Slide.css"

class SlideChild extends Component {
  render() {
    return (
      <>
      <div className='slide-child'>
        <img src={this.props.skillImg} alt=""/>
        <div className='dataSlide'>
        <h1>{this.props.skill}</h1>
        <p> 1 years of experience</p>
        </div>
      </div>
      </>
    )
  }
}

export default SlideChild