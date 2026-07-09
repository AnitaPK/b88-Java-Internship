import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{getTakDetails} from '../../api/api.js'

const TaskDetails = () => {
  const [taskDetail ,setTaskDetail] = useState()

  const {ID} = useParams()

  async function fetchData() {
    const res = await getTakDetails(ID)
    setTaskDetail(res.data)
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
                <button>Edit Task</button>
                <button>Delete Task</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails