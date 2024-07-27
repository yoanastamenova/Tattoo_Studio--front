import React, { useEffect, useState } from 'react'
import "./getAllUsers.css"

export const getAllUsers = () => {
  const [users, setUsers] = useState([]);
  const passport = JSON.parse(localStorage.getItem("passport"));
  const token = passport.token;

  useEffect(() => {
    const bringAllUsers = async () => {
      const allUsers = await getAllUsers(token);
      console.log(allUsers);
      if(allUsers.success) {
      setUsers(allUsers.data);
      }
    };
    bringAllUsers();
  }, []);

  const deleteUserHandler = async (e) => {
    const id = +e.target.name;
    const res = await deleteUserById(token, id);
    if (res.success) {
      const remainingUsers = users.filter((user) => {
        if (user.id !== id) {
            console.log(user)
            return user
        };
      });
      console.log(remainingUsers)
      setUsers(remainingUsers);
    }
  };

  return (
    <>
      <h3>All users registered: </h3>
      <div className="users-container">
        <div className="table-row" >
          <div className="content">id</div>
          <div className="content">email</div>
          <div className="content">active</div>
          <div className="content">actions</div>
        </div>
      {users.map((user, index) => {
        return (
            <div className="table-row" key={user.id}>
              <div className="content">{user.id}</div>
              <div className="content">{user.email}</div>
              <div className="content">{user.is_active ? "Yes" : "No"}</div>
              <div className="content">
                <CInput type="button" name={user.id} value="⊘" clickFunction={deleteUserHandler}/>
              </div>
            </div>
        );
      })}
      </div>
    </>
  );
};
