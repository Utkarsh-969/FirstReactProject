import React, { useEffect, useRef, useState ,useReducer,useCallback} from "react";
import "./styles.css";
import { FormValue } from "./useForms";
import { useFetch } from "./useFetch";
import {Counter} from "./useCounter";
import {StateCounter2} from "./StateCounter2";
import {UseStateForms} from "./UseStateForms";
import {UseStateList} from "./UseStateList";
import {DocUseEffect} from "./DocUseEffect";
import {UseEffectRUnOnce} from "./UseEffectRUnOnce"
import {ToggleComponent} from "./ToggleComponent"
import {Fetch} from "./Fetch"
import {ContextConsumer} from "./ContextConsumer"
import {UseReduce} from "./useReducerHandsOn"
import {ComplexReducer} from "./ComplexReducer"
import {UseReducerCount} from "./useReducerCount"
import TitleCallback from "./TitleCallback"
import CallbackCounter from "./CallbackCounter"
import ButtonCallbackHook from "./ButtonCallbackHook";
export const userContext = React.createContext();
export const roleContext = React.createContext();
export const reduceContext = React.createContext();

export default function App() {

  let initialAge = 25
  let initialSalary = 50000
  
  const[ageCounter,incrementAge] = useState(initialAge) 
  const[salaryCounter,incrementSalary] = useState(initialSalary) 

  const incrementByAge = useCallback(() => {
    incrementAge(prevAge => prevAge+1)
  },[ageCounter])

  const incrementBySalary = useCallback(() => {
    incrementSalary(prevSalary => prevSalary+1000)
  },[salaryCounter])
  // let initialValue = 0
  //   const reducer = (state,functionCode) => {
  //       switch(functionCode) {
  //           case 'Increment':
  //               return state+1
  //           case 'Decrement':
  //               return state-1
  //           case 'Reset':
  //               return initialValue
  //           default:
  //               return state
  //       }
  //   }
  // const[count,dispatch] = useReducer(reducer,initialValue)

  /*
  const [values, handleChnge] = FormValue({ email: "", password: "" });
  const [counter, setCounter] = useState(0);
  let dataValue = useFetch(`http://numbersapi.com/${counter}/trivia`);
let focusValue = useRef();
 let useFocus = ()=> {
  focusValue.current.focus();
}
  useEffect(() => {    
    const mouseChange = (e) => {
      console.log("Hello");
    };
    window.addEventListener("mousemove", mouseChange);
    return () => {
      window.removeEventListener("mousemove", mouseChange);
    };   
  }, [values]);
*/
  return (
    <div className="App">      
      {/* <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click Me         
        </button>
      </div>
      <div>{counter}</div>
      <div>
        <input type="text" name="email" ref = {focusValue} onChange={handleChnge}></input>
      </div>
      <div>
        <input type="password" name="password" onChange={handleChnge}></input>
      </div>
      <p>{JSON.stringify(values)}</p>
      <div>
        <p>{dataValue === undefined ? "loading !!" : dataValue.data}</p>
      </div>
          <button onClick={useFocus}>
            Focus
            </button> */}
            {/* <Counter></Counter> */}
            {/* <StateCounter2></StateCounter2> */}
            {/* <UseStateForms> </UseStateForms> */}
            {/* <UseStateList></UseStateList> */}
            {/* <DocUseEffect></DocUseEffect> */}
            {/* <UseEffectRUnOnce></UseEffectRUnOnce> */}
            {/* <ToggleComponent></ToggleComponent> */}
            {/* <Fetch></Fetch> */}
            {/* { <userContext.Provider value={'Utkarsh Shukla'}>
              <roleContext.Provider value={'Admin'}>
              <ContextConsumer></ContextConsumer>
              </roleContext.Provider>
            </userContext.Provider> } */}
            {/* <reduceContext.Provider value={{StateCount:count,StateAction:dispatch}}>
             <UseReducerCount></UseReducerCount>
             <UseReduce></UseReduce>
             </reduceContext.Provider>  */}
            {/* <ComplexReducer></ComplexReducer> */}

            <TitleCallback value={"Hello React - Rendering the component"}></TitleCallback>
            <CallbackCounter type={"Age"} value={ageCounter}></CallbackCounter>
            <ButtonCallbackHook handlerfunct={incrementByAge}>increment Age</ButtonCallbackHook>
            <CallbackCounter type={"Salary"} value={salaryCounter}></CallbackCounter>
            <ButtonCallbackHook handlerfunct={incrementBySalary}>increment Salary</ButtonCallbackHook>


    </div>

    

  );
}
