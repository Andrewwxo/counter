import React from 'react';

type MonitorPropsType = {
    counter: number
}

export const Monitor = (props:MonitorPropsType) =>{
    const monitorClass = props.counter ===5 ? "Red Monitor" : "Monitor"
    return <div className={monitorClass}>{props.counter}</div>
}