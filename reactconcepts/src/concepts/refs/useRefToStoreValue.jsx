import React from 'react'

function UseRefStoreValue () {
    
    // useref can act like a container to store mutable value since it does
    // not change when re=redners happen and the value of the useref presists through
    // the re-renders
    // in class compoenents there are instanace properties which can hold the value presisting 
    // through re-renders but in functional component we can use useref to do the same like 
    // a container to store a mutuable value through re-renders
    const [count,setCount] = React.useState(0)
    const interval = React.useRef(null)
    React.useEffect(() => {
         interval.current = setInterval(()=> {
            setCount(count => count+1)
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])

    const clr = () => {
        clearInterval(interval.current)
    }

    return(
        <>
        count is {count} 
        <button onClick={clr} >Clear interval</button>
        </>
    )
}

export default UseRefStoreValue