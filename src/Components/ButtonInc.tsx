import React from 'react'
import {MouseEvent} from 'react';

type ButtonIncPropsType = {
    counter: number
    addValue: () => void

}
const max = 5

export const ButtonInc = (props: ButtonIncPropsType) => {

    const onClickHandler = (event: MouseEvent) => {
        props.addValue()
    }
    const buttonClass = props.counter === max ? "red" : ""
    return (
        <button className={buttonClass} disabled={props.counter === max}
                onClick={onClickHandler}>inc</button>
    )
}
