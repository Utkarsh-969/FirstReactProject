import React,{useState} from 'react'

export const UseStateList = () => {
    const [list1,addElem] = useState([])
    const additem = () => {
        addElem ( [
            ...list1 , {id: list1.length , value : parseInt((Math.random(1,10)*10)+1)}
        ]
        )
    } 
    return (
        <>
        <button onClick={additem}>Add Item</button>
            <ul>
                { list1.map(data => (
                <li id = {data.id}>{data.value}</li>
                ))}
            </ul>
        </>
    )
}


