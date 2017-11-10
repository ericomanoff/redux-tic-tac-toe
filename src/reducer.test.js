import select_square from './reducers/select_square'


it('returns the default state from an unidentified action', () => {

    let current_state = {}
    let new_state = {}
    let action = {
        type: 'undefined_action',
        payload: 4
    }

    expect(select_square(current_state, action)).toEqual(new_state)

})



it('selects a square with a given id', () => {

    let action = {
        type: 'SELECT_SQUARE',
        id: 2,
        team: 'x'
    }

    let current_state = [
        {
            id: 1,
            selected: false,
            team: null
        },
        {
            id: 2,
            selected: false,
            team: null
        },
        {
          id: 3,
          selected: false,
          team: null
        }
    ]

    let new_state = [
        {
            id: 1,
            selected: false,
            team: null
        },
        {
            id: 2,
            selected: true,
            team: 'x'
        },
        {
            id: 3,
            selected: false,
            team: null
        }
    ]


    expect(select_square(current_state, action)).toEqual(new_state)

})


