import React, { useEffect, useState } from 'react'
import {CInput} from "../../../components/CInput/CInput"
import {getUsers} from "../../../services/apiCalls"
import "./Users.css"

export const Users = () => {
    const [users, setUsers] = useState([])
    const passport = JSON.parse(localStorage.getItem("passport"));
    const token = passport.token;

    useEffect(() => {
        const bringUsers = async () => {
            const allUsers = await getUsers(token)
            if(allUsers.success){
                setUsers(allUsers.data)
            }
        }
        bringUsers();
    }, [])
  return (
      <>
      <h3>List of users registered: </h3>
      <div className="users-container">
        <div className="table-row" >
          <div className="content">id</div>
          <div className="content">email</div>
          <div className='content'>name</div>
          <div className="content">actions</div>
        </div>
      {users.map((user, index) => {
        return (
            <div className="table-row" key={user.id}>
              <div className="content">{user.id}</div>
              <div className="content">{user.email}</div>
              <div className="content">{user.first_name ? user.first_name : "No"}</div>
              <div className="content"> </div>
            </div>
        );
      })}
      </div>
    </>
  );
};