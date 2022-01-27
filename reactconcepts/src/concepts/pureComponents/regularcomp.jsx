import React from 'react'

class RegularComp extends React.Component {

    // RegularComponent does not implement shoudComponentUpdate it always return true.
     constructor(props) {
        super(props)
     }

    render() {
        console.log("----------Regular comp re-rendering-----------------------")
        return(
            <div>
                Props sent by parent is {this.props.name}
            </div>
        )
    }
}

export default RegularComp