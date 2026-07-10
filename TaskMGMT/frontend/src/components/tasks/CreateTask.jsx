import React, { useState } from 'react'
import {createTask} from '../../api/api.js'

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [description, setDecription] = useState('')
  const [status, setStatus] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const payload = {
      title:title,
      description:description,
      status:status,
      startDate:startDate,
      endDate:endDate
    }
    // console.log(payload)
    try {
      const res = await createTask(payload)
      alert(res.data)
      title='',
      description='',
      status='',
      startDate='',
      endDate=''
    } catch (error) {
      console.log(error)
      alert("Task not added")
    }



  }


  return (
    <div className="container w-md-25">
      <div className="row">
        <div className="col-md-12 ">
          <div className="card shadow">
            <div className="card-header bg-primary">
              <h3 className='text-white'>Add Task</h3>
            </div>
            <div className="card-body">
              <form
              onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Add Task Title</label>
                  <input type="text" className="form-control" 
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" 
                  onChange={(e)=>setDecription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  {/* <input type="text" className="form-control" 
                  onChange={(e)=>setStatus(e.target.value)}
                  /> */}
                  <select name="status" id="" class="form-control" 
                  onChange={(e)=>setStatus(e.target.value)}
                  >
                    <option value="" name="status">Select Status</option>
                    <option value="pending" name="status">Pending</option>
                    <option value="in-progress" name="status">In-Progress</option>
                    <option value="completed" name="status">Completed</option>

                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-control" 
                  onChange={(e)=>setStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-control" 
                    onChange={(e)=>setEndDate(e.target.value)}
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

export default CreateTask