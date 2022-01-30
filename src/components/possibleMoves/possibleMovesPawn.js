
const black = [ 'Q', 'K', 'B', 'N', 'R','P']
const white = ['q', 'k', 'b', 'n', 'r', 'p']

export const  possibleMovesWhitePawn=(state,start)=> {
 if(start > 7 && start < 16 && state[start+8]==='1'){
     if(state[start+8]==='1'){
         return[start,start + 8, start + 16]
     }
     return[start,start + 8]
}
}
