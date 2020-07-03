import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'

const ReaderTwo = ({ number }) => {
    return (
        <Card title="Reader Two">
            <p>Data: { number }</p>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        number: state.number.number
    }
}

export default connect(mapStateToProps)(ReaderTwo)