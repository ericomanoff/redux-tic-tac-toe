import select_square from './reducers/select_square'
// import { SELECT_SQUARE } from '../actions'


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
            team: 'x'
        },
        {
            id: 2,
            team: 'o'
        },
        {
            id: 3,
            team: 'x'
        },
        {
            id: 4,
            team: 'o'
        },
        {
            id: 5,
            team: 'u'
        },
        {
            id: 6,
            team: 'u'
        },
        {
            id: 7,
            team: 'o'
        },
        {
            id: 8,
            team: 'u'
        },
        {
            id: 9,
            team: 'o'
        }
    ]

    let new_state = [
        {
            id: 1,
            team: 'x'
        },
        {
            id: 2,
            team: 'x'
        },
        {
            id: 3,
            team: 'x'
        },
        {
            id: 4,
            team: 'o'
        },
        {
            id: 5,
            team: 'u'
        },
        {
            id: 6,
            team: 'u'
        },
        {
            id: 7,
            team: 'o'
        },
        {
            id: 8,
            team: 'u'
        },
        {
            id: 9,
            team: 'o'
        }
    ]


    expect(select_square(current_state, action)).toEqual(new_state)

})


