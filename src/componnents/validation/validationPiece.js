// "rnbqkbnrpppppppp11111111111111111111111111111111RNBQKBNRPPPPPPPP"

import { validationBishop } from "./validationBishop"
import { validationRoos } from "./validationRoos"



export const figur =(name,y)=>{
    switch (name){
        case "r":
            return  <div id={'s'+y}>&#9814;</div>
        case 'n':
            return <div id={'s'+y}>&#9816;</div> 
        case "b":
            return <div id={'s'+y}>&#9815;</div> 
        case "q":
            return <div id={'s'+y}>&#9813;</div>
        case 'k':
            return <div id={'s'+y}>&#9812;</div> 
        case "p":
            return <div id={'s'+y}>&#9817;</div> 
        case 'R':
            return <div id={'s'+y}>&#9820;</div> 
        case "N":
            return <div id={'s'+y}>&#9822;</div>
        case 'B':
            return <div id={'s'+y}>&#9821;</div>
        case "Q":
            return <div id={'s'+y}>&#9819;</div>
        case 'K':
            return <div id={'s'+y}>&#9818;</div>
        case "P":
            return <div id={'s'+y}>&#9823;</div>
        default: return  <div id={'s'+y}>{' '}</div>;
    }
}

const white = ['q', 'k', 'b', 'n', 'r', 'p']
const bleck = [ 'Q', 'K', 'B', 'N', 'R','P']



const moveHintChessPiece =(startPiece,endPiece,start,end,state)=>{
    
    switch (startPiece){
        case "r":
          return  validationRoos(state,start,end)
        case 'n':
            if(end - start <= 17 || end - start >= -17){
                if(Math.floor(end / 8) === Math.floor(start / 8)){
                    return false
                }
            if(end - start=== 17 || end - start === 6 || end - start === 15 || end - start === 10){
                
                return true
            }
            if(end - start=== -17 || end - start === -6 || end - start === -15 || end - start === -10){
                return true
            }
               
                return false
            }
            return false
        case "b":
           
            return validationBishop(state,start,end)
        case "q":
            return true
        case 'k':
            if(end === start + 7 || end ===  start + 8 || end ===  start + 9 || end ===  start + 1 || end === start -1 || end ===  start - 7 || end ===  start - 8 || end ===  start + 9 ){
                return true
            }
            return false
            
        case "p":
            if(bleck.includes(state[end])  && (end === start + 9 || end === start +7)){
                return true
            }
                if(start >= 8 && start <= 15 && (end === start + 8 || end === start + 16)){
                    if(endPiece !== '1'){
                        return false
                    }                     
                    return true
                }
               if(start > 15 && end === start + 8){
                if(endPiece !== '1'){
                    return false
                } 
                   return true
               }else return false
            
        case 'R':
            return  validationRoos(state,start,end)
        case "N":
            return true 
        case 'B':
            return validationBishop(state,start,end)
        case "Q":
            return true 
        case 'K':
            return true 
        case "P":
            if(white.includes(state[end])  && (end === start - 9 || end === start - 7)){
                return true
            }
            if(start >= 48 && start <= 55 && (end === start - 8 || end === start - 16)){
                if(endPiece !== '1'){
                    return false
                } 
                 return true
                
            }
           if(start < 48 && end === start - 8){
            if(endPiece !== '1'){
                return false
            } 
               return true
           }else return false

        default: return  true 
    }

}


export const changeFish=(state,start,end)=>{ 
    const whiteEnd = white.includes(state[end])
    const whiteStart = white.includes(state[start])
    const bleckEnd = bleck.includes(state[end])
    const bleckStart = bleck.includes(state[start])
   
    if(!moveHintChessPiece(state[start],state[end],start,end,state)) return state

    if(state[end]==='1' && end < 56){
        [state[start],state[end]] =[state[end],state[start]]
        return state
    }
    if(state[start] === state[end]){
        return state
    }
    if((whiteEnd && whiteStart) || (bleckEnd && bleckStart) ){
        return state
    }
    if((bleckEnd && whiteStart) || (whiteEnd && bleckStart)){
        if(state[start] === 'P' && (end >= 0 && end <=7)){
            state[end]= 'Q'
            state[start] = '1'
            return state
        }    
      
    }
    if(state[start] === 'p' && (end >= 56 && end <=63)){
        state[end]= 'q'
        state[start] = '1'
        return state
    }
    state[end]= state[start]
    state[start] = '1'       
     return state
   
}