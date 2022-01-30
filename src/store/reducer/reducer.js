import * as actionTypes from '../action/actionsTypes'

const initialState ={
    piece:['r', 'n', 'b','k', 'q','b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'R', 'N', 'B','K', 'Q', 'B', 'N', 'R']
}

const reducer =(state=initialState,action)=>{
const actionReducer  = {
    [actionTypes.GET_PIECE]:()=>({
        ...state,
    }),
    [actionTypes.CHANGE_EVENT_FISH]:()=>({
        ...state,
        piece: action.payload
    })
}
if (action.type === actionTypes[action.type]) {
    return actionReducer[action.type]()
} else {
    return state
}
}

export default reducer