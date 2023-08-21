import React from "react";

function UpdateUser () {
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" className="form-control" />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter Email" className="form-control" />
          </div>

          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
    )
}

export default UpdateUser;