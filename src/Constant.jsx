import { createPosition } from "./Component/helper";


export const Status = {
    'ongoing' : 'Ongoing',
    'promoting' : 'Promoting',
    'white' : 'White wins',
    'black' : 'Black wins',
    'stalemate' : 'Game draws due to stalemate',
    'insufficient' : 'Game draws due to insufficient material'
}

export const initGameState ={
    position : [createPosition()],
    turn:'w',
    movesList: [],
    candidateMoves : [],
    promotionSquare : null,
    status : Status.ongoing,
    castleDirection : {
        w : 'both',
        b : 'both',
    },

}










