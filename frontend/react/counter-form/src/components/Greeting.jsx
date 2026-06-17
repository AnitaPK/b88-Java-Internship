import React, { useState } from 'react'

const Greeting = () => {

    const [userName, setUserName] = useState()
    const [meassge,setMessage] = useState()

    function handleSubmit(){
        setMessage(`Hello ${userName}`)
    }

  return (
<>
        <input type="text" onChange={(e)=>setUserName(e.target.value)}  />
        <button onClick={()=>handleSubmit()}>Submit</button>
        <div>{meassge}</div>
</>
)
}

export default Greeting