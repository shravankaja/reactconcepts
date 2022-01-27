import React from 'react'
import ChildControlComp from './childControlClassRefs'

class ParentControlComp extends React.Component {
    constructor(props) {
        super(props)
        this.childCompRef = React.createRef()    
    }

    click = () => {
        this.childCompRef.current.focusOnInput()
    }

    // you can only assign refs to class component and not to functional component 

    render() {
        return(
            <div>
                <ChildControlComp ref={this.childCompRef} />
                <button onClick={this.click}>Click on this to manipulate input in child</button>
            </div>
        )
    }

}
export default ParentControlComp

