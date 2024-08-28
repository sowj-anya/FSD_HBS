import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo1.png'; // Path from current file to Assets folder
import './AdminPage.css';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  
      const handleLogout = () => {
        // Implement any necessary cleanup or state management here
    
        // Navigate to login page
        navigate('/');
      };
    return (
        
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="HallBooking Logo" />
                </Link>
            </div>
            <ul>
                <li><Link to="/admin-pages">Admin Panel</Link></li>
                {/* <li><Link to="/hall">Manage Halls</Link></li> */}
                <li><Link to="/admin-profile">Admin Profile</Link></li>
                <li><Link to="/edithall">Add and Edit hall</Link></li>
                <li><Link to="/userbooking">View user bookings</Link></li>
                <li><Link to="/usermanage">User Management</Link></li>
            </ul>
            {/* <button className="nav-btn">Book Now</button> */}
            <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default AdminPage;




// import React from 'react';
// import HallManagement from './HallManagement';
// import BookingManagement from './BookingManagement';
// import Reports from './Reports';
// import { useNavigate } from 'react-router-dom';
// import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap';
// import './AdminPage.css';

// const AdminPage = () => {

//     const navigate = useNavigate();
  
//     const handleLogout = () => {
//       // Implement any necessary cleanup or state management here
  
//       // Navigate to login page
//       navigate('/home');
//     };

//   return (
//     <Container>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#hall">Manage Halls</Nav.Link>
//           <Nav.Link href="#bookings">Manage Bookings</Nav.Link>
//           <Nav.Link href="#reports">Reports</Nav.Link>
//         </Nav>
//         <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
//       </Navbar>
//       <Row>
//         <Col md={12}>
//           <div id="hall">
//             <h2>Manage Hall Information</h2>
//             <HallManagement />
//           </div>
//         </Col>
//         <Col md={12}>
//           <div id="bookings">
//             <h2>Manage Bookings</h2>
//             <BookingManagement />
//           </div>
//         </Col>
//         <Col md={12}>
//           <div id="reports">
//             <h2>Generate Reports</h2>
//             <Reports />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPage;




