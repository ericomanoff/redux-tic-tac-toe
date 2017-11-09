export const selectBox = (event, team) => {
    return {
        type: 'SELECT_BOX',
        team: team,
        id: event.target.value
    }
}