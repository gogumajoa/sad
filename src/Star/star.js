import React from 'react'
import {useRef} from'react'
import './star.css'
import Detail from '../detail';
import { useSlotProps } from '@mui/base';


  export default function Star({starvalue1,data2}){

    const StarStar = useRef(); //useRef 지정
    const Star1=useRef(null);
    
    
    const drawStar1=() => {
      StarStar.current.style = 'width:'+Star1.current.value*20+'%'
      //setvalue=Star1.current.value
      //console.log(data2);
     
    }

    
  return(
  <span className="star">
    
    ★★★★★

    <span className='star_span' ref={StarStar} style={{width:Number(data2)*27}}>★★★★★</span>
    <span><input type="range" ref={Star1} onInput={drawStar1} defaultValue="5"  step="1" min="1" max="5" className='star_input'
    onChange={event=>starvalue1(Star1.current.value)} />
    
    
    
  </span>
  </span>
  )
  }