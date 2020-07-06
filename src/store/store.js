import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import numberReducer from './reducers/numberReducer'
import regionReducer from './reducers/regionsReducer'

const reducers = combineReducers({
    number: numberReducer,
    regions: regionReducer
})

function store() {
    return createStore(reducers, applyMiddleware(ReduxPromise))
}

export default store