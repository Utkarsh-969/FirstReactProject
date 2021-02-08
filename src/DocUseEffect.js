import React,{useState,useEffect}from 'react'

export const DocUseEffect = () => {
    const[counter,IncCounter] = useState(0)
    const[inputValue,SetInputValue] = useState("")
    useEffect( () => {
        console.log("Rendered")
        document.title = `You clicked ${counter} times`
    },[counter])

    return (
        <div>
            <input type="text" onChange={e => SetInputValue(e.target.value)}></input>
            <button onClick={() => IncCounter(prevState => prevState+1)}>Button clicked {counter} times</button>
            <h1>{inputValue}</h1>
        </div>
    )
}

