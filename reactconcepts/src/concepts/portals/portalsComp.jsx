import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalsComp() {

    // Portals let you render the childern outside the dom hirearchy 
    // render a component on to the dom nodes which is outside the root 
    // element 

    // when do we use portals, like when we want modal tooltip 
    // example - when you have modals which shoudl come out the dom tree 
    // so that they do not get restrictions of the css and all from the parent 
    // in which they are enclosed and also to avoid the event bubbling from the modal 

   return ReactDOM.createPortal(<div>Hello from portals</div>,
    document.getElementById('portal-root'))

}
export default PortalsComp