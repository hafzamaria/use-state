import React from 'react';
import  ReactDOM  from 'react-dom';
import { useState } from 'react';
import './style.css'

 const Room = () =>{
  const[isLit,setLit] = useState(true);

  return(
  <div className={`room ${(isLit)? 'Lit' : 'dark'}`}>
    <div className='text'>The room is <b> {(isLit)? 'Lit' : 'dark'}</b></div>
  
  <br/>
  <button className='but' onClick={()=> setLit(!isLit)}>flip</button>
  
  </div>
  )
  }
ReactDOM.render(<Room/>,document.querySelector('#root'))
