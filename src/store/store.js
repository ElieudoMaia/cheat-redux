import { combineReducers, createStore } from 'redux'

import numberReducer from './reducers/numberReducer'

const reducers = combineReducers({
    number: numberReducer
})

function store() {
    return createStore(reducers)
}

export default store