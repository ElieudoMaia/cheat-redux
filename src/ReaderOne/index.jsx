import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'

const ReaderOne = ({ number }) => {
    return (
        <Card title="Reader One">
            <p>Data: { number }</p>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        number: state.number.number
    }
}

export default connect(mapStateToProps)(ReaderOne)