import React,{useReducer,useContext} from 'react'
import {reduceContext} from "./App"
export const UseReduce = () => {
    let obj = useContext(reduceContext)
    let  dispatch = obj.StateAction
    return (
        <>
            <p>count : {obj.StateCount}</p>
           <button onClick={() => dispatch('Increment')}>Increment</button>
           <button onClick={() => dispatch('Decrement')}>Decrement</button>
           <button onClick={() => dispatch('Reset')}>Reset</button>   
        </>
    )
}


