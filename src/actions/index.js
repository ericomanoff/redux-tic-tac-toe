export const SELECT_SQUARE = 'SELECT_SQUARE'

export const select_square_action = (id, team) => {
    console.log("selecting square id: ", id)
    console.log("selecting square team: ", team)
    return {
        type: SELECT_SQUARE,
        id: id,
        team: team
    }
}

