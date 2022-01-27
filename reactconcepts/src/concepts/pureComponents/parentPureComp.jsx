import React from 'react'
import PureComp from './purecomp'
import RegularComp from './regularcomp'
import MemoComp from '../memo/memoComp'

class ParentComp extends React.Component {

    constructor() {
        super() 
        this.state ={
            name : "Shravan"
        }
    }

    componentDidMount() {
        setInterval(()=> {this.setState({name : "Shravan"})},2000)
    }

    render() {
        console.log("------------------parent comp rendering ---------------")
        return(
            <>
            <PureComp name ={this.state.name} />
            <RegularComp name = {this.state.name} />
            <MemoComp name ={this.state.name} />
            </>
        )
    }
}
export default ParentComp