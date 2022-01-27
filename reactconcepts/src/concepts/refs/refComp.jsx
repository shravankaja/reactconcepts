import React from 'react'

function RefComp() {

    // ref is basically uses to access the dom nodes 
    // we can use it to alter the htmls elements like to focus and all 
    // we can also take the value form the dom nodes 

    // there are two approaches of creating a refs one is createRef and one is callback methi=od

    // callback way of creating ref will not work for functional component
    
    // with ref we can also control the child comp functions only if it is a class component

    const refOfInput = React.createRef()
    
    // let refAssigned = null

    // const cbRef = (element) => { 
    //     console.log(element)
    //     refAssigned = element
    // }

    React.useEffect(()=> {
        refOfInput.current.focus()
    },[])

    const show = () => {
       // console.log(refAssigned)
        alert(refOfInput.current.value) // we can avoid usung the states if we take 
        // // the value directly from the ref 
        // console.log(refAssigned)
        // if(refAssigned) {
        //     refAssigned.focus()
        // }
    }

    return(
        <div>
            <p>This is a ref example </p>
            <input placeholder={"enter text"} ref={refOfInput}></input>
            <button onClick={show}>Show value</button>
             {/* <input ref={cbRef()}></input> */}
        </div>
    )
}

export default RefComp