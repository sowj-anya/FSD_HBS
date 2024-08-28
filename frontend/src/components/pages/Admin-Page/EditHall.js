
// perfect latest

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import HallCard from '../User-Page/HallCard';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo1.png';

Axios.defaults.baseURL = 'http://localhost:8080';

export default function AdminPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [halls, setHalls] = useState([]);
  const [currentHall, setCurrentHall] = useState(null);
  const [newHall, setNewHall] = useState({ imgsrc: '', block: '', hall: '', capacity: '', address: '', price: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch all halls from the backend
    Axios.get('/api/halls')
      .then(response => setHalls(response.data))
      .catch(error => console.error('Error fetching halls:', error));
  }, []);

  const handleLogout = () => {
    navigate('/admin-pages');
  };

  const handleEdit = (hall) => {
    setCurrentHall(hall);
    setIsOpen(true);
  };

  const handleSave = () => {
    Axios.put(`http://localhost:8080/api/halls/${currentHall.id}`, currentHall)
      .then(response => {
        setHalls(halls.map(hall => (hall.id === currentHall.id ? response.data : hall)));
        setIsOpen(false);
      })
      .catch(error => {
        console.error('Error updating hall:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
        alert('Failed to update hall. Please try again.');
      });
  };
  
  const handleDelete = (hallId) => {
    Axios.delete(`/api/halls/${hallId}`)
      .then(() => setHalls(halls.filter(hall => hall.id !== hallId)))
      .catch(error => console.error('Error deleting hall:', error));
  };

  const handleAdd = () => {
    if (validateForm()) {
      Axios.post('http://localhost:8080/api/halls', newHall)
        .then(response => {
          setHalls([...halls, response.data]);
          setNewHall({ imgsrc: '', block: '', hall: '', capacity: '', address: '', price: '' });
        })
        .catch(error => console.error('Error adding hall:', error));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newHall.imgsrc) newErrors.imgsrc = "Image URL is required.";
    if (!newHall.block) newErrors.block = "Block is required.";
    if (!newHall.hall) newErrors.hall = "Hall name is required.";
    if (!newHall.address) newErrors.address = "Address is required.";
    if (!newHall.capacity || newHall.capacity <= 0) newErrors.capacity = "Capacity must be a positive number.";
    if (!newHall.price || newHall.price <= 0) newErrors.price = "Price must be a positive number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="HallBooking Logo" style={styles.logoImg} />
        </Link>
        <p style={styles.navText}>ADD AND EDIT HALL</p>
        <button style={styles.navButton} onClick={handleLogout}>Back</button>
      </nav>
      <div style={styles.body}>
        {/* Modal for editing hall */}
        {isOpen && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <h2 style={styles.modalHeader}>Edit Hall</h2>
              <form style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Image URL</label>
                  <input
                    type="text"
                    style={styles.formInput}
                    value={currentHall?.imgsrc || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, imgsrc: e.target.value })}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Block</label>
                  <input
                    type="text"
                    style={styles.formInput}
                    value={currentHall?.block || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, block: e.target.value })}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Hall</label>
                  <input
                    type="text"
                    style={styles.formInput}
                    value={currentHall?.hall || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, hall: e.target.value })}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Address</label>
                  <input
                    type="text"
                    style={styles.formInput}
                    value={currentHall?.address || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, address: e.target.value })}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Capacity</label>
                  <input
                    type="number"
                    style={styles.formInput}
                    value={currentHall?.capacity || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, capacity: Number(e.target.value) })}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Price</label>
                  <input
                    type="number"
                    style={styles.formInput}
                    value={currentHall?.price || ''}
                    onChange={(e) => setCurrentHall({ ...currentHall, price: Number(e.target.value) })}
                  />
                </div>
                <div style={styles.modalActions}>
                  <button type="button" style={styles.saveButton} onClick={handleSave}>Save</button>
                  <button type="button" style={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Centered Add Hall Section */}
        <div style={styles.centeredAddHallSection}>
          <h2 style={styles.addHallTitle}>Add New Hall</h2>
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Image URL</label>
              <input
                type="text"
                style={styles.formInput}
                value={newHall.imgsrc}
                onChange={(e) => setNewHall({ ...newHall, imgsrc: e.target.value })}
              />
              {errors.imgsrc && <span style={styles.error}>{errors.imgsrc}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Block</label>
              <input
                type="text"
                style={styles.formInput}
                value={newHall.block}
                onChange={(e) => setNewHall({ ...newHall, block: e.target.value })}
              />
              {errors.block && <span style={styles.error}>{errors.block}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Hall</label>
              <input
                type="text"
                style={styles.formInput}
                value={newHall.hall}
                onChange={(e) => setNewHall({ ...newHall, hall: e.target.value })}
              />
              {errors.hall && <span style={styles.error}>{errors.hall}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Address</label>
              <input
                type="text"
                style={styles.formInput}
                value={newHall.address}
                onChange={(e) => setNewHall({ ...newHall, address: e.target.value })}
              />
              {errors.address && <span style={styles.error}>{errors.address}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Capacity</label>
              <input
                type="number"
                style={styles.formInput}
                value={newHall.capacity}
                onChange={(e) => setNewHall({ ...newHall, capacity: Number(e.target.value) })}
              />
              {errors.capacity && <span style={styles.error}>{errors.capacity}</span>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Price</label>
              <input
                type="number"
                style={styles.formInput}
                value={newHall.price}
                onChange={(e) => setNewHall({ ...newHall, price: Number(e.target.value) })}
              />
              {errors.price && <span style={styles.error}>{errors.price}</span>}
            </div>

            <button type="button" style={styles.addButton} onClick={handleAdd}>Add Hall</button>
          </form>
        </div>

        {/* Hall Cards Display */}
        <div style={styles.grid}>
          {halls.map(hall => (
            <div key={hall.id} style={styles.gridItem}>
                <HallCard 
                  imgsrc={hall.imgsrc} 
                  block={hall.block} 
                  hall={hall.hall} 
                  address={hall.address} 
                  capacity={hall.capacity} 
                  price={hall.price} 
                  hour={hall.hour} 
                  rating={hall.rating} 
                        />
              <button style={styles.editButton} onClick={() => handleEdit(hall)}>Edit</button>
              <button style={styles.deleteButton} onClick={() => handleDelete(hall.id)}>Delete</button>
            </div>
             ))}
           </div>

        {/* <div style={styles.hallCardsContainer}>
          {halls.map(hall => (
            <HallCard
              key={hall.id}
              hall={hall}
              onEdit={() => handleEdit(hall)}
              onDelete={() => handleDelete(hall.id)}
            />
          ))}
        </div> */}

        
        {/* Default Hall Cards */}
      { /* <div style={styles.defaultHallsSection}>
          <h2 style={styles.defaultHallsTitle}>Existing Halls</h2>
          <div style={styles.grid}>
            {defaultHalls.map(hall => (
              <div key={hall.id} style={styles.gridItem}>
                <HallCard 
                  imgsrc={hall.imgsrc} 
                  block={hall.block} 
                  hall={hall.hall} 
                  address={hall.address} 
                  capacity={hall.capacity} 
                  price={hall.price} 
                  hour={hall.hour} 
                  rating={hall.rating} 
                />
                 <button style={styles.editButton} onClick={() => handleEditDefault(hall)}>Edit</button>
                 <button style={styles.deleteButton} onClick={() => handleDeleteDefault(hall.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
}


// // code before tdy editing 

// import React, { useState } from 'react';
// import HallCard from '../User-Page/HallCard';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/logo1.png';

// export default function AdminPage() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const [halls, setHalls] = useState([
//     {
//       id: 1,
//       imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg",
//       block: "Family",
//       hall: "Wedding Ceremony Hall",
//       capacity: 500,
//       address: "123 Wedding Ave, Cityville",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4
//     },
//     {
//       id:2,
//       imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//       block: "Party",
//       hall: "Birthday Party Hall",
//       capacity: 200,
//       address: "45 Party St, FunTown",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.2
//     },
//     {
//       id:3,
//       imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//       block: "Corporate Events",
//       hall: "Corporate Events Hall",
//       capacity: 100,
//       address: "89 Biz Blvd, Corporate City",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.7
//     },
//     {
//       id:4,
//       imgsrc: "https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg",
//       block: "Seminar Hall",
//       hall: "ESB BIG SEMINAR HALL",
//       capacity: 100,
//       address: "12 Seminar Ln, Knowledge Hub",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.3
//     },
//     {
//       id:5,
//       imgsrc: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80",
//       block: "Seminar Hall",
//       hall: "ESB SEMINAR HALL 2",
//       capacity: 300,
//       address: "34 Lecture St, Education City",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.4
//     },
//     {
//       id:6,
//       imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU",
//       block: "Seminar Hall",
//       hall: "HIGHTECH SEMINAR HALL",
//       capacity: 400,
//       address: "56 Tech Blvd, Innovation Park",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.6
//     },
//     {
//       id:7,
//       imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//       block: "Seminar Hall",
//       hall: "LHC SEMINAR HALL - 1",
//       capacity: 350,
//       address: "78 Lecture Dr, University Town",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.4
//     },
//     {
//       id:8,
//       imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg",
//       block: "Seminar Hall",
//       hall: "LHC SEMINAR HALL",
//       capacity: 350,
//       address: "90 Education Rd, College City",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.3
//     },
//     {
//       id:9,
//       imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//       block: "Board Meeting",
//       hall: "BOARD MEETING ROOM",
//       capacity: 100,
//       address: "23 Meeting St, Business Park",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.8
//     },
//     {
//       id:10,
//       imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//       block: "Party",
//       hall: "Farewell",
//       capacity: 100,
//       address: "45 Party St, FunTown",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.2
//     },
//     {
//       id:11,
//       imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//       block: "Family",
//       hall: "Marriage Hall",
//       capacity: 300,
//       address: "678 Celebration Rd, Wedding City",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.6
//     }
//     // Add more halls as needed
//   ]);

//   const [currentHall, setCurrentHall] = useState(null);
//   const [newHall, setNewHall] = useState({ imgsrc: '', block: '', hall: '', capacity: '' });

//   const handleLogout = () => {
//     navigate('/admin-pages');
//   };

//   const handleEdit = (hall) => {
//     setCurrentHall(hall);
//     setIsOpen(true);
//   };

//   const handleSave = () => {
//     setHalls(halls.map(hall => (hall.id === currentHall.id ? currentHall : hall)));
//     setIsOpen(false);
//   };

//   const handleDelete = (hallId) => {
//     setHalls(halls.filter(hall => hall.id !== hallId));
//   };

//   const handleAdd = () => {
//     setHalls([...halls, { ...newHall, id: halls.length + 1 }]);
//     setNewHall({ imgsrc: '', block: '', hall: '', capacity: '' });
//   };

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!newHall.imgsrc) newErrors.imgsrc = "Image URL is required.";
//     if (!newHall.block) newErrors.block = "Block is required.";
//     if (!newHall.hall) newErrors.hall = "Hall name is required.";
//     if (!newHall.address) newErrors.address = "Address is required.";
//     if (!newHall.capacity || newHall.capacity <= 0) newErrors.capacity = "Capacity must be a positive number.";
//     if (!newHall.price || newHall.price <= 0) newErrors.price = "Price must be a positive number.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return (
//     <div style={styles.container}>
//       <nav style={styles.nav}>
//         <Link to="/" style={styles.logoLink}>
//           <img src={logo} alt="HallBooking Logo" style={styles.logoImg} />
//         </Link>
//         <p style={styles.navText}>ADD AND EDIT HALL</p>
//         <button style={styles.navButton} onClick={handleLogout}>Back</button>
//       </nav>
//       <div style={styles.body}>
//         {/* Modal for editing hall */}
//         {isOpen && (
//                 <div style={styles.modalOverlay}>
//                 <div style={styles.modalContent}>
//                   <h2 style={styles.modalHeader}>Edit Hall</h2>
//                   <form style={styles.form}>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Image URL</label>
//                       <input
//                         type="text"
//                         style={styles.formInput}
//                         value={currentHall?.imgsrc || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, imgsrc: e.target.value })}
//                       />
//                     </div>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Block</label>
//                       <input
//                         type="text"
//                         style={styles.formInput}
//                         value={currentHall?.block || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, block: e.target.value })}
//                       />
//                     </div>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Hall</label>
//                       <input
//                         type="text"
//                         style={styles.formInput}
//                         value={currentHall?.hall || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, hall: e.target.value })}
//                       />
//                     </div>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Address</label>
//                       <input
//                         type="text"
//                         style={styles.formInput}
//                         value={currentHall?.address || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, address: e.target.value })}
//                       />
//                     </div>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Capacity</label>
//                       <input
//                         type="number"
//                         style={styles.formInput}
//                         value={currentHall?.capacity || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, capacity: Number(e.target.value) })}
//                       />
//                     </div>
//                     <div style={styles.formGroup}>
//                       <label style={styles.formLabel}>Price</label>
//                       <input
//                         type="number"
//                         style={styles.formInput}
//                         value={currentHall?.price || ''}
//                         onChange={(e) => setCurrentHall({ ...currentHall, price: Number(e.target.value) })}
//                       />
//                     </div>
//                     <div style={styles.modalActions}>
//                       <button type="button" style={styles.saveButton} onClick={handleSave}>Save</button>
//                       <button type="button" style={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//         )}

//         {/* Centered Add Hall Section */}
//         <div style={styles.centeredAddHallSection}>
//       <h2 style={styles.addHallTitle}>Add New Hall</h2>
//       <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Image URL</label>
//           <input
//             type="text"
//             style={styles.formInput}
//             value={newHall.imgsrc}
//             onChange={(e) => setNewHall({ ...newHall, imgsrc: e.target.value })}
//           />
//           {errors.imgsrc && <span style={styles.error}>{errors.imgsrc}</span>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Block</label>
//           <input
//             type="text"
//             style={styles.formInput}
//             value={newHall.block}
//             onChange={(e) => setNewHall({ ...newHall, block: e.target.value })}
//           />
//           {errors.block && <span style={styles.error}>{errors.block}</span>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Hall</label>
//           <input
//             type="text"
//             style={styles.formInput}
//             value={newHall.hall}
//             onChange={(e) => setNewHall({ ...newHall, hall: e.target.value })}
//           />
//           {errors.hall && <span style={styles.error}>{errors.hall}</span>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Address</label>
//           <input
//             type="text"
//             style={styles.formInput}
//             value={newHall.address}
//             onChange={(e) => setNewHall({ ...newHall, address: e.target.value })}
//           />
//           {errors.address && <span style={styles.error}>{errors.address}</span>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Capacity</label>
//           <input
//             type="number"
//             style={styles.formInput}
//             value={newHall.capacity}
//             onChange={(e) => setNewHall({ ...newHall, capacity: Number(e.target.value) })}
//           />
//           {errors.capacity && <span style={styles.error}>{errors.capacity}</span>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.formLabel}>Price</label>
//           <input
//             type="number"
//             style={styles.formInput}
//             value={newHall.price}
//             onChange={(e) => setNewHall({ ...newHall, price: Number(e.target.value) })}
//           />
//           {errors.price && <span style={styles.error}>{errors.price}</span>}
//         </div>
        
//         <button
//           type="button"
//           style={styles.addButton}
//           onClick={handleAdd}
//         >
//           Add Hall
//         </button>
//       </form>
//     </div>


//         {/* Hall Cards Grid */}
//         <div style={styles.header}>
//           <h1 style={styles.title}>Manage Halls</h1>
//           <h2 style={styles.subtitle}>Edit or add new halls for booking</h2>
//         </div>
//         <div style={styles.grid}>
//           {halls.map(hall => (
//             <div key={hall.id} style={styles.gridItem}>
//               <HallCard {...hall} />
//               <button style={styles.editButton} onClick={() => handleEdit(hall)}>Edit</button>
//               <button style={styles.deleteButton} onClick={() => handleDelete(hall.id)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

const styles = {
  container: {
    // fontFamily: 'Arial, sans-serif',
    fontfamily: 'Segoe UI , Tahoma, Geneva, Verdana, sans-serif',
    // backgroundColor: '#f4f7f9',
    backgroundColor: '#fcf4fb',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    // backgroundColor: '#ffffff',
    backgroundColor: 'rgb(236, 206, 206)',
    padding: '15px 30px',
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
    color: 'black',
    fontWeight: 500,
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
    // backgroundColor: 'rgb(57, 54, 70)',
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
    // backgroundColor: 'rgb(57, 54, 70)',
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
    // backgroundColor: 'rgb(57, 54, 70)',

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
};


// //perfect code
// // import React, { useState } from 'react';
// // import HallCard from '../User-Page/HallCard';
// // import { Link, useNavigate } from 'react-router-dom';
// // import logo from '../../Assets/logo1.png';

// // export default function AdminPage() {
// //   const navigate = useNavigate();
// //   const [isOpen, setIsOpen] = useState(false);

// //   const [halls, setHalls] = useState([
// //     { id: 1, imgsrc: 'https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg', block: 'Wedding', hall: 'Wedding Ceremony Hall', capacity: '500' },
// //     { id: 2, imgsrc: 'https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg', block: 'Parties', hall: 'Birthday Party Hall with a max capacity', capacity: '200' },
// //     // Add more halls as needed
// //   ]);

// //   const [currentHall, setCurrentHall] = useState(null);
// //   const [newHall, setNewHall] = useState({ imgsrc: '', block: '', hall: '', capacity: '' });

// //   const handleLogout = () => {
// //     navigate('/admin-pages');
// //   };

// //   const handleEdit = (hall) => {
// //     setCurrentHall(hall);
// //     setIsOpen(true);
// //   };

// //   const handleSave = () => {
// //     setHalls(halls.map(hall => (hall.id === currentHall.id ? currentHall : hall)));
// //     setIsOpen(false);
// //   };

// //   const handleDelete = (hallId) => {
// //     setHalls(halls.filter(hall => hall.id !== hallId));
// //   };

// //   const handleAdd = () => {
// //     setHalls([...halls, { ...newHall, id: halls.length + 1 }]);
// //     setNewHall({ imgsrc: '', block: '', hall: '', capacity: '' });
// //   };

// //   return (
// //     <div>
// //       <nav style={styles.nav}>
// //         <Link to="/" style={styles.logoLink}>
// //           <img src={logo} alt="HallBooking Logo" style={styles.logoImg} />
// //         </Link>
// //         <p style={styles.navText}>ADMIN DASHBOARD</p>
// //         <button style={styles.navButton} onClick={handleLogout}>Back</button>
// //       </nav>
// //       <div style={styles.body}>
// //         <div style={styles.container}>
// //           <div style={styles.addHallSection}>
// //             <h2 style={styles.addHallTitle}>Add New Hall</h2>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Image URL</label>
// //               <input style={styles.formInput} value={newHall.imgsrc} onChange={(e) => setNewHall({ ...newHall, imgsrc: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Block</label>
// //               <input style={styles.formInput} value={newHall.block} onChange={(e) => setNewHall({ ...newHall, block: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Hall</label>
// //               <input style={styles.formInput} value={newHall.hall} onChange={(e) => setNewHall({ ...newHall, hall: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Capacity</label>
// //               <input style={styles.formInput} value={newHall.capacity} onChange={(e) => setNewHall({ ...newHall, capacity: e.target.value })} />
// //             </div>
// //             <button style={styles.addButton} onClick={handleAdd}>Add Hall</button>
// //           </div>
// //           <div style={styles.header}>
// //             <h1 style={styles.title}>Manage Halls</h1>
// //             <h2 style={styles.subtitle}>Edit or add new halls for booking</h2>
// //           </div>
// //           <div style={styles.grid}>
// //             {halls.map(hall => (
// //               <div key={hall.id} style={styles.gridItem}>
// //                 <HallCard {...hall} />
// //                 <button style={styles.editButton} onClick={() => handleEdit(hall)}>Edit</button>
// //                 <button style={styles.deleteButton} onClick={() => handleDelete(hall.id)}>Delete</button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {isOpen && (
// //         <div style={styles.modalOverlay}>
// //           <div style={styles.modalContent}>
// //             <h2 style={styles.modalHeader}>Edit Hall</h2>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Image URL</label>
// //               <input style={styles.formInput} value={currentHall?.imgsrc} onChange={(e) => setCurrentHall({ ...currentHall, imgsrc: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Block</label>
// //               <input style={styles.formInput} value={currentHall?.block} onChange={(e) => setCurrentHall({ ...currentHall, block: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Hall</label>
// //               <input style={styles.formInput} value={currentHall?.hall} onChange={(e) => setCurrentHall({ ...currentHall, hall: e.target.value })} />
// //             </div>
// //             <div style={styles.formGroup}>
// //               <label style={styles.formLabel}>Capacity</label>
// //               <input style={styles.formInput} value={currentHall?.capacity} onChange={(e) => setCurrentHall({ ...currentHall, capacity: e.target.value })} />
// //             </div>
// //             <div style={styles.modalActions}>
// //               <button style={styles.saveButton} onClick={handleSave}>Save</button>
// //               <button style={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   nav: {
// //     backgroundColor: 'white',
// //     padding: '10px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     borderBottom: '1px solid #ddd',
// //   },
// //   logoLink: {
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   logoImg: {
// //     height: '40px',
// //   },
// //   navText: {
// //     margin: '0',
// //     fontSize: '18px',
// //     color: '#333',
// //     fontWeight: 'bold',
// //   },
// //   navButton: {
// //     backgroundColor: '#0077b6',
// //     color: 'white',
// //     border: 'none',
// //     padding: '8px 16px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //     marginRight: '15px',
// //   },
// //   body: {
// //     padding: '20px',
// //   },
// //   container: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     marginBottom: '20px',
// //   },
// //   title: {
// //     fontSize: '32px',
// //     marginBottom: '10px',
// //   },
// //   subtitle: {
// //     fontSize: '20px',
// //     color: 'gray',
// //   },
// //   grid: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '20px',
// //     justifyContent: 'center',
// //   },
// //   gridItem: {
// //     width: 'calc(33.333% - 20px)',
// //     padding: '10px',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     textAlign: 'center',
// //     backgroundColor: '#fff',
// //   },
// //   editButton: {
// //     backgroundColor: '#4CAF50',
// //     color: 'white',
// //     border: 'none',
// //     padding: '8px 16px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     marginTop: '10px',
// //     marginRight: '10px',
// //   },
// //   deleteButton: {
// //     backgroundColor: '#f44336',
// //     color: 'white',
// //     border: 'none',
// //     padding: '8px 16px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     marginTop: '10px',
// //   },
// //   addHallSection: {
// //     marginBottom: '40px',
// //     textAlign: 'center',
// //   },
// //   addHallTitle: {
// //     fontSize: '24px',
// //     marginBottom: '20px',
// //   },
// //   formGroup: {
// //     marginBottom: '15px',
// //   },
// //   formLabel: {
// //     display: 'block',
// //     marginBottom: '5px',
// //     fontWeight: 'bold',
// //     color: 'black !important',
// //   },
// //   formInput: {
// //     width: '100%',
// //     padding: '8px',
// //     borderRadius: '4px',
// //     border: '1px solid #ddd',
// //   },
// //   addButton: {
// //     backgroundColor: '#0077b6',
// //     color: 'white',
// //     border: 'none',
// //     padding: '10px 20px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //   },
// //   modalOverlay: {
// //     position: 'fixed',
// //     top: '0',
// //     left: '0',
// //     right: '0',
// //     bottom: '0',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: 1000,
// //   },
// //   modalContent: {
// //     backgroundColor: 'white',
// //     padding: '20px',
// //     borderRadius: '4px',
// //     width: '400px',
// //     textAlign: 'center',
// //   },
// //   modalHeader: {
// //     fontSize: '24px',
// //     marginBottom: '20px',
// //   },
// //   modalActions: {
// //     marginTop: '20px',
// //   },
// //   saveButton: {
// //     backgroundColor: '#4CAF50',
// //     color: 'white',
// //     border: 'none',
// //     padding: '10px 20px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //     marginRight: '10px',
// //   },
// //   cancelButton: {
// //     backgroundColor: '#f44336',
// //     color: 'white',
// //     border: 'none',
// //     padding: '10px 20px',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //   },
// // };
