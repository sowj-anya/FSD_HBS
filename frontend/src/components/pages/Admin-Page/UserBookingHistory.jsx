// It takes admin id 

import React, { useState, useEffect,useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../../Assets/logo1.png'; 
import { UserContext } from '../User-Page/UserContext';
export default function UserBookingHistory() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

// correct code
//   useEffect(() => {
//     // Fetch booking history
//     const fetchBookings = async () => {
//         try {
//           const response = await axios.get('http://localhost:8080/api/bookings');
//           console.log('API Response:', response.data); // Inspect the response
//           // Filter out non-object entries and log each item
//           const validBookings = response.data.filter(item => {
//             console.log('Item:', item); // Log each item to inspect its structure
//             return typeof item === 'object' && item !== null;
//           });
//           setBookings(validBookings);
//         } catch (error) {
//           console.error('Error fetching booking history:', error);
//         }
//       };
//     fetchBookings();
//   }, []);

useEffect(() => {
    // Fetch booking history
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/bookings');
        console.log('API Response:', response.data); // Inspect the response
        // Filter out non-object entries and log each item
        const validBookings = response.data.filter(item => {
          console.log('Item:', item); // Log each item to inspect its structure
          return typeof item === 'object' && item !== null;
        });
        setBookings(validBookings);
      } catch (error) {
        console.error('Error fetching booking history:', error);
      }
    };

    fetchBookings();
  }, []);

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fcf4fb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    nav: {
      backgroundColor: 'rgb(236, 206, 206)',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImg: {
      height: '50px',
    },
    navText: {
      margin: '0',
      // fontSize: '22px',
      color: '#333',
      // fontWeight: 'bold',
    },
    navButton: {
      backgroundColor: '#82257b', /* Dark pink background */
      color: '#ffffff', /* White text */
      border: 'none', /* Remove default border */
      padding: '10px 20px', /* Padding */
      borderRadius: '5px', /* Rounded corners */
      fontWeight: '700', /* Bold text */
      textTransform: 'uppercase', /* Uppercase text */
      fontSize: '16px',
      cursor: 'pointer', /* Pointer cursor */
      transition: 'background-color 0.3s', /* Smooth transition */
      marginRight:'10px',
    },
    navButtonHover: {
      backgroundColor: '#a02c9a', /* Lighter pink on hover */
    },
    body: {
      padding: '30px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    centeredAddHallSection: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '80%',
      maxWidth: '600px',
      marginBottom: '30px',
      textAlign: 'center',
    },
    addHallTitle: {
      fontSize: '28px',
      marginBottom: '20px',
      color: 'black',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formGroup: {
      marginBottom: '15px',
      width: '100%',
    },
    formLabel: {
      display: 'block',
      fontSize: '16px',
      marginBottom: '8px',
      color: 'black',
    },
    formInput: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
    },
    addButton: {
      backgroundColor: '#0077b6',
      color: '#fff',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    addButtonHover: {
      backgroundColor: '#005f73',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000',
    },
    modalContent: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      width: '500px',
      maxWidth: '90%',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      position: 'relative',
    },
    modalHeader: {
      fontSize: '24px',
      marginBottom: '20px',
      color: 'black',
    },
    modalActions: {
      marginTop: '20px',
      textAlign: 'right',
    },
    saveButton: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    cancelButton: {
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    header: {
      marginBottom: '30px',
    },
    title: {
      fontSize: '32px',
      color: '#333',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '18px',
      color: '#555',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
    },
    gridItem: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      textAlign: 'center',
    },
    editButton: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginRight: '8px',
      transition: 'background-color 0.3s',
    },
    deleteButton: {
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s',
    },



    body: {
      padding: '30px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fcf4fb',
    },
    tableContainer: {
      width: '100%',
      maxWidth: '1200px',
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: '#fefefe',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)',
      borderRadius: '8px',
    },
    th: {
      padding: '15px 20px',
      textAlign: 'left',
      fontSize: '1em',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      backgroundColor: '#e5f1ff',
      color: '#1a73e8',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    td: {
      padding: '15px 20px',
      textAlign: 'left',
      fontSize: '1em',
      borderBottom: '1px solid #eaeaea',
      borderRight: '1px solid #eaeaea',
      color: '#555',
    },
    tr: {
      transition: 'background-color 0.3s ease',
    },
    trEven: {
      backgroundColor: '#f9fafb',
    },
    trHover: {
      // backgroundColor: '#eaf5ff',
    },
    noBookings: {
      fontSize: '18px',
      color: '#777',
      marginTop: '20px',
    },
    
  };

  const handleLogout = () => {
    navigate('/admin-pages'); // Adjust the navigation path if needed
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="HallBooking Logo" style={styles.logoImg} />
        </Link>
        <p style={styles.navText}>View user bookings</p>
        <button style={styles.navButton} onClick={handleLogout}>Back</button>
      </nav>
      <div className="booking-history" style={styles.body}>
        <h2>User Booking History</h2>
        {bookings.length === 0 ? (
          <p style={styles.noBookings}>No bookings found.</p>
        ) : (
          <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                {/* <th>User ID</th> */}
                <th style={styles.th}>User Id</th>
                <th style={styles.th}>Hall</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Start Time</th>
                <th style={styles.th}>End Time</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.trEven : {}}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
                  {/* <td>{booking.userId || 'N/A'}</td> */}
                   <td style={styles.td}>{index + 2}</td> 
                  <td style={styles.td}>{booking.hall}</td>
                  <td style={styles.td}>{booking.date}</td>
                  <td style={styles.td}>{booking.startTime}</td>
                  <td style={styles.td}>{booking.endTime}</td>
                  <td style={styles.td}>Rs.{booking.price}</td>
                  <td style={styles.td}>{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
    </div>
  );
}


