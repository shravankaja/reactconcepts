import React from 'react'

function UseRefOne () {

    // we can create ref with create ref as well and also with useref. But createRef might show some
    // inconsistencies with the functional componenet. Createref does not persists the ref through re
    // renders but use ref persists the ref value through re-renders    


    const inputRef = React.useRef() 

    React.useEffect(() => {
         inputRef.current.focus()
    },[])

    return (
        <>
        <input ref={inputRef} ></input>
        </>
    )
}
export default UseRefOne