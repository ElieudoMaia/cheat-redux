import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
import store from './store/store'
const appStore = store()

ReactDOM.render(
    
    <Provider store={appStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

    ,document.getElementById('root')
)