import React from 'react'

const ChildForwardRef =React.forwardRef((props,ref) => {
    console.log(ref)
    return (
        <>
        <input ref={ref} placeholder="enter text"></input>
        <input ref={ref} className="texttwo" placeholder="enter text"></input>
        </>
    )
})
export default ChildForwardRef