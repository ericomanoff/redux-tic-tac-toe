const select_square = (current_state, action) => {
    switch(action.type){
        case 'SELECT_SQUARE':
            return current_state.map( box =>
                (box.id == action.id) ? { ...box, selected:true, team:action.team } : box
             )
        default:
            return current_state
    }
}

export default select_square