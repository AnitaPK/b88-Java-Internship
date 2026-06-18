import React, { useState } from 'react'

const CharacterCounter = () => {
    const [sent,setSent] = useState('')
    const [charLength,setCharLength] = useState(0)
    const [wordLength,setWordLength] = useState(0)

    function handleCount(){
        setCharLength(sent.length)
        setWordLength(sent.split(" ").length)
    }

  return (
    <>
    <h1>Live Character Counter</h1>
    <div className="container">

    <input type="text" placeholder='enter sentence here' 
        onChange={(e)=>setSent(e.target.value)}
    />
        <p>Text : {sent}</p>
        <button onClick={()=>handleCount()}>submit</button>
        <p>Character Count : {charLength}</p>
        <p>Word Count : {wordLength}</p>
        
    </div>

    </>
  )
}

export default CharacterCounter