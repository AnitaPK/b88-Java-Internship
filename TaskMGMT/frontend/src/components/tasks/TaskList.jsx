import React, { useEffect, useState } from 'react'
import {getAllTasks} from '../../api/api.js'
import {Link} from 'react-router-dom'

const TaskList = () => {
  const[tasks, setTasks] = useState([])

  async function fetshData() {
    const res = await getAllTasks()
    setTasks(res.data)
  }

  useEffect(() => {
    fetshData()
  }, [])

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks?.map((task, i) => (
              <tr key={i}>
                <th scope="row">{i+1}</th>
                
                <td>
              <Link to={`/detail_task/${task.id}`} >
                  {task.title}
              </Link>
                  
                  </td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default TaskList