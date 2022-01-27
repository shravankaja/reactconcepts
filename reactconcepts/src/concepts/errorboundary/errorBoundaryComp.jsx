import React from 'react'

class ErrorBoundaryComp extends React.Component {

    // Durign run time errors react unmounts the whole component tree
    // if we could catch the error and show a fallback UI. 
    // so that other components will be unaffected 
    //  A class component which implements getDerivedStateFromError or 
    // componentDidCatch  or both of them is called error boundary 

    // getDerivedStateFromError is used to to render a fallback UI after an error is thrown
    // and compnentDidCatch is used to log the error

//     <ErrorBoundaryComp>
//     <ErrorTestOne place ="Hyderabad"/>
//     </ErrorBoundaryComp>
//     <ErrorBoundaryComp>
//     <ErrorTestOne place ="Kashmir"/>
//   </ErrorBoundaryComp>

// This is how you wrap the compoenent with error boundary for fallback ui individually 

    constructor(props) {
        super(props) 
        this.state ={
            error : false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            error : true
        }
    }

    render() {
       if(this.state.error) {
           return <div>Caught an error</div>
       }
           return this.props.children
       
    }
}

export default ErrorBoundaryComp