import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <div className='footer-div'>
        <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#Certifications'>Certifications</a></li>
        </ul>
        <img src='https://dama.ink/static/media/curve-hr.16b9fca607ca7942b81f2887bc2dae79.svg' alt='' style={{width:"60%",marginTop:"10px"}}/>
        <p>Copyright © Kamili Fatima Zahra. All Right Reserved</p>
      </div>
    )
  }
}

export default Footer