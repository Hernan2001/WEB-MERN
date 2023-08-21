import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users () {

    const [users, setUsers] = useState([{
        Name: "yousaf", Email: "ysf@gmail.com"
    }])
    return(
        
        
        <div className="d-flex vh-100 bg primary justify-content-center align-items-center">
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            />
            <div className="w-50 bg-white rounded p-3">
               <Link to="/create" className="btn btn-primary">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) =>{
                                return <tr>
                                    <td>{user.Name} </td>
                                    <td>{user.Email} </td>
                                    <td>
                                    <Link to="/update" className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger"> Delete</button>
                                        
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>

                </table>

            </div>
           
        </div>
    )
}

export default Users;