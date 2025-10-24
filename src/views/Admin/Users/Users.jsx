import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from "../../../services/apiCalls";
import "./Users.css";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const passport = JSON.parse(localStorage.getItem("passport"));
    const token = passport.token;

    useEffect(() => {
        const bringUsers = async () => {
            const allUsers = await getUsers(token);
            if (allUsers.success) {
                setUsers(allUsers.data);
            }
        };
        bringUsers();
    }, [token]);

    const deleteUserHandler = async (e) => {
        const id = +e.target.name;
        const res = await deleteUser(token, id);
        if (res.success) {
            const restUsers = users.filter((user) => user.id !== id);
            setUsers(restUsers);
        }
    };

    return (
        <>
            <h3 className="text-center">List of users registered: </h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="text-center">{user.id}</td>
                            <td className="text-center">{user.email}</td>
                            <td className="text-center">{user.first_name ? user.first_name : "No Name"}</td>
                            <td className="text-center">
                                <button 
                                    className="btn btn-danger"
                                    name={user.id}
                                    onClick={deleteUserHandler}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan="4" className="text-center">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};