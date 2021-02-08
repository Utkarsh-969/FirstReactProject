import React from 'react'

function ButtonCallbackHook({handlerfunct,children}) {
    console.log("Rendering button component")    
    return (
        <>
            <button onClick={handlerfunct}>{children}</button>
        </>
    )
}

export default React.memo(ButtonCallbackHook)
