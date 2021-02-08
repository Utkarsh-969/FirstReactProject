import React,{useContext} from 'react'
import {roleContext,userContext} from "./App"
export const ContextConsumer = () => {
    const y = useContext(roleContext);
    const x = useContext(userContext);
    return (
        <>
            <h2><span>UserName - {x}</span> <span>UserRole - {y}</span></h2>
        </>
    )
}


