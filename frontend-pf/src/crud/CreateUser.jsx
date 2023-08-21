import React, { useState } from "react";
import axios from "axios";

function CreateUser() {


  return (

    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form >
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" className="form-control" 
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter Email" className="form-control" 
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Password</label>
            <input type="text" id="password" placeholder="Enter Password" className="form-control"
             />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
