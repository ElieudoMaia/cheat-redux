import { REGION_CHANGED } from '../actions/actionTypes'

const inititalState = {}

export default function(state = inititalState, action) {
    switch(action.type) {
        case REGION_CHANGED:
            return {
                ...state,
                regions: action.payload.data
            }
        default:
            return state
    }
}