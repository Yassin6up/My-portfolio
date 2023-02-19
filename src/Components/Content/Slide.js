import React, { Component } from 'react'
import "./Slide.css"
import SlideChild from './SlideChild'


class Slide extends Component {
  render() {
    return (
      <>
      <div className='slide'>
          <SlideChild skill="HTML" skillImg="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"/>  
          <SlideChild skill="JavaScript" skillImg="https://dama.ink/static/media/javascript.fd46ca41839433d73577989d86eb2fe2.svg"/>  
          <SlideChild skill="Java" skillImg="https://www.pngplay.com/wp-content/uploads/9/Java-PNG-Clipart-Background.png"/>  
          <SlideChild skill="React" skillImg="https://dama.ink/static/media/react.e27571eaed899c642345e71163624ef9.svg"/>  
      </div>
      </>
    )
  }
}

export default Slide