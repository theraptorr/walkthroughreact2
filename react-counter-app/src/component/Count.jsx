import React, { useState } from "react";

import "./Count.css"

const Count = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div id='parent'>
            <h1>{counter}</h1>
            <div>
                <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
                <button onClick={() => {
                    if (counter <= 0) {
                        alert("Now you can't Decrement")
                    }
                    else {
                        setCounter(counter - 1)
                    }
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default Count;