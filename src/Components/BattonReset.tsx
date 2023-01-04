import React from 'react'
import {resetCounterAC} from '../redux/counterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../redux/store';

// type ButtonResetPropsType = {
//     counter: number
// }

const min = 0

export const ButtonReset = () => {

    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    const dispatch = useDispatch()

    const onClickButtonHandler = () => {
        dispatch(resetCounterAC())
    }

    return(
        <button disabled={counter === min} onClick={onClickButtonHandler}>reset</button>
    )
}