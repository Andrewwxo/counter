import React from 'react'
import {MouseEvent} from 'react';

type ButtonResetPropsType = {
    counter: number
    resetValue:()=>void
}
const min = 0

export const ButtonReset = (props: ButtonResetPropsType) => {
    const onClickButtonHandler = (event: MouseEvent) => {
        props.resetValue()
    }
    return(
        <button disabled={props.counter === min} onClick={onClickButtonHandler}>reset</button>
    )
}