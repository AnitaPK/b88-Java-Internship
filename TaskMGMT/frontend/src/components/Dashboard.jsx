import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container">
        <h1 className='display-4 text-center mb-3 text-primary'>Task Management Dashboard</h1>
        <div className="row">
            <div className="col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Task Module</h4>
                        <p>Create , View, update and Delete Tasks...</p>
                        <Link className="btn btn-primary" to='/task_list'>
                            View Tasks
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                        <h4>User Module</h4>
                        <p>Create , View, update and Delete User...</p>
                        <Link className="btn btn-primary" to='/user_list'>
                            View Users
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Dashboard