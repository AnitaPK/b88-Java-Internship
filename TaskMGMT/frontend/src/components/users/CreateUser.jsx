import React, { useEffect, useState } from 'react'
import {getAllTasks, createUser} from '../../api/api'
import { useNavigate } from 'react-router-dom'
 
const CreateUser = () => {
  const [tasks, setTasks] =useState([])

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    "name":'',
    "email":'',
    "task_id":0
  })

  async function fetchTasksList(){
    const res = await getAllTasks()
    setTasks(res.data)
  }


    function handleChange (e){
        const { name, value } = e.target;

    setFormData({
      ...formData, [name]: name === "task_id" ? Number(value) : value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    const res = await createUser(formData)
    alert(res.data)
    navigate('/user_list')
  }



  useEffect(()=>{
    fetchTasksList()
  },[])

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
              onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label className="form-label">Add Name</label>
                  <input type="text" className="form-control"
                  name='name'
                  // value=''
                  onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Add Email</label>
                  <input type="email" className="form-control" 
                  name="email"
                  // value=''
                  onChange={handleChange}

                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Task</label>
                  <select name="task_id" class="form-control"
                  onChange={handleChange}
                  
                  >
                    <option value="">Select task</option>
                    {
                      tasks.map((t,i)=>(
                        <option key={i} value={t.id} name="task_id">{t.title}</option>
                      ))
                    }
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

export default CreateUser