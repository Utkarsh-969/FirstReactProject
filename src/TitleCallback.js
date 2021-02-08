import React from 'react'

function TitleCallback({value}) {
    {console.log("Rendering Title")}
    return (
        <>
         <h1>{value}</h1>   
        </>
    )
}

export default React.memo(TitleCallback)
