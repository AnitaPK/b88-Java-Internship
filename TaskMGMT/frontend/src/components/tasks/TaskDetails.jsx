import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import{getTakDetails, deleteTask} from '../../api/api.js'

const TaskDetails = () => {
  const [taskDetail ,setTaskDetail] = useState()

  const {ID} = useParams()
  const navigate =useNavigate()

  async function fetchData() {
    const res = await getTakDetails(ID)
    setTaskDetail(res.data)
  }

  async function  handleDeleteTask() {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?")
    if(!confirmDelete){
      return
    }else{
    try {
      // console.log(taskDetail.id)
      const res = await deleteTask(taskDetail.id)
      alert(res.data)
      navigate('/task_list')
      
    } catch (error) {
      console.log(error)
      alert("Task not deleted")
    }
  }
  }



  useEffect(()=>{
    fetchData()
  },[ID])
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>{taskDetail?.title}</h3>
            </div>
            <div className="card-body">
              <p>{taskDetail?.description}</p>
              <p>{taskDetail?.status}</p>
              <p>
                <Link to={`/edit_list/${taskDetail?.id}`} className='btn btn-primary me-2' >Edit Task</Link>
                <button className='btn btn-danger' onClick={handleDeleteTask}>Delete Task</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails