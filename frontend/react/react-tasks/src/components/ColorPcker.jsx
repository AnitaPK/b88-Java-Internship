import React, { useState } from 'react'

const ColorPcker = () => {
    const [color,setColor] = useState('Red')
  return (
    <div className='container'>
    <div>Color Picker</div>
    <div className="colorChange text-center" 
    style={{height:"50px",width:"200px",
        border:"1px solid black",
        backgroundColor:color
    }}
    >
        {color}
    </div>
    <button onClick={()=>setColor("Red")}>Red</button>
    <button onClick={()=>setColor("Blue")}>Blue</button>
    <button onClick={()=>setColor("Green")}>Green</button>
    <button onClick={()=>setColor("Yellow")}>Yellow</button>
    </div>
  )
}

export default ColorPcker