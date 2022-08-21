import React, { useState } from 'react'
import {useRef} from'react'
import './avgstar.css'

function Avgstar({data}){

    const StarStar1 = useRef(); //useRef 지정

    
  return(
  <span className="star">
    ★★★★★
    <span className='star_span' ref={StarStar1} style={{width: data*27}} >★★★★★</span> 
  </span>

  )
}

export default Avgstar;