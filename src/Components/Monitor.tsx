import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../redux/store';

// type MonitorPropsType = {
//     counter: number
// }

export const Monitor = () =>{
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)

    const monitorClass = counter === 5 ? "Red Monitor" : "Monitor"

    return <div className={monitorClass}>{counter}</div>
}