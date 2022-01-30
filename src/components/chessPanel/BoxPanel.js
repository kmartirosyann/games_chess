import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece,changeFish } from '../validation/validationPiece';
import Draggable from "react-draggable";
import * as actionTypes from "../../store/action/actionsTypes"
import { ColorBox } from '../styles/BoxPiece';


export default function BoxPanel() {

  const[data,setData]= useState([])
  const state =  useSelector(state =>state)
  const dispatch = useDispatch()

  const handleStop = (event,ui)=>{
    const startKey = +ui.node.id.substring(1)
    const endKey = +event.target.id.substring(1)
     
      dispatch({
        type: actionTypes.CHANGE_EVENT_FISH,
       payload:changeFish(data,startKey,endKey)
      })
  }

  useEffect(()=>{
    setData(state.piece)
  },[state])

  return (
  <div className='border-box'>
      {data.map((i,y)=>(
          <ColorBox bg={` ${(y % 2 + Math.floor(y / 8)) % 2 === 0 ? '#fff' : '#979595' }`} key={i+y} id={'f'+y} >
            <Draggable      
              onStop={handleStop}
              position={'relative'}    
            >
              {movePiece(i,y)}              
            </Draggable>
          </ColorBox>
      ))}
  </div>
  );
}
