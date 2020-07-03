import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card'

import { changeNumber } from '../store/actions/numberActions'

const ReaderSetter = props => {
    const { number } = props

    return (
        <Card title="Reader and Setter">
            <p>Data: { number }</p>
            <div style={{
                marginBottom: 20
            }}>
                <label htmlFor="data">Data setter: </label>
                <input
                    type="number"
                    id="data"
                    name="data"
                    value={number}
                    onChange={e => props.setNumber(e.target.value)}
                />
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        number: state.number.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNumber(newNumber) {
            const action = changeNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReaderSetter)