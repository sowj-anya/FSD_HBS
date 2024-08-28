

// good
// // src/components/Profile.jsx
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link,useNavigate } from 'react-router-dom'; 
import './Profile.css';
import profilepic from '../../Assets/profilepic.png';
import logo from '../../Assets/logo1.png';
function Profile() {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    
    const handleBook = () => {
        navigate('/hallbooking', { state: { user: user } }); 
    };
    const handleBackClick = () => {
        navigate('/user-page'); 
    };
    
    const handleLogout = () => {
        navigate('/user-page');
      };
    return (
        <><div>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="HallBooking Logo" />
            </Link>
          </div>
          <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
        </nav>
      </div>
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
                        <button className="btn btn-primary" onClick={handleBook}>Booking History</button>
                        <button className="btn btn-danger" onClick={handleBackClick}>Back</button>
                    </div>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
        </>
    );
}

export default Profile;


// It works
// import React, { useContext } from 'react';
// import { UserContext } from './UserContext';

// function Profile() {
//     const { user } = useContext(UserContext);

//     return (
//         <div>
//             <h1>Profile</h1>
//             {user ? (
//                 <div>
//                     <p>Name: {user.name}</p>
//                     <p>Email: {user.email}</p>
//                 </div>
//             ) : (
//                 <p>No user data available</p>
//             )}
//         </div>
//     );
// }

// export default Profile;


