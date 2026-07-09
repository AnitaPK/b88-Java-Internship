import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateTask from './components/tasks/CreateTask'
import TaskList from './components/tasks/TaskList'
import UpdateTask from './components/tasks/UpdateTask'
import TaskDetails from './components/tasks/TaskDetails'
import CreateUser from './components/users/CreateUser'
import UserList from './components/users/UsersList'
import DetailUser from './components/users/DetailUser'
import EditUser from './components/users/EditUser'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/create_task' element={<CreateTask />}></Route>
          <Route path='/task_list' element={<TaskList />}></Route>
          <Route path='/detail_task/:ID' element={<TaskDetails />}></Route>
          <Route path='/edit_list/:ID' element={<UpdateTask />}></Route>

          <Route path='/create_user' element={<CreateUser />}></Route>
          <Route path='/user_list' element={<UserList />}></Route>
          <Route path='/user_details/:ID' element={<DetailUser />}></Route>
          <Route path='/edit_user/:Id' element={<EditUser />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
