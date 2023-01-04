import React, {useState} from 'react';


export const Example = () => {

    const [counter, setCounter] = useState(0)
    return <>
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <div>{counter}</div>
    </>
}