import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create_task">Create Task</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="/create_user">Create User</Link>
        </li>
        
      </ul>
     
    </div>
</nav>
  )
}

export default Navbar