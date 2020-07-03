import React from 'react'

import './App.css'

import ReaderSetter from './ReaderSetter'
import ReaderOne from './ReaderOne'
import ReaderTwo from './ReaderTwo'

const App = () => {
    return (
        <div className="container-app">
            <h1>Readers and setters of the state</h1>
            <ReaderSetter />
            <ReaderOne />
            <ReaderTwo />
        </div>
    )
}

export default App