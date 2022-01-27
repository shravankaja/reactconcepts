import React, { useRef } from 'react'

function UseLayoutExample() {

    const divRef = useRef(null)

    // useLayoutEffect work same as useEffect but it works synchronously between the dom claculations
    // unlike useEffect which runs asynchronously between the dom calculations
    // when we want to perform some calcualtions which should be added to dom calcualtions so that dom
    // show takes your calucaltions like elements posiitons or sizes into consideration and renders it 
    // but useEffect cannot do this as it runs asynchronoulsy may finish beofre, after or while dom calculations
    
    
    React.useLayoutEffect(() => {

        divRef.current.style.border = "1px solid blue"
            
    },[])

    return(
        <div ref={divRef} style ={{width :100,height:100,border : '1px solid red'}} className="hel">
                bn
        </div>
    )
}
export default UseLayoutExample;