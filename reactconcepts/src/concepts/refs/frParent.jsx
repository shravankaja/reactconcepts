import React from 'react'

import ChildForwardRef from './frChild'

function ParentForwardRef() {
    
    let inputChildRef = React.createRef()
  

   const  click = () => {
        inputChildRef.current.focus()
        console.log(inputChildRef.current)
    }

    return (
        <>
            <ChildForwardRef ref={inputChildRef}  />
        <button onClick={click}>Clicl on me to access the child input native element</button>
        </>
    )
}
export default ParentForwardRef