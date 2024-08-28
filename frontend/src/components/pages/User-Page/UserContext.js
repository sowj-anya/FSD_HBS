import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                setUser(storedUser);
            }
        } catch (error) {
            console.error('Error parsing user data from localStorage', error);
        }
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users/all');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const updateUser = async (id, updatedUser) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/users/${id}`, updatedUser);
            setUsers(users.map(user => (user.id === id ? response.data : user)));
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, users, setUser, updateUser, deleteUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};



// before evening editing code  

// import React, { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         try {
//             const storedUser = JSON.parse(localStorage.getItem('user'));
//             if (storedUser) {
//                 setUser(storedUser);
//             }
//         } catch (error) {
//             console.error('Error parsing user data from localStorage', error);
//         }
//     }, []);

//     // Function to clear user data
//     const logoutUser = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//     };

//     return (
//         <UserContext.Provider value={{ user, setUser, logoutUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };




// src/UserContext.js
// Correct code
// import React, { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setUser(storedUser);
//         }
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };


// import React, { createContext, useState } from 'react';

// // Create a UserContext
// export const UserContext = createContext();

// // Create a UserProvider component
// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null); // Manage the user state

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
