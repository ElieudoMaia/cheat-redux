import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { setRegions } from '../store/actions/regionActions'

import Card from '../Card'

const AsyncReader = props => {

    const { regions, setRegions } = props

    useEffect(() => {
        setRegions()
    }, [setRegions])

    function handleRefresh() {
        setRegions()
    }

    if(!regions) {
        return (
            <h1>Carregando . . .</h1>
        )
    }

    return (
        <Card title="Async Reader">
            <div>
                <button
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
                <p>Regions:</p>
                <span>
                    {regions.map(region => (
                        <p key={region.id}>
                            {region.nome}
                        </p>
                    ))}
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        regions: state.regions.regions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRegions() {
            const action = setRegions()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncReader)