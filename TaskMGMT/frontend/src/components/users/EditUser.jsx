import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getTakDetails, updateTaskByID, getUserDetail} from '../../api/api'

const EditUser = () => {
  const [user, setUser] = useState()

  const {ID} = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    task_id:0,
  })

  function handleChange (e){
        const { name, value } = e.target;

    setFormData({
      ...formData, [name]: name === "task_id" ? Number(value) : value
    })
  }


  async function fetchData() {
      const res = await getUserDetail(ID)
      // setTask(res.data)
      setFormData(res.data)
  }

async function handleUpdateUser(e) {
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
              <h3 className='text-white'>Add User</h3>
            </div>
            <div className="card-body">
              <form
              onSubmit={handleUpdateUser}
              >
                <div className="mb-3">
                  <label className="form-label">Add Name</label>
                  <input type="text" className="form-control"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Add Email</label>
                  <input type="email" className="form-control" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Task</label>
                  <select name="task_id" class="form-control"
                  onChange={handleChange}
                  
                  >
                    <option value={formData.task_id}>{formData.task_id}</option>
                    {/* {
                      t.map((t,i)=>(
                        <option key={i} value={t.id} name="task_id">{t.title}</option>
                      ))
                    } */}
                  </select>
                </div>  
                <button type="submit" className="btn btn-primary">Add User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser