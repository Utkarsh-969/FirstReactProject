import React,{useState,useEffect} from 'react'

export const UseEffectRUnOnce = () => {
    const[xcord,setXcord] = useState();
    const[ycord,setYcord] = useState (); 

    const eventHandle = e => {
        console.log("event happened")
        setXcord(e.clientX)
        setYcord(e.clientY)
    }

    useEffect( () => {
        console.log("rendered")
        window.addEventListener('mousemove',eventHandle)

        return (
            () => {
                window.removeEventListener('mousemove',eventHandle)
            }
        )
    },[])

    return (
        <>
            <p>Xcord - {xcord} </p>   <p>Ycord - {ycord} </p>        
        </>
    )
}

