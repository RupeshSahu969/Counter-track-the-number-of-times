import { useEffect, useState } from "react";

function AfterRender(){

    const [count,setCount]=useState(0)

    useEffect( function calback() {
        
            console.log(`title has changed`)
            
        document.title=`Clicked ${count} times`
    } ,[count])
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={()=> setCount(count+1)
            
            } >Increment</button>
        </div>
    )
}

export default AfterRender