import React from 'react'

function Fragements() {

    // Fragments let you group list of childerns elements without adding extra nodes
    // to DOM 
    // it will help us avoiding additional enclosing div tags to DOM 
    // key attributes it the only attribute that can be passed to fragements
    // when you use shortand <></> we cannot pass key attribute to it


    return(<React.Fragment>
        <h1>Fragrments</h1>
        <p>
            Help you reduce extra nodes in DOM 
        </p>
    </React.Fragment>)
}

export default Fragements