import axios from 'axios'
import React , {useEffect,useState} from 'react'

export const Fetch = () => {
    const[res,setRes] = useState([])
    const[getVal,setVal] = useState("");
    useEffect (()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${getVal}`)
        .then (  val => {
            console.log(val.data);
            setRes([val.data])
        })
        .catch(e => console.log(e));
    },[getVal])

    const eventHandle = (e) => {
        setVal(e.target.value);
    }

    return (
        <>
        <input onChange={eventHandle}></input>      
        <ul>{
          res.map((data) => (
          <li key={data.id}>{data.title}</li> 
          ))  
        }
        </ul>
        </>
    )
}


