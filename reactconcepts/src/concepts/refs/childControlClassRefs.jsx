import React from 'react'

class ChildControlComp extends React.Component {

    constructor() {
        super()
        this.inputRef = React.createRef()
    }
     
    focusOnInput = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} ></input>
            </div>
        )
    }
}
export default ChildControlComp