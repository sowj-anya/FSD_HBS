// AdminPage.jsx

import React, { useContext, useState } from 'react';
import { UserContext } from '../User-Page/UserContext';
// import axios from 'axios';
import './UserManagement.css';
// import logo from '../../Assets/logo1.png'; 
import AdminPage from './AdminPage';

const UserManagement = () => {
    const { users, updateUser, deleteUser } = useContext(UserContext);
    const [editingUser, setEditingUser] = useState(null);
    const [editedUser, setEditedUser] = useState({ name: '', email: '' });

    const handleEditClick = (user) => {
        setEditingUser(user);
        setEditedUser({ name: user.name, email: user.email });
    };

    const handleEditChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (id) => {
        updateUser(id, editedUser);
        setEditingUser(null);
    };

    const handleDeleteClick = (id) => {
        deleteUser(id);
    };

    return (
       <div>
        <AdminPage/>
        <div className="admin-page">
            <h1>User Management</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter((user) => user.email.endsWith('@gmail.com'))
                        .map((user) => (
                            <tr key={user.id}>
                                <td>
                                    {editingUser && editingUser.id === user.id ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={editedUser.name}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td>
                                    {editingUser && editingUser.id === user.id ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={editedUser.email}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        user.email
                                    )}
                                </td>
                                <td>
                                    {editingUser && editingUser.id === user.id ? (
                                        <>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleEditSubmit(user.id)}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => setEditingUser(null)}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleEditClick(user)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteClick(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default UserManagement;
