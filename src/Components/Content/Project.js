import React, { Component } from 'react'
import "./Project.css"

class Project extends Component{
    
  HandekClick=()=>{
    return window.location.href=this.props.info.link
  }
render(){
  return (
    <div className='project-div'>
        <img src={this.props.info.img} alt=''/>
        <h1>{this.props.info.name}<code>{this.props.info.id}</code></h1>
        <p>{this.props.info.date.substring(0,10)}</p>
       <button onClick={this.HandekClick}>Click here</button>
        
    </div>
  )
}
}

export default Project