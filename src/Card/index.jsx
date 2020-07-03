import React from 'react'

import './styles.css'

const Card = ({ title, children }) => {
    return (
        <div className="card-container">
            <h1>{ title }</h1>
            <div className="content">
                { children }
            </div>
        </div>
    )
}

export default Card