import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    // PureComponent always implements shouldComponentUpdate with a shallow props 
    // and state comparison 

    // shallow comparison for primitive types like string, numbers, booleans it returns true to if 
    // both the value and type are equal 
    // shallow comparison for complex types returns true if the variables refereance the same variables 

    // pure components does shallow comparison with previous state and current state and previous props
    // current props and only if there is a difference then component will re-render

    // if the parent does not re-redner then childern do not re-redner 

    // when dealing with arrays and objects we have to return a new array or an object, by simpply adding 
    // a item to array or changing the key value in object would not make pure comp to re-render

    constructor(props) {
        super(props) 
        
    }

    render() {
        console.log("-----------pure comp rendering--------------------------")
        return (
            <div>
                This is a pure component props sents by parent is {this.props.name}
            </div>
        )
    }
}
export default PureComp;
