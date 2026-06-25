import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('Red')

    return (
        <>
            <h2>Color Picker</h2>

            <div
                style={{
                    width: "200px",
                    height: "100px",
                    border: "1px solid black",
                    backgroundColor: color,
                }}
            >
                {color}
            </div>

            <button onClick={() => setColor("Red")}>Red</button>
            <button onClick={() => setColor("Yellow")}>Yellow</button>
            <button onClick={() => setColor("Green")}>Green</button>
            <button onClick={() => setColor("Blue")}>Blue</button>
        </>
    )
}

export default ColorPicker