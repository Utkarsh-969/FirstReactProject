import React,{useState} from "react"

export const Counter = () => {
    const[count1,setCounter] = useState(0)
    function countHandler () {
        setCounter(count1+1);
    }
    return(
        <button onClick={countHandler}>Cliked {count1} times</button>
    )
}