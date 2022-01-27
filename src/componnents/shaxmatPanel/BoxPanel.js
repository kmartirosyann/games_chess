import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { figur,changeFish } from '../validation/validationPiece';
import Draggable from "react-draggable";
import * as aactiontypes from "../../store/action/actionsTypes"
import { ColorBox } from '../styles/BoxFishka';


export default function BoxPanel() {

  const[data,setData]= useState([])
  const state =  useSelector(state =>state)
  const dispatch = useDispatch()
const hadleDrag =(e,ui)=>{
 
}

  const handleStop = (event,ui)=>{
    const startKey = +ui.node.id.substring(1)
    const endKey = +event.target.id.substring(1)
     
      dispatch({
        type: aactiontypes.CHANGE_EVENT_FISH,
       peyload:changeFish(data,startKey,endKey)
      })
  }

  useEffect(()=>{
    setData(state.fishka)
  },[state])

  return (
  <div className='border-box'>
      {data.map((i,y)=>(
          <ColorBox bg={` ${(y % 2 + Math.floor(y / 8)) % 2 === 0 ? 'whait' : '#979595' }`} key={i+y} id={'f'+y} >
            <Draggable
            onDrag={hadleDrag}
              onStop={handleStop}
              position={'relative'}    
            >
              {figur(i,y)}              
            </Draggable>
          </ColorBox>
      ))}
  </div>
  );
}
