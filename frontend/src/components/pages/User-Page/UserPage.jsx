import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo1.png'; 
import './UserPage.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Homepage/Footer';
import Carasoul from './Carasoul';
const UserPage = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HallBooking Logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/halllist">Hall Availability</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        {/* <button className="nav-btn">Book Now</button> */}
        <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Logout</button>
      </nav>
    <Carasoul/>
    <Footer />
    </div>
  );
}

export default UserPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../Assets/logo1.png'; // Path from current file to Assets folder
// import './UserPage.css';
// import { useNavigate } from 'react-router-dom';

// const UserPage = () => {
//   const navigate = useNavigate();
  
//       const handleLogout = () => {
//         // Implement any necessary cleanup or state management here
    
//         // Navigate to login page
//         navigate('/');
//       };
//     return (
//         <nav>
//             <div className="logo">
//                 <Link to="/">
//                     <img src={logo} alt="HallBooking Logo" />
//                 </Link>
//             </div>
//             <ul>
//                 <li><Link to="/user-page">Profile</Link></li>
//                 <li><Link to="#">Hall Availability</Link></li>
//                 <li><Link to="#">Payment</Link></li>
//                 <li><Link to="#">Contact Us</Link></li>
//             </ul>
//             {/* <button className="nav-btn">Book Now</button> */}
//             <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Logout</button>
//         </nav>
//     );
// }

// export default UserPage;



