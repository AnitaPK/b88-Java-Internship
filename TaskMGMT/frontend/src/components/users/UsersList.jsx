import React, { useEffect, useState } from 'react'
import{getAllUser, deleteUser} from '../../api/api'
import { Link, useNavigate } from 'react-router-dom'

const UsersList = () => {
  const [users , setUsers] = useState([])
  const navigate = useNavigate()

  async function fetchData(){
    const res =await getAllUser()
    setUsers(res.data)
  }

  async function handleDelete(id){
    const conformDelete = window.confirm("Are you sure you want to delete this uder??????")

    if(!conformDelete){
      return
    }
    try {
          // console.log(taskDetail.id)
          const res = await deleteUser(id)
          alert(res.data)
          navigate('/user_list')
          
        } catch (error) {
          console.log(error)
          alert("User not deleted")
        }
  }


  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="container">
      <h3>User List with Task</h3>
      <div className="row">
          {
            users?.map((u,i)=>(
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card">
                  <div className="card-header">
                    {u?.name}
                  </div>
                  <div className="card-body">
                    Email :
                    <p>{u?.email}</p>
                    <p>
                      Task ID : {u?.id}
                    </p>
                    <p>
                      <Link className="btn btn-primary me-2" to={`/edit_user/${u?.id}`}>Edit</Link>
                      <button className='btn btn-danger' onClick={()=>handleDelete(u.id)}>Delete</button>

                    </p>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default UsersList