import React from 'react'
import './button.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../redux/store';
import {counterAC} from '../redux/counterReducer';

// type ButtonIncPropsType = {
//     counter: number
// }
const max = 5

export const ButtonInc = () => {

    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(counterAC())
    }
    const buttonClass = counter === max ? "red" : ""

    return (
        <button className={buttonClass} disabled={counter === max}
                onClick={onClickHandler}>inc</button>
    )
}
