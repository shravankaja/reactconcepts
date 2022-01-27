import React, { forwardRef, useImperativeHandle } from 'react'

function UseImparativeChild(props,ref) {

    const [view,setView] = React.useState(true)
    useImperativeHandle(ref,() => ({changeText : () => setView(false)}))

    return(
        <>
        {view ? <div>Button not clicked in parent</div> : <div>Button clickded on parent and
            controlled parent</div>}
        </>
    )

}

export default forwardRef(UseImparativeChild)