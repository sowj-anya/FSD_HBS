// Booking details , history

import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { UserContext } from './UserContext'; // Adjust the import path as needed
import './Booking.css';
import logo from '../../Assets/logo1.png';

export default function Booking() {
  const { user } = useContext(UserContext); // Access user from context
  const [datevalue, onDateChange] = useState(new Date());
  const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
  const [avail, onAvail] = useState(true);
  const [first, setFirst] = useState(false);
  const [booked, setBooked] = useState(false);
  const [data, setData] = useState([]);
  // const [price, setPrice] = useState(0); 

  const [bookings, setBookings] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const hallname = location.state.hall;
  const deets = location.state; // Use deets to get details from location state

  
  
  const [error, setError] = useState(null);
  // booking history adds

//   useEffect(() => {
//     const fetchBookings = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/api/bookings');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched bookings:', data);  // Debugging: Check the fetched data
//             setBookings(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setError(error.message);  // Store error message for displaying in the UI
//         }
//     };

//     fetchBookings();
// }, []);
   
useEffect(() => {
  if (user) {
    fetchBookings(user.id);
  }
}, [user]);
const fetchBookings = async (userId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/bookings/user/${userId}`);
    const text = await response.text();
    console.log('Raw Response Text:', text); // Log raw response text

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Attempt to parse the response text
    let data;
    try {
      data = JSON.parse(text);
      console.log('Parsed Data:', data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      throw new Error('Failed to parse JSON response');
    }

    // Ensure data is an array
    if (Array.isArray(data)) {
      // Filter to include only objects with user data
      const userBookings = data.filter(item => 
        typeof item === 'object' && item !== null && item.user && item.user.id === userId
      );
      console.log('Filtered User Bookings:', userBookings);
      setBookings(userBookings);
    } else {
      console.error('Expected array but received:', data);
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(error.message);
  }
};



// Only one data fetches 

// const fetchBookings = async (userId) => {
//   try {
//     const response = await fetch(`http://localhost:8080/api/bookings/user/${userId}`);
//     const text = await response.text();
//     console.log('Raw Response Text:', text); // Log raw response text

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const contentType = response.headers.get('Content-Type');
//     if (contentType && contentType.includes('application/json')) {
//       try {
//         const data = JSON.parse(text); // Attempt to parse JSON
//         console.log('Data received:', data);

//         // Assuming data is an array of bookings
//         const userBookings = data.filter((booking) => booking.user && booking.user.id === userId);
//         setBookings(userBookings);
//       } catch (jsonError) {
//         console.error('Error parsing JSON:', jsonError);
//         throw new Error('Expected JSON response, but parsing failed');
//       }
//     } else {
//       throw new Error('Expected JSON response, but got something else');
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setError(error.message);
//   }
// };


  function checkAvail() {
    onAvail(true);
    datevalue.setHours(0, 0, 0, 0);

    data.forEach((i) => {
      if (i.date === datevalue.toLocaleDateString()) {
        if (
          (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
          (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
        ) {
        } else {
          onAvail(false);
        }
      }
    });

    setBooked(false);
    setFirst(true);
  }

  function handleBookHall() {
    if (avail) {
      navigate('/payment', {
        state: {
          hall: hallname,
          date: datevalue.toLocaleDateString(),
          startTime: timevalue[0],
          endTime: timevalue[1],
          // price: price, 
          userId: user ? user.id : null, // Use userId from context
        },
      });
    }
  }

  const handleLogout = () => {
    navigate('/halllist');
  };

  // Filter data to show only bookings made by the logged-in user
  // const userBookings = user ? data.filter((i) => i.userId === user.id) : [];

  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="HallBooking Logo" />
            </Link>
          </div>
          <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
        </nav>
      </div>
      <div className="booking-container">
        <div className="booking-details">
          <h2>Booking details ({hallname})</h2>
          <div className="booking-form">
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => {
                setFirst(false);
                onDateChange(new Date(e.target.value));
              }}
              value={datevalue.toISOString().split('T')[0]}
            />
            <input
              type="time"
              name="start-time"
              onChange={(e) => {
                const newTimeValue = [...timevalue];
                newTimeValue[0] = e.target.value;
                onTimeChange(newTimeValue);
              }}
              value={timevalue[0]}
            />
            <span>to</span>
            <input
              type="time"
              name="end-time"
              onChange={(e) => {
                const newTimeValue = [...timevalue];
                newTimeValue[1] = e.target.value;
                onTimeChange(newTimeValue);
              }}
              value={timevalue[1]}
            />
            <button onClick={checkAvail}>Check Availability</button>
          </div>

          {first && (
            <div className="availability-status">
              {avail ? (
                booked ? (
                  <div>
                    <p>{hallname} has been booked!</p>
                    <p>Date: {datevalue.toLocaleDateString()}</p>
                    <p>Time: {timevalue[0]}-{timevalue[1]}</p>
                  </div>
                ) : (
                  <div>
                    <p>It is available</p>
                    <button onClick={handleBookHall}>Book Hall</button>
                  </div>
                )
              ) : (
                <p>It is not available</p>
              )}
            </div>
          )}
        </div>
        <div className="hall-details">
          <h2>Details</h2>
          <div className="hall-info">
            <img src={deets.imgsrc} alt={deets.hall} />
            <div>
              <h1>{deets.hall}</h1>
              <p>({deets.block})</p>
              <p>
                {deets.hall} is located in {deets.block}. It has comfortable
                seating and a lot of events have been conducted here! It holds a
                capacity of {deets.capacity} people.
              </p>
              <p className="capacity">Max Capacity: {deets.capacity}</p>
            </div>
          </div>
        </div>
        <div className="booking-history">
      <h2>Booking History</h2>
      {error && <p>Error fetching data: {error}</p>}
      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Hall</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              {/* <th>Price</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.hall}</td>
                <td>{booking.date}</td>
                <td>{booking.startTime}</td>
                <td>{booking.endTime}</td>
                {/* <td>{booking.price}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
         
       {/* <div className="booking-history">
              <h2>Booking history</h2>
          {error && <p>Error fetching data: {error}</p>}
          {/* {bookings.length > 0 ? ( 
                <table>
                    <thead>
                        <tr>
                            <th>Hall</th>
                            <th>Date</th>
                            <th>Start time</th>
                            <th>End time</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.hall}</td>
                                <td>{booking.date}</td>
                                <td>{booking.startTime}</td>
                                <td>{booking.endTime}</td>
                                <td>{booking.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No bookings found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div> */}
      </div>
    </>
  );
}



// recent pakka code

// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { UserContext } from './UserContext'; // Adjust the import path as needed
// import './Booking.css';
// import logo from '../../Assets/logo1.png'; 

// export default function Booking() {
//   const { user } = useContext(UserContext); // Access user from context
//   const [datevalue, onDateChange] = useState(new Date());
//   const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
//   const [avail, onAvail] = useState(true);
//   const [first, setFirst] = useState(false);
//   const [booked, setBooked] = useState(false);
//   const [data, setData] = useState([]);
//   // const [price, setPrice] = useState(0); 

//   const location = useLocation();
//   const navigate = useNavigate();
//   const hallname = location.state.hall;
//   const deets = location.state; // Use deets to get details from location state

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/getData?hall=${hallname}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);

//         // if (data.length > 0) {
//         //   setPrice(data[0].price); // Adjust based on your data structure
//         // }
        
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [booked, hallname]);
  

//   function checkAvail() {
//     onAvail(true);
//     datevalue.setHours(0, 0, 0, 0);

//     data.forEach((i) => {
//       if (i.date === datevalue.toLocaleDateString()) {
//         if (
//           (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
//           (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
//         ) {
//         } else {
//           onAvail(false);
//         }
//       }
//     });

//     setBooked(false);
//     setFirst(true);
//   }

//   function handleBookHall() {
//     if (avail) {
//       navigate('/payment', {
//         state: {
//           hall: hallname,
//           date: datevalue.toLocaleDateString(),
//           startTime: timevalue[0],
//           endTime: timevalue[1],
//           // price: price, 
//           userId: user ? user.id : null, // Use userId from context
//         },
//       });
//     }
//   }

//   const handleLogout = () => {
//     navigate('/halllist');
//   };

//   // Filter data to show only bookings made by the logged-in user
//   const userBookings = data.filter((i) => i.userId === user?.id);

//   return (
//     <>
//       <div>
//         <nav>
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="HallBooking Logo" />
//             </Link>
//           </div>
//           <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//         </nav>
//       </div>
//       <div className="booking-container">
//         <div className="booking-details">
//           <h2>Booking details ({hallname})</h2>
//           <div className="booking-form">
//             <input
//               type="date"
//               name="date"
//               min={new Date().toISOString().split('T')[0]}
//               onChange={(e) => {
//                 setFirst(false);
//                 onDateChange(new Date(e.target.value));
//               }}
//               value={datevalue.toISOString().split('T')[0]}
//             />
//             <input
//               type="time"
//               name="start-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[0] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[0]}
//             />
//             <span>to</span>
//             <input
//               type="time"
//               name="end-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[1] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[1]}
//             />
//             <button onClick={checkAvail}>Check Availability</button>
//           </div>

//           {first && (
//             <div className="availability-status">
//               {avail ? (
//                 booked ? (
//                   <div>
//                     <p>{hallname} has been booked!</p>
//                     <p>Date: {datevalue.toLocaleDateString()}</p>
//                     <p>Time: {timevalue[0]}-{timevalue[1]}</p>
//                   </div>
//                 ) : (
//                   <div>
//                     <p>It is available</p>
//                     <button onClick={handleBookHall}>Book Hall</button>
//                   </div>
//                 )
//               ) : (
//                 <p>It is not available</p>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="hall-details">
//           <h2>Details</h2>
//           <div className="hall-info">
//             <img src={deets.imgsrc} alt={deets.hall} />
//             <div>
//               <h1>{deets.hall}</h1>
//               <p>({deets.block})</p>
//               <p>
//                 {deets.hall} is located in {deets.block}. It has comfortable
//                 seating and a lot of events have been conducted here! It holds a
//                 capacity of {deets.capacity} people.
//               </p>
//               <p className="capacity">Max Capacity: {deets.capacity}</p>
//             </div>
//           </div>
//         </div>
//         <div className="booking-history">
//           <h2>Booking history</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Hall</th>
//                 <th>Date</th>
//                 <th>Start time</th>
//                 <th>End time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userBookings.length > 0 ? (
//                 userBookings.map((i) => (
//                   <tr key={i.id}>
//                     <td>{i.hall}</td>
//                     <td>{i.date}</td>
//                     <td>{i.startTime}</td>
//                     <td>{i.endTime}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No bookings found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }


// perfect code
// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { UserContext } from './UserContext'; // Adjust the import path as needed
// import './Booking.css';
// import logo from '../../Assets/logo1.png'; 

// export default function Booking() {
//   const { user } = useContext(UserContext); // Access user from context
//   const [datevalue, onDateChange] = useState(new Date());
//   const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
//   const [avail, onAvail] = useState(true);
//   const [first, setFirst] = useState(false);
//   const [booked, setBooked] = useState(false);
//   const [data, setData] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const hallname = location.state.hall;
//   const deets = location.state; // Use deets to get details from location state

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/getData?hall=${hallname}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [booked, hallname]);

//   function checkAvail() {
//     onAvail(true);
//     datevalue.setHours(0, 0, 0, 0);

//     data.forEach((i) => {
//       if (i.date === datevalue.toLocaleDateString()) {
//         if (
//           (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
//           (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
//         ) {
//         } else {
//           onAvail(false);
//         }
//       }
//     });

//     setBooked(false);
//     setFirst(true);
//   }

//   function handleBookHall() {
//     if (avail) {
//       navigate('/payment', {
//         state: {
//           hall: hallname,
//           date: datevalue.toLocaleDateString(),
//           startTime: timevalue[0],
//           endTime: timevalue[1],
//           userId: user ? user.id : null, // Use userId from context
//         },
//       });
//     }
//   }

//   const handleLogout = () => {
//     navigate('/halllist');
//   };

//   return (
//     <>
//       <div>
//         <nav>
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="HallBooking Logo" />
//             </Link>
//           </div>
//           <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//         </nav>
//       </div>
//       <div className="booking-container">
//         <div className="booking-details">
//           <h2>Booking details ({hallname})</h2>
//           <div className="booking-form">
//             <input
//               type="date"
//               name="date"
//               min={new Date().toISOString().split('T')[0]}
//               onChange={(e) => {
//                 setFirst(false);
//                 onDateChange(new Date(e.target.value));
//               }}
//               value={datevalue.toISOString().split('T')[0]}
//             />
//             <input
//               type="time"
//               name="start-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[0] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[0]}
//             />
//             <span>to</span>
//             <input
//               type="time"
//               name="end-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[1] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[1]}
//             />
//             <button onClick={checkAvail}>Check Availability</button>
//           </div>

//           {first && (
//             <div className="availability-status">
//               {avail ? (
//                 booked ? (
//                   <div>
//                     <p>{hallname} has been booked!</p>
//                     <p>Date: {datevalue.toLocaleDateString()}</p>
//                     <p>Time: {timevalue[0]}-{timevalue[1]}</p>
//                   </div>
//                 ) : (
//                   <div>
//                     <p>It is available</p>
//                     <button onClick={handleBookHall}>Book Hall</button>
//                   </div>
//                 )
//               ) : (
//                 <p>It is not available</p>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="hall-details">
//           <h2>Details</h2>
//           <div className="hall-info">
//             <img src={deets.imgsrc} alt={deets.hall} />
//             <div>
//               <h1>{deets.hall}</h1>
//               <p>({deets.block})</p>
//               <p>
//                 {deets.hall} is located in {deets.block}. It has comfortable
//                 seating and a lot of events have been conducted here! It holds a
//                 capacity of {deets.capacity} people.
//               </p>
//               <p className="capacity">Max Capacity: {deets.capacity}</p>
//             </div>
//           </div>
//         </div>
//         <div className="booking-history">
//           <h2>Booking history</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Hall</th>
//                 <th>Date</th>
//                 <th>Start time</th>
//                 <th>End time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((i) => (
//                 <tr key={i.id}>
//                   <td>{i.hall}</td>
//                   <td>{i.date}</td>
//                   <td>{i.startTime}</td>
//                   <td>{i.endTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }



// UserId comes crtly..
// import React, { useContext, useState, useEffect } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { UserContext } from './UserContext'; // Adjust the import path as needed
// import './Booking.css';
// import logo from '../../Assets/logo1.png'; 

// export default function Booking() {
//   const { user } = useContext(UserContext); // Access user from context
//   const [datevalue, onDateChange] = useState(new Date());
//   const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
//   const [avail, onAvail] = useState(true);
//   const [first, setFirst] = useState(false);
//   const [booked, setBooked] = useState(false);
//   const [data, setData] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const hallname = location.state.hall;

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/getData?hall=${hallname}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [booked, hallname]);

//   function checkAvail() {
//     onAvail(true);
//     datevalue.setHours(0, 0, 0, 0);

//     data.forEach((i) => {
//       if (i.date === datevalue.toLocaleDateString()) {
//         if (
//           (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
//           (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
//         ) {
//         } else {
//           onAvail(false);
//         }
//       }
//     });

//     setBooked(false);
//     setFirst(true);
//   }

//   function handleBookHall() {
//     if (avail) {
//       navigate('/payment', {
//         state: {
//           hall: hallname,
//           date: datevalue.toLocaleDateString(),
//           startTime: timevalue[0],
//           endTime: timevalue[1],
//           userId: user ? user.id : null, // Use userId from context
//         },
//       });
//     }
//   }

//   const handleLogout = () => {
//     navigate('/halllist');
//   };

//   return (
//     <>
//       <div>
//         <nav>
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="HallBooking Logo" />
//             </Link>
//           </div>
//           <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//         </nav>
//       </div>
//       <div className="booking-container">
//         <div className="booking-details">
//           <h2>Booking details ({hallname})</h2>
//           <div className="booking-form">
//             <input
//               type="date"
//               name="date"
//               min={new Date().toISOString().split('T')[0]}
//               onChange={(e) => {
//                 setFirst(false);
//                 onDateChange(new Date(e.target.value));
//               }}
//               value={datevalue.toISOString().split('T')[0]}
//             />
//             <input
//               type="time"
//               name="start-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[0] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[0]}
//             />
//             <span>to</span>
//             <input
//               type="time"
//               name="end-time"
//               onChange={(e) => {
//                 const newTimeValue = [...timevalue];
//                 newTimeValue[1] = e.target.value;
//                 onTimeChange(newTimeValue);
//               }}
//               value={timevalue[1]}
//             />
//             <button onClick={checkAvail}>Check Availability</button>
//           </div>

//           {first && (
//             <div className="availability-status">
//               {avail ? (
//                 booked ? (
//                   <div>
//                     <p>{hallname} has been booked!</p>
//                     <p>Date: {datevalue.toLocaleDateString()}</p>
//                     <p>Time: {timevalue[0]}-{timevalue[1]}</p>
//                   </div>
//                 ) : (
//                   <div>
//                     <p>It is available</p>
//                     <button onClick={handleBookHall}>Book Hall</button>
//                   </div>
//                 )
//               ) : (
//                 <p>It is not available</p>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="hall-details">
//           <h2>Details</h2>
//           <div className="hall-info">
//             {data.length > 0 && (
//               <img src={data[0].imgsrc} alt={data[0].hall} />
//             )}
//             <div>
//               {data.length > 0 && (
//                 <>
//                   <h1>{data[0].hall}</h1>
//                   <p>({data[0].block})</p>
//                   <p>
//                     {data[0].hall} is located in {data[0].block}. It has comfortable
//                     seating and a lot of events have been conducted here! It holds a
//                     capacity of {data[0].capacity} people.
//                   </p>
//                   <p className="capacity">Max Capacity: {data[0].capacity}</p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="booking-history">
//           <h2>Booking history</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Hall</th>
//                 <th>Date</th>
//                 <th>Start time</th>
//                 <th>End time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((i) => (
//                 <tr key={i.id}>
//                   <td>{i.hall}</td>
//                   <td>{i.date}</td>
//                   <td>{i.startTime}</td>
//                   <td>{i.endTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }



// correct code
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import './Booking.css';
// import logo from '../../Assets/logo1.png'; 
// export default function Booking() {
//   const [datevalue, onDateChange] = useState(new Date());
//   const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
//   const [avail, onAvail] = useState(true);
//   const [first, setFirst] = useState(false);
//   const [booked, setBooked] = useState(false);
//   const [data, setData] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const deets = location.state;
//   const hallname = location.state.hall;
//   const userId = location.state.userId; 

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/getDat
//       a?hall=${hallname}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [booked, hallname]);

//   function checkAvail() {
//     onAvail(true);
//     datevalue.setHours(0, 0, 0, 0);

//     data.forEach((i) => {
//       if (i.date === datevalue.toLocaleDateString()) {
//         if (
//           (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
//           (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
//         ) {
//         } else {
//           onAvail(false);
//         }
//       }
//     });

//     setBooked(false);
//     setFirst(true);
//   }

//   function handleBookHall() {
//     if (avail) {
//       navigate('/payment', {
//         state: {
//           hall: hallname,
//           date: datevalue.toLocaleDateString(),
//           startTime: timevalue[0],
//           endTime: timevalue[1],
//           userId: userId,
//         },
//       });
//     }
//   }
  
//   const handleLogout = () => {
//     navigate('/halllist');
//   };

//   return (
//     <>
//     <div>
//     <nav>
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="HallBooking Logo" />
//         </Link>
//       </div>
//       <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//     </nav>
//   </div>
//     <div className="booking-container">
//       <div className="booking-details">
//         <h2>Booking details ({hallname})</h2>
//         <div className="booking-form">
//           <input
//             type="date"
//             name="date"
//             min={new Date().toISOString().split('T')[0]}
//             onChange={(e) => {
//               setFirst(false);
//               onDateChange(new Date(e.target.value));
//             }}
//             value={datevalue.toISOString().split('T')[0]}
//           />
//           <input
//             type="time"
//             name="start-time"
//             onChange={(e) => {
//               const newTimeValue = [...timevalue];
//               newTimeValue[0] = e.target.value;
//               onTimeChange(newTimeValue);
//             }}
//             value={timevalue[0]}
//           />
//           <span>to</span>
//           <input
//             type="time"
//             name="end-time"
//             onChange={(e) => {
//               const newTimeValue = [...timevalue];
//               newTimeValue[1] = e.target.value;
//               onTimeChange(newTimeValue);
//             }}
//             value={timevalue[1]}
//           />
//           <button onClick={checkAvail}>Check Availability</button>
//         </div>

//         {first && (
//           <div className="availability-status">
//             {avail ? (
//               booked ? (
//                 <div>
//                   <p>{hallname} has been booked!</p>
//                   <p>Date: {datevalue.toLocaleDateString()}</p>
//                   <p>Time: {timevalue[0]}-{timevalue[1]}</p>
//                 </div>
//               ) : (
//                 <div>
//                   <p>It is available</p>
//                   <button onClick={handleBookHall}>Book Hall</button>
//                 </div>
//               )
//             ) : (
//               <p>It is not available</p>
//             )}
//           </div>
//         )}
//       </div>
//       <div className="hall-details">
//         <h2>Details</h2>
//         <div className="hall-info">
//           <img src={deets.imgsrc} alt={deets.hall} />
//           <div>
//             <h1>{deets.hall}</h1>
//             <p>({deets.block})</p>
//             <p>
//               {deets.hall} is located in {deets.block}. It has comfortable
//               seating and a lot of events have been conducted here! It holds a
//               capacity of {deets.capacity} people.
//             </p>
//             <p className="capacity">Max Capacity: {deets.capacity}</p>
//           </div>
//         </div>
//       </div>
//       <div className="booking-history">
//         <h2>Booking history</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Hall</th>
//               <th>Date</th>
//               <th>Start time</th>
//               <th>End time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((i) => (
//               <tr key={i.id}>
//                 <td>{i.hall}</td>
//                 <td>{i.date}</td>
//                 <td>{i.startTime}</td>
//                 <td>{i.endTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Booking.css';

// export default function Booking() {
//   const [datevalue, onDateChange] = useState(new Date());
//   const [timevalue, onTimeChange] = useState(["10:00", "11:00"]);
//   const [avail, onAvail] = useState(true);
//   const [first, setFirst] = useState(false);
//   const [booked, setBooked] = useState(false);
//   const [data, setData] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const deets = location.state;
//   const hallname = location.state.hall;

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/getData?hall=${hallname}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [booked, hallname]);

//   // function sendNewBooking() {
//   //   datevalue.setHours(0, 0, 0, 0);
//   //   fetch(`${process.env.REACT_APP_SERVER_URL}/postData`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       hall: hallname,
//   //       date: datevalue.toLocaleDateString(),
//   //       startTime: timevalue[0],
//   //       endTime: timevalue[1],
//   //     }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then(() => {
//   //       setBooked(true);
//   //       console.log("New data inserted");
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error posting data:', error);
//   //     });
//   // }

//   function checkAvail() {
//     onAvail(true);
//     datevalue.setHours(0, 0, 0, 0);

//     data.forEach((i) => {
//       if (i.date === datevalue.toLocaleDateString()) {
//         if (
//           (timevalue[0] < i.startTime && timevalue[1] <= i.startTime) ||
//           (timevalue[0] >= i.endTime && timevalue[1] > i.endTime)
//         ) {
//         } else {
//           onAvail(false);
//         }
//       }
//     });

//     setBooked(false);
//     setFirst(true);
//   }

//   function handleBookHall() {
//     if (avail) {
//       navigate('/payment', {
//         state: {
//           hall: hallname,
//           date: datevalue.toLocaleDateString(),
//           startTime: timevalue[0],
//           endTime: timevalue[1],
//         },
//       });
//     }
//   }

//   return (
//     <div className="booking-container">
//       <div className="booking-details">
//         <h2>Booking details ({hallname})</h2>
//         <div className="booking-form">
//           <input
//             type="date"
//             name="date"
//             min={new Date().toISOString().split('T')[0]}
//             onChange={(e) => {
//               setFirst(false);
//               onDateChange(new Date(e.target.value));
//             }}
//             value={datevalue.toISOString().split('T')[0]}
//           />
//           <input
//             type="time"
//             name="start-time"
//             onChange={(e) => {
//               const newTimeValue = [...timevalue];
//               newTimeValue[0] = e.target.value;
//               onTimeChange(newTimeValue);
//             }}
//             value={timevalue[0]}
//           />
//           <span>to</span>
//           <input
//             type="time"
//             name="end-time"
//             onChange={(e) => {
//               const newTimeValue = [...timevalue];
//               newTimeValue[1] = e.target.value;
//               onTimeChange(newTimeValue);
//             }}
//             value={timevalue[1]}
//           />
//           <button onClick={checkAvail}>Check Availability</button>
//         </div>

//         {first && (
//           <div className="availability-status">
//             {avail ? (
//               booked ? (
//                 <div>
//                   <p>{hallname} has been booked!</p>
//                   <p>Date: {datevalue.toLocaleDateString()}</p>
//                   <p>Time: {timevalue[0]}-{timevalue[1]}</p>
//                 </div>
//               ) : (
//                 <div>
//                   <p>It is available</p>
//                   <button onClick={handleBookHall}>Book Hall</button>
//                 </div>
//               )
//             ) : (
//               <p>It is not available</p>
//             )}
//           </div>
//         )}
//       </div>
//       <div className="hall-details">
//         <h2>Details</h2>
//         <div className="hall-info">
//           <img src={deets.imgsrc} alt={deets.hall} />
//           <div>
//             <h1>{deets.hall}</h1>
//             <p>({deets.block})</p>
//             <p>
//               {deets.hall} is located in {deets.block}. It has comfortable
//               seating and a lot of events have been conducted here! It holds a
//               capacity of {deets.capacity} people.
//             </p>
//             <p className="capacity">Max Capacity: {deets.capacity}</p>
//           </div>
//         </div>
//       </div>
//       <div className="booking-history">
//         <h2>Booking history</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Hall</th>
//               <th>Date</th>
//               <th>Start time</th>
//               <th>End time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((i) => (
//               <tr key={i.id}>
//                 <td>{i.hall}</td>
//                 <td>{i.date}</td>
//                 <td>{i.startTime}</td>
//                 <td>{i.endTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
