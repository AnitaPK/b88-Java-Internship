import React, { useState } from 'react'
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

const Counter = () => {
    // let count = 10
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('light')

    function handleIncreament() {
        // count++
        setCount(count + 1)

        console.log("Count", count)
    }

    function handleChangeTheme() {
        if (theme == "light") {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <>
            <div className={`container-fluid ${theme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
                <button onClick={() => handleChangeTheme()} style={{ border: 0, fontSize: "30px" }}>
                    {theme == 'dark' ? <FaToggleOff /> : <FaToggleOn />}
                </button>
                <h2 className='text-center'>Counter App</h2>
                <div className='text-center'>
                    <h3> Count: {count}</h3>
                    <h2>{count == 0 ? <i>Start</i> : <b>Started</b>}</h2>
                    <br />
                    <button className='btn btn-primary me-2' onClick={() => handleIncreament()}>Increament</button>
                    <button className='btn btn-primary me-2' onClick={() => setCount(count - 1)}>Decreament</button>
                    <button className={`btn btn-secondary ${count == 0 && 'disabled'}`} onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter