import React from 'react'
import UseImparativeChild from '../useImparativeHandle/useImparativeHandleTwo'

function UseImparativeParent() {
    
    const childRef = React.useRef(null) 

    const click = () => {
        childRef.current.changeText()
    }

    return(<>
        <UseImparativeChild  ref={childRef}/>
        <button onClick={click}>Control Child</button>
    </>)
}
export default UseImparativeParent