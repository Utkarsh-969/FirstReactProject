import React,{useReducer} from 'react'

export const ComplexReducer = () => {
    let initialValue = {FirstCounter:0 , SecondCounter:10}
    const reducer = (state,functionCode) => {
        switch(functionCode.action) {
            case 'Increment':
                return {...state , FirstCounter: state.FirstCounter+functionCode.value}
            case 'Decrement':
                return {...state , FirstCounter: state.FirstCounter-functionCode.value}
            case 'IncrementBy5':
                return {...state , FirstCounter: state.FirstCounter+functionCode.value}
            case 'DecrementBy5':
                return {...state , FirstCounter: state.FirstCounter-functionCode.value}
            case 'Increment2':
                return {...state , SecondCounter: state.SecondCounter+functionCode.value}
            case 'Decrement2':
                return {...state , SecondCounter: state.SecondCounter-functionCode.value}
            case 'Reset':
                return initialValue
            default:
                return state
        }
    }
    const[count,dispatch] = useReducer(reducer,initialValue)
    return (
        <>
            <div>First Counter : {count.FirstCounter} </div>
            <div> SecondCounter : {count.SecondCounter}</div>
           <button onClick={() => dispatch({action:'Increment',value:1})}>Increment</button>
           <button onClick={() => dispatch({action:'Decrement', value:1})}>Decrement</button>
           <button onClick={() => dispatch({action:'IncrementBy5', value:5})}>Increment 5</button>
           <button onClick={() => dispatch({action:'DecrementBy5', value:5})}>Decrement 5</button>
           <button onClick={() => dispatch({action:'Increment2',value:1})}>Increment 2nd Counter</button>
           <button onClick={() => dispatch({action:'Decrement2', value:1})}>Decrement 2nd Counter</button>
           <button onClick={() => dispatch({action:'Reset' , value:0})}>Reset</button>   
        </>
    )
}

