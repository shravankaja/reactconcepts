import React from 'react'
import withCounter from './withCounter'

function ClickCount(props) {
    return (
        <button onClick={props.incCount}>Clicked on times {props.count}</button>
    )
}
export default withCounter(ClickCount)