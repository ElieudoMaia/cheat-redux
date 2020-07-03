import { NUMBER_CHANGED } from '../actions/actionTypes'

const initialState = {
    number: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NUMBER_CHANGED:
            return {
                ...state,
                number: action.payload
            }
        default:
            return state
    }
}