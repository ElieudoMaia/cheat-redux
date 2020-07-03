import { NUMBER_CHANGED } from './actionTypes'

export function changeNumber(newNumber) {
    
    return {
        type: NUMBER_CHANGED,
        payload: newNumber
    }
}