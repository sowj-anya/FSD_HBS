import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo1.png';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
  
    const handleBook = () => {
      // Implement any necessary cleanup or state management here
  
      // Navigate to login page
      navigate('/login-register');
    };
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="HallBooking Logo" />
                </Link>
            </div>
            {/* <div className="logo">HallBooking</div> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login-register">Book Now</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            {/* <button className="nav-btn">Book Now</button> */}
            <button className="nav-btn" variant="outline-light" onClick={handleBook}>Login / Register</button>
        </nav>
    );
}

export default Navbar;




// default

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// const Navbar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/login-register">Login / Register</Link></li>
//                 {/* <li><Link to="/about">About</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/halls-available">Halls available</Link></li>
//                 <li><Link to="/payment">Payment</Link></li> */}
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;

