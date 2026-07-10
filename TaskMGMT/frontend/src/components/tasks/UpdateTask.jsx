import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getTakDetails, updateTaskByID} from '../../api/api'

const UpdateTask = () => {
  const [task, setTask] = useState()

  const {ID} = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    status:'',
    startDate:'',
    endDate:''
  })

  function handleChange (e){
    setFormData({
      ...formData, [e.target.name]:e.target.value
    })
  }

  async function fetchData() {
      const res = await getTakDetails(ID)
      // setTask(res.data)
      setFormData(res.data)
  }

async function handleUpdateTask(e) {
  e.preventDefault()
  try {
    console.log(formData)
    const res = await updateTaskByID(ID, formData)
    alert(res.data)
    navigate('/task_list')
  } catch (error) {
    console.log(error)
    alert("Task not updated")
  }
  
}

useEffect(()=>{
  fetchData()
},[ID])

  return (
    <div className="container w-50">
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header bg-primary">
              <h3 className='text-white'>Update Task</h3>
            </div>
            <div className="card-body">
              <form
              onSubmit={handleUpdateTask}
              >
                <div className="mb-3">
                  <label className="form-label">Update Task Title</label>
                  <input type="text" className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Description</label>
                  <input type="text" className="form-control" 
                  name='description'
                  value={formData.description}
                  onChange={handleChange}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Status</label>
                  <input type="text" className="form-control"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update Start Date</label>
                  <input type="date" className="form-control"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Update End Date</label>
                  <input type="date" className="form-control"
                  name='endDate'
                  value={formData.endDate}
                  onChange={handleChange}

                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateTask