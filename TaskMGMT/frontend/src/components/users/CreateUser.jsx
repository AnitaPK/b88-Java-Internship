import React from 'react'

const CreateUser = () => {
  return (
     <div className="container w-25">
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-header bg-primary">
              <h3 className='text-white'>Add User</h3>
            </div>
            <div className="card-body">
              <form
              // onSubmit={}
              >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Add Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Add Email</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Add Contact Number</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Task</label>
                  <input type="date" className="form-control" />
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

export default CreateUser