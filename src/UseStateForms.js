import React ,{useState} from 'react'

export const UseStateForms = () =>  {
    const[name,setName] = useState({username:"",password:""})
    return (
        <>
        <input type="text" onChange = { e => setName({...name , username : e.target.value})} value={name.username}></input>
        <input type="password" onChange = { e => setName({...name , password : e.target.value})} value = {name.password} ></input>
        <h2>UserName = {name.username}</h2>
        <h2>Password = {name.password}</h2>
        <p>{JSON.stringify(name)}</p>
        </>
    )
}

