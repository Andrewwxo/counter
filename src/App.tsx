import React from 'react';
import './App.css';
import {ButtonInc} from './Components/ButtonInc';
import {Monitor} from './Components/Monitor';
import {ButtonReset} from './Components/BattonReset';
import {Example} from './Components/Example';

export const App = () => {

    // const [counter, setCounter] = useState(0)
    // useEffect(()=>{
    //     let counterAsString = localStorage.getItem('counterValue')
    //     if (counterAsString) {
    //         let newCounter = JSON.parse(counterAsString)
    //         setCounter(newCounter)
    //     }
    // },[])
    //
    // useEffect(()=>{localStorage.setItem('counterValue', JSON.stringify(counter))}
    //     , [counter])

    // const addValue = () => {
    //     dispatch(counterAC(+1))
    // }

    // const setToStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(counter))
    // }
    //
    // const getFromStorageHandler = () => {
    //     let counterAsString = localStorage.getItem('counterValue')
    //     if (counterAsString) {
    //         let newCounter = JSON.parse(counterAsString)
    //         setCounter(newCounter)
    //     }
    // }
    //
    // const clearStorageHandler = () => {
    //     localStorage.clear()
    //     setCounter(0)
    // }

    return (
        <div className="wrapper">
            <div className="my-app">
                <div>
                    <Monitor />
                </div>
                <div className="buttons">
                    <ButtonInc />
                    <ButtonReset/>
                    {/*<button onClick={setToStorageHandler}>set</button>*/}
                    {/*<button onClick={getFromStorageHandler}>get</button>*/}
                    {/*<button onClick={clearStorageHandler}>clear</button>*/}
                </div>
                <><Example/></>
            </div>

        </div>);
}

