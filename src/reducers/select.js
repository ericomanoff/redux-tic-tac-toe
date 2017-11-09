const select = (state = [], action ) => {
    switch(action.type){
        case 'SELECT_BOX':
            console.log('select box')
            return state
        case 'RESET_GAME':
            console.log('reset game')
            return state
        default:
            console.log('unrecognized action')
            return state
    }
}

export default select