import React from 'react'

import './App.css'

import ReaderSetter from './ReaderSetter'
import ReaderOne from './ReaderOne'
import ReaderTwo from './ReaderTwo'
import AsyncReader from './AsyncReader'

const App = () => {
    return (
        <div className="container-app">
            <h1>Readers and setters of the state</h1>
            <ReaderSetter />
            <ReaderOne />
            <ReaderTwo />
            <AsyncReader />
        </div>
    )
}

export default App