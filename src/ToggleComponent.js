import React,{useState} from 'react'
import {UseEffectRUnOnce} from "./UseEffectRUnOnce"
export const ToggleComponent = () => {
    const[toggle,DoToggl] = useState(true)
    return (
        <>
         <button onClick={() => DoToggl(!toggle)}>Toggle Component</button>
         {toggle && <UseEffectRUnOnce></UseEffectRUnOnce>}   
        </>
    )
}


