import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListToDos = () => {
    const [todo,setToDo] = useState([])

   async function fetchDate(){
       const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
       console.log(res.data)
       setToDo(res.data)
    }


useEffect(()=>{
    fetchDate()
},[])

  return (
    <>
    <div>ListToDos</div>
   <ul>
    {
        todo.map((td,i)=>(
            <li key={i}
                className={`${td.completed ? 'text-success' : 'text-danger'}`}
            >{td.title}</li>
        ))
    }
    </ul>
    </>
  )
}

export default ListToDos