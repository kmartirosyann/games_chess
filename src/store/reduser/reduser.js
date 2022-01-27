import * as actionTypes from '../action/actionsTypes'

const initialState ={
    fishka:['r', 'n', 'b','k', 'q','b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'R', 'N', 'B','K', 'Q', 'B', 'N', 'R']
}

const reduser =(state=initialState,action)=>{
const actionReducer  = {
    [actionTypes.GET_FIGYRS]:()=>({
        ...state,
    }),
    [actionTypes.CHANGE_EVENT_FISH]:()=>({
        ...state,
        fishka: action.peyload
    })
}
if (action.type === actionTypes[action.type]) {
    return actionReducer[action.type]()
} else {
    return state
}
}

export default reduser