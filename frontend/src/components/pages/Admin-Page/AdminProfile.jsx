// good
// // src/components/Profile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../User-Page/UserContext';
import { useNavigate } from 'react-router-dom'; 
import './AdminProfile.css';
import profilepic from '../../Assets/profilepic.png'
import AdminPage from './AdminPage';
function Profile() {
    const { user } = useContext(UserContext);

    const navigate = useNavigate(); // Initialize navigate

    // const handleBook = () => {
    //     // navigate('/hallbooking'); // Navigate to the user-page route
    //     navigate('/hallbooking', { state: { user: user } }); 
    // };
    const handleBackClick = () => {
        navigate('/admin-pages'); // Navigate to the user-page route
    };

    return (
        <div>
            <AdminPage/>
        <div className="profile-container">
            <h1 className="profile-header">Profile</h1>
            {user ? (
                <div className="profile-details">
                    <div className="profile-info">
                        <img
                            src={profilepic}
                            alt="User Avatar"
                            className="profile-avatar"
                        />
                        <div className="profile-text">
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    </div>
                    <div className="profile-actions">
                        {/* <button className="btn btn-primary">Edit Profile</button> */}
                        {/* <button className="btn btn-primary" onClick={handleBook}>Booking History</button> */}
                        <button className="btn btn-danger" onClick={handleBackClick}>Back</button>
                    </div>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
        </div>
    );
}

export default Profile;
