import React from 'react'

function MemoComp({name}) {

    console.log("-------memo comp rendering------------------")
    return (
        <div>
            props sent by parent comp is {name}
        </div>
    )
}
export default React.memo(MemoComp);