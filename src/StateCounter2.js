import React ,{useState} from 'react'

export const StateCounter2 = () =>  {
    const[count1,setCounter] = useState(0)
    return (
        <div>
            <div>{count1}</div>
             <button onClick={() => setCounter(0)}>Reset</button>
             <button onClick={() => setCounter(prevState => prevState+1 )}>Increment by 1</button>
             <button onClick={() => setCounter(prevState => prevState+5 )}>Increment by 5</button>
             <button onClick={() => setCounter(prevState => prevState-1 )}>Decrement by 1</button>
        </div>
    )
}

