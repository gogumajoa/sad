import React from 'react'
import {useRef} from'react'
import './star.css'

function Star(){

    const StarStar = useRef(); //useRef 지정
    const Star1=useRef(null);

    
    const drawStar1=() => {
      StarStar.current.style = 'width:'+Star1.current.value*10+'%'
    }
    
    
  return(
  <span className="star">
    ★★★★★
    <span className='star_span' ref={StarStar} >★★★★★</span>
    <span><input type="range" ref={Star1} onInput={drawStar1} defaultValue="1"  step="1" min="0" max="10" className='star_input'/>

  </span>
  </span>
  )
}

export default Star;