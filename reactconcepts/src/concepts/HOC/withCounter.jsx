import React,{useState} from 'react'

const withCounter = (Component) =>{

    return () => {
        
        const [count,setCount] = useState(10)

        const incCount = () => {
            setCount(count=> count+1)
        }

        return  <Component incCount={incCount}  count ={count}/>
    }
    
}
export default withCounter;