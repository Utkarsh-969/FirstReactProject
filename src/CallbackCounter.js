import React from 'react'

function CallbackCounter({type,value}) {
    console.log("rendering count component")
    return (
        <>
            <h3>{type} : {value}</h3>
        </>
    )
}

export default React.memo(CallbackCounter)
