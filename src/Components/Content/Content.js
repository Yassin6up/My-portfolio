import React, { Component } from 'react'
import {FaGithub,FaInstagram,FaLinkedin} from "react-icons/fa"
import "./Content.css"
import Slide from './Slide'
import Certificate from './Certificate'
import img1 from "../../images/cert.jpg"
import Project from './Project'

class Content extends Component {

  state={
    projectInfo: null,
    counter: 0
  }
  handelFetch(){
    const data = fetch("https://api.github.com/users/Fatimazahrak20/repos")
    data.then((res)=>{
       return res.json()
        
    }).then((res)=>{
        return  res
         }).then((data)=>{
          console.log(data);
          this.setState({ projectInfo : data.map((info)=>{
             return <Project info={{
              img: info.owner.avatar_url,
              name: info.name,
              date: info.created_at,
              link: info.html_url,
              id:10
             }}/>
          }),
          counter: this.state.counter + 1 
          
        })
    }
    )

  }

boxImg(){
    return <img src='https://dama.ink/static/media/profile.c3700b103e136d4c37b41eb261ee9743.svg' alt=''/>
}

boxDisc(){
    return<div className='disc'>
    <code>Hi,I'm</code>
    <h2>{this.props.data.name}</h2>
    <h5>{this.props.data.job}</h5>
    <p>{this.props.data.disc}</p>
    <FaGithub style={{width:"30px",fontSize:"20px"}}/>
    <FaInstagram style={{width:"30px",fontSize:"20px"}}/>
    <FaLinkedin style={{width:"30px",fontSize:"20px"}}/>
    </div>
}
main_page(){
    return<>
    {this.boxImg()}
    {this.boxDisc()}
    </>
}

  render() {
    return (
      <>
      <div className='page2'>
        {this.main_page()}
      </div>
      <center><img src='https://dama.ink/static/media/curve-hr.16b9fca607ca7942b81f2887bc2dae79.svg' alt='' style={{width:"60%",marginTop:"60px"}}/></center><br/>
      <h1>Skills</h1>
      <p>Here are some of my skills</p>
      <Slide/>
      <center><img src='https://dama.ink/static/media/curve-hr.16b9fca607ca7942b81f2887bc2dae79.svg' alt='' style={{width:"60%",marginTop:"60px"}}/></center><br/>
      <h1>My projects</h1>
      <p>There are my projects in Github</p>
      {this.handelFetch()}
      <div className='project'>
      {this.state.projectInfo}
      </div>
      <center><img src='https://dama.ink/static/media/curve-hr.16b9fca607ca7942b81f2887bc2dae79.svg' alt='' style={{width:"60%",marginTop:"60px"}}/></center><br/>
      <h1>Certifications</h1>
      <p>Here are some of my Certifications</p>
      <div className='all-certificats grid'>
      <Certificate certificateImg={img1} certificate="HTML" issuedBy="issued by SoloLearn" date="August 2022"/>
      </div>
      <center><img src='https://dama.ink/static/media/curve-hr.16b9fca607ca7942b81f2887bc2dae79.svg' alt='' style={{width:"60%",marginTop:"60px"}}/></center><br/>
      
      </>
      
    )
  }
}

export default Content






























