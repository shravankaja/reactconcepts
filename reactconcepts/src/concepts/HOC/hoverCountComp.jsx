
import React from 'react'
import withCounter from './withCounter'

function HoverCount(props) {
    return (
        <div>
            Hovered on this count {props.count}
        </div>
    )
}
export default withCounter(HoverCount)

