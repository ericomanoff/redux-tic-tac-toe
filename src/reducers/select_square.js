import { SELECT_SQUARE } from '../actions'

const INITIAL_STATE = [
               {
                   id: 1,
                   team: ''
               },
               {
                   id: 2,
                   team: ''
               },
               {
                   id: 3,
                   team: ''
               },
               {
                   id: 4,
                   team: ''
               },
               {
                   id: 5,
                   team: ''
               },
               {
                   id: 6,
                   team: ''
               },
               {
                   id: 7,
                   team: ''
               },
               {
                   id: 8,
                   team: ''
               },
               {
                   id: 9,
                   team: ''
               }
]


const select_square = (current_state = INITIAL_STATE, action) => {

console.log('current_state: ', current_state)

    switch(action.type){
        case SELECT_SQUARE:
            return current_state.map(square =>
                (square.id == action.id) ?
                    {...square, team: action.team}
                    : square
            )
        default:
            return current_state
    }

}

export default select_square