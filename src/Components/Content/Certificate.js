import React, { Component } from 'react'
import "./Certificate.css"


class Certificate extends Component {
  render() {
    return (
        <div className='cert-div'>
        <img src={this.props.certificateImg} class="w-full h-56 mx-auto object-cover" alt=''/>
        <h1>{this.props.certificate}</h1>
        <h6>{this.props.issuedBy}</h6>
        <p >{this.props.date}</p>
      </div>
    )
  }
}

export default Certificate