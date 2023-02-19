import React,{Component} from "react"
import "./Header.css"

class Header extends Component{

  logo(){
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJju2--FQ07GLnpTd96qi6CGDsvID17rA_-Q&usqp=CAU" alt="logo"/>
  }

  navBar(){
    return<>
       <ul>
        <li>About</li> 
        <li>Skills</li>
        <li>Projets</li>
        <li>Contact me</li> 
      </ul>   
    </>
  }

  btnResume(){
    return <button>Resume</button>
  }

  page1(){
    return <>
    {this.logo()}
   {this.navBar()}
   {this.btnResume()}
   </>
  }

  render(){
   return <div className="nav-bar"> {this.page1()} </div>
  }
}

export default Header


