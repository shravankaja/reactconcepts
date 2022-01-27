import React from 'react'

class ErrorTestOne extends React.Component {

    constructor(props) {
        super(props)
        if(this.props.place==="Kashmir") {
            throw new Error("Not safe")
        }
     }

    

     render(){
         
             return <div>PLace name is {this.props.place}</div>
         
     }
}

export default ErrorTestOne