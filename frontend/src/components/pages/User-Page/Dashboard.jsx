// import React from 'react';
// import HallCard from './HallCard';
// import './Dashboard.css'; // Import the CSS file
// import { Box, Heading } from '@chakra-ui/react'; // Import Chakra UI components
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/logo1.png'; 
// export default function Dashboard() {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/user-page'); // Navigate back to the previous page
//   };


//   return (
//     <div>
//         <nav>
//         {/* <nav style={{ backgroundColor: 'white'}}> */}
//           <div className="logo">
//             <Link to="/">
//               <img src={logo} alt="HallBooking Logo" />
//             </Link>
//           </div>
//           <p style={{ margin: '0', fontSize: '16px', color: '#333' }}>HAPPY BOOKING</p>
//           <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//       </nav>
//       <Box className="dashboard-body">
//         <Box className="container">
//           {/* Professional Heading */}
//           <Box textAlign="center" mb="8">
//             <Heading as="h1" size="xl" mb="4">
//               Available Halls for Booking
//             </Heading>
//             <Heading as="h2" size="lg" color="gray.500">
//               Choose from a variety of halls for your events
//             </Heading>
//           </Box>
//           <Box className="grid">
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg"
//                 block="Wedding"
//                 hall="Wedding Ceremoney Hall"
//                 capacity="500"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg"
//                 block="Parties"
//                 hall="Birthday Party hall with a max capacity"
//                 capacity="200"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//                 block="Corporate Events"
//                 hall="Corporate Events Hall With max Capacity"
//                 capacity="100"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg"
//                 block="ESB"
//                 hall="ESB BIG SEMINAR HALL"
//                 capacity="100"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80"
//                 block="ESB"
//                 hall="ESB SEMINAR HALL 2"
//                 capacity="300"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU"
//                 block="DES"
//                 hall="HIGHTECH SEMINAR HALL"
//                 capacity="400"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//                 block="LHC"
//                 hall="LHC SEMINAR HALL - 1"
//                 capacity="350"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg"
//                 block="LHC"
//                 hall="LHC SEMINAR HALL"
//                 capacity="350"
//               />
//             </div>
//             <div className="grid-item">
//               <HallCard
//                 imgsrc="https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg"
//                 block="HERITAGE"
//                 hall="BOARD MEETING ROOM"
//                 capacity="100"
//               />
//             </div>
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// best with filters and all
// import React, { useState } from 'react';
// import HallCard from './HallCard';
// import './Dashboard.css'; // Import the CSS file
// import { Box, Heading, Input, Checkbox, Button } from '@chakra-ui/react'; // Import Chakra UI components
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/logo1.png';

// export default function Dashboard() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedBlocks, setSelectedBlocks] = useState([]);
//   const [selectedCapacity, setSelectedCapacity] = useState([]);
//   const [capacityRange, setCapacityRange] = useState([100, 500]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/user-page');
//   };

//   const handleBlockChange = (block) => {
//     setSelectedBlocks(prevSelectedBlocks =>
//       prevSelectedBlocks.includes(block)
//         ? prevSelectedBlocks.filter(item => item !== block)
//         : [...prevSelectedBlocks, block]
//     );
//   };

//   const handleCapacityChange = (capacity) => {
//     setSelectedCapacity(prevSelectedCapacity =>
//       prevSelectedCapacity.includes(capacity)
//         ? prevSelectedCapacity.filter(item => item !== capacity)
//         : [...prevSelectedCapacity, capacity]
//     );
//   };

//   const handleRangeChange = (e) => {
//     const [min, max] = e.target.value.split(',').map(Number);
//     setCapacityRange([min, max]);
//   };

//   const increaseCapacity = () => {
//     setCapacityRange(prevRange => [
//       Math.min(prevRange[0] + 50, 500),
//       prevRange[1]
//     ]);
//   };

//   const decreaseCapacity = () => {
//     setCapacityRange(prevRange => [
//       Math.max(prevRange[0] - 50, 100),
//       prevRange[1]
//     ]);
//   };

//   const clearFilters = () => {
//     setSearchQuery('');
//     setSelectedBlocks([]);
//     setSelectedCapacity([]);
//     setCapacityRange([100, 500]);
//   };

//   const getThumbPosition = (value) => {
//     const min = 100;
//     const max = 500;
//     const percentage = ((value - min) / (max - min)) * 100;
//     return `calc(${percentage}% + (${value}px))`;
//   };

//   const halls = [
  //   { imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg", block: "Family", hall: "Wedding Ceremony Hall", capacity: 500 },
  //   { imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg", block: "Party", hall: "Birthday Party Hall", capacity: 200 },
  //   { imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80", block: "Corporate Events", hall: "Corporate Events Hall", capacity: 100 },
  //   { imgsrc: "https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg", block: "Seminar Hall", hall: "ESB BIG SEMINAR HALL", capacity: 100 },
  //   { imgsrc: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80", block: "Seminar Hall", hall: "ESB SEMINAR HALL 2", capacity: 300 },
  //   { imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU", block: "Seminar Hall", hall: "HIGHTECH SEMINAR HALL", capacity: 400 },
  //   { imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80", block: "Seminar Hall", hall: "LHC SEMINAR HALL - 1", capacity: 350 },
  //   { imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg", block: "Seminar Hall", hall: "LHC SEMINAR HALL", capacity: 350 },
  //   { imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg", block: "Board Meeting", hall: "BOARD MEETING ROOM", capacity: 100 },
  //   { imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg", block: "Party", hall: "Farewell", capacity: 100 },
  //   { imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg", block: "Family", hall: "Marriage Hall", capacity: 300 },
  // ];

//   const filteredHalls = halls.filter(hall =>
//     (hall.hall.toLowerCase().includes(searchQuery.toLowerCase()) ||
//      hall.block.toLowerCase().includes(searchQuery.toLowerCase())) &&
//     (selectedBlocks.length === 0 || selectedBlocks.includes(hall.block)) &&
//     (hall.capacity >= capacityRange[0] && hall.capacity <= capacityRange[1])
//   );

//   return (
//     <div>
//       <nav>
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="HallBooking Logo" />
//           </Link>
//         </div>
//         <p style={{ margin: '0', fontSize: '16px', color: '#333' }}>HAPPY BOOKING</p>
//         <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//       </nav>
//       <Box className="dashboard-body">
//         <Box className="filter-container">
//           <Heading as="h3" size="md" className="filters-heading">
//             Filters
//           </Heading>
//           <Box className="search-container">
//             <Input
//               placeholder="Search halls..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="search-input"
//             />
//           </Box>
//           <Box className="filter-section">
//             <Heading as="h4" size="sm" className="filter-title">
//               Block
//             </Heading>
//             <Box className="filter-block">
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Family')}
//                   onChange={() => handleBlockChange('Family')}
//                 />
//                 Family
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Board Meeting')}
//                   onChange={() => handleBlockChange('Board Meeting')}
//                 />
//                 Board Meeting
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Corporate Events')}
//                   onChange={() => handleBlockChange('Corporate Events')}
//                 />
//                 Corporate Events
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Seminar Hall')}
//                   onChange={() => handleBlockChange('Seminar Hall')}
//                 />
//                 Seminar Halls
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Party')}
//                   onChange={() => handleBlockChange('Party')}
//                 />
//                 Party
//               </label>
//             </Box>
//           </Box>
//           <Box className="filter-section">
//             <Heading as="h4" size="sm" className="filter-title">
//               Capacity
//             </Heading>
//             <Box className="range-slider-container">
//               <div className="range-slider-label">
//                 <span>{capacityRange[0]}</span>
//                 <span>{capacityRange[1]}</span>
//               </div>
//               <input
//                 type="range"
//                 min="100"
//                 max="500"
//                 step="50"
//                 value={`${capacityRange[0]},${capacityRange[1]}`}
//                 onChange={handleRangeChange}
//                 className="range-slider"
//               />
//               <div
//                 className="moving-circle"
//                 style={{ left: getThumbPosition(capacityRange[0]) }}
//               />
//               <div
//                 className="moving-circle"
//                 style={{ left: getThumbPosition(capacityRange[1]) }}
//               />
//             </Box>
//             <Box className="capacity-controls">
//               <Button onClick={decreaseCapacity} disabled={capacityRange[0] <= 100}>-</Button>
//               <span>Capacity Range</span>
//               <Button onClick={increaseCapacity} disabled={capacityRange[1] >= 500}>+</Button>
//             </Box>
//             <Button
//               colorScheme="teal"
//               variant="outline"
//               onClick={clearFilters}
//               className="clear-filters-button"
//             >
//               Clear Filters
//             </Button>
//           </Box>
//         </Box>
//         <Box className="container">
//           <Box textAlign="center" mb="8">
//             <Heading as="h1" size="xl" mb="4">
//               Discover the Ideal Venue for Your Next Event
//             </Heading>
//             <Heading as="h2" size="lg" color="gray.500">
//               Browse Our Exclusive Selection of Premium Halls
//             </Heading>
//           </Box>
//           <Box className="grid">
//             {filteredHalls.map((hall, index) => (
//               <div className="grid-item" key={index}>
//                 <HallCard
//                   imgsrc={hall.imgsrc}
//                   block={hall.block}
//                   hall={hall.hall}
//                   capacity={hall.capacity}
//                 />
//               </div>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// best with rating and star
// import React, { useState } from 'react';
// import HallCard from './HallCard';
// import './Dashboard.css'; // Import the CSS file
// import { Box, Heading, Input, Checkbox, Button } from '@chakra-ui/react'; // Import Chakra UI components
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/logo1.png';

// export default function Dashboard() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedBlocks, setSelectedBlocks] = useState([]);
//   const [selectedCapacity, setSelectedCapacity] = useState([]);
//   const [capacityRange, setCapacityRange] = useState([100, 500]);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/user-page');
//   };

//   const handleBlockChange = (block) => {
//     setSelectedBlocks(prevSelectedBlocks =>
//       prevSelectedBlocks.includes(block)
//         ? prevSelectedBlocks.filter(item => item !== block)
//         : [...prevSelectedBlocks, block]
//     );
//   };

//   const handleCapacityChange = (capacity) => {
//     setSelectedCapacity(prevSelectedCapacity =>
//       prevSelectedCapacity.includes(capacity)
//         ? prevSelectedCapacity.filter(item => item !== capacity)
//         : [...prevSelectedCapacity, capacity]
//     );
//   };

//   const handleRangeChange = (e) => {
//     const [min, max] = e.target.value.split(',').map(Number);
//     setCapacityRange([min, max]);
//   };

//   const increaseCapacity = () => {
//     setCapacityRange(prevRange => [
//       Math.min(prevRange[0] + 50, 500),
//       prevRange[1]
//     ]);
//   };

//   const decreaseCapacity = () => {
//     setCapacityRange(prevRange => [
//       Math.max(prevRange[0] - 50, 100),
//       prevRange[1]
//     ]);
//   };

//   const clearFilters = () => {
//     setSearchQuery('');
//     setSelectedBlocks([]);
//     setSelectedCapacity([]);
//     setCapacityRange([100, 500]);
//   };

//   const getThumbPosition = (value) => {
//     const min = 100;
//     const max = 500;
//     const percentage = ((value - min) / (max - min)) * 100;
//     return `calc(${percentage}% + (${value}px))`;
//   };
  
//   const halls = [
//     {
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
//       imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//       block: "Family",
//       hall: "Marriage Hall",
//       capacity: 300,
//       address: "678 Celebration Rd, Wedding City",
//       price: 10000,
//       hour: "1 hr",
//       rating: 4.6
//     }
//   ];
  
 

//   const filteredHalls = halls.filter(hall =>
//     (hall.hall.toLowerCase().includes(searchQuery.toLowerCase()) ||
//      hall.block.toLowerCase().includes(searchQuery.toLowerCase())) &&
//     (selectedBlocks.length === 0 || selectedBlocks.includes(hall.block)) &&
//     (hall.capacity >= capacityRange[0] && hall.capacity <= capacityRange[1])
//   );

//   return (
//     <div>
//       <nav>
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="HallBooking Logo" />
//           </Link>
//         </div>
//         <p style={{ margin: '0', fontSize: '16px', color: '#333' }}>HAPPY BOOKING</p>
//         <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//       </nav>
//       <Box className="dashboard-body">
//         <Box className="filter-container">
//           <Heading as="h3" size="md" className="filters-heading">
//             Filters
//           </Heading>
//           <Box className="search-container">
//             <Input
//               placeholder="Search halls..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="search-input"
//             />
//           </Box>
//           <Box className="filter-section">
//             <Heading as="h4" size="sm" className="filter-title">
//               Block
//             </Heading>
//             <Box className="filter-block">
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Family')}
//                   onChange={() => handleBlockChange('Family')}
//                 />
//                 Family
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Board Meeting')}
//                   onChange={() => handleBlockChange('Board Meeting')}
//                 />
//                 Board Meeting
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Corporate Events')}
//                   onChange={() => handleBlockChange('Corporate Events')}
//                 />
//                 Corporate Events
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Seminar Hall')}
//                   onChange={() => handleBlockChange('Seminar Hall')}
//                 />
//                 Seminar Halls
//               </label>
//               <label>
//                 <Checkbox
//                   isChecked={selectedBlocks.includes('Party')}
//                   onChange={() => handleBlockChange('Party')}
//                 />
//                 Party
//               </label>
//             </Box>
//           </Box>
//           <Box className="filter-section">
//             <Heading as="h4" size="sm" className="filter-title">
//               Capacity
//             </Heading>
//             <Box className="range-slider-container">
//               <div className="range-slider-label">
//                 <span>{capacityRange[0]}</span>
//                 <span>{capacityRange[1]}</span>
//               </div>
//               <input
//                 type="range"
//                 min="100"
//                 max="500"
//                 step="50"
//                 value={`${capacityRange[0]},${capacityRange[1]}`}
//                 onChange={handleRangeChange}
//                 className="range-slider"
//               />
//               <div
//                 className="moving-circle"
//                 style={{ left: getThumbPosition(capacityRange[0]) }}
//               />
//               <div
//                 className="moving-circle"
//                 style={{ left: getThumbPosition(capacityRange[1]) }}
//               />
//             </Box>
//             <Box className="capacity-controls">
//               <Button onClick={decreaseCapacity} disabled={capacityRange[0] <= 100}>-</Button>
//               <span>Capacity Range</span>
//               <Button onClick={increaseCapacity} disabled={capacityRange[1] >= 500}>+</Button>
//             </Box>
//             <Button
//               colorScheme="teal"
//               variant="outline"
//               onClick={clearFilters}
//               className="clear-filters-button"
//             >
//               Clear Filters
//             </Button>
//           </Box>
//         </Box>
//         <Box className="container">
//           <Box textAlign="center" mb="8">
//             <Heading as="h1" size="xl" mb="4">
//               Discover the Ideal Venue for Your Next Event
//             </Heading>
//             <Heading as="h2" size="lg" color="gray.500">
//               Browse Our Exclusive Selection of Premium Halls
//             </Heading>
//           </Box>
//           <Box className="grid">
//             {filteredHalls.map((hall, index) => (
//               <div className="grid-item" key={index}>
//                 <HallCard
//                   imgsrc={hall.imgsrc}
//                   block={hall.block}
//                   hall={hall.hall}
//                   capacity={hall.capacity}
//                   address={hall.address}
//                   price={hall.price}
//                   rating={hall.rating}
//                 />
//               </div>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// }



// tdy mrng code - perfect

// Available halls

import React, { 
  useState, useEffect } from 'react';
import HallCard from './HallCard';
import './Dashboard.css'; // Import the CSS file
import { Box, Heading, Input, Checkbox, Button } from '@chakra-ui/react'; // Import Chakra UI components
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo1.png';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function Dashboard() {
  const [halls, setHalls] = useState([]); // State to store halls
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState([]);
  const [capacityRange, setCapacityRange] = useState([100, 500]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch halls from backend
    axios.get('http://localhost:8080/api/halls')
      .then(response => {
        setHalls(response.data);
      })
      .catch(error => {
        console.error('Error fetching halls:', error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleLogout = () => {
    navigate('/user-page');
  };

  const handleBlockChange = (block) => {
    setSelectedBlocks(prevSelectedBlocks =>
      prevSelectedBlocks.includes(block)
        ? prevSelectedBlocks.filter(item => item !== block)
        : [...prevSelectedBlocks, block]
    );
  };

  const handleCapacityChange = (capacity) => {
    setSelectedCapacity(prevSelectedCapacity =>
      prevSelectedCapacity.includes(capacity)
        ? prevSelectedCapacity.filter(item => item !== capacity)
        : [...prevSelectedCapacity, capacity]
    );
  };

  const handleRangeChange = (e) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setCapacityRange([min, max]);
  };

  const increaseCapacity = () => {
    setCapacityRange(prevRange => [
      Math.min(prevRange[0] + 50, 500),
      prevRange[1]
    ]);
  };

  const decreaseCapacity = () => {
    setCapacityRange(prevRange => [
      Math.max(prevRange[0] - 50, 100),
      prevRange[1]
    ]);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBlocks([]);
    setSelectedCapacity([]);
    setCapacityRange([100, 500]);
  };

  const getThumbPosition = (value) => {
    const min = 100;
    const max = 500;
    const percentage = ((value - min) / (max - min)) * 100;
    return `calc(${percentage}% + (${value}px))`;
  };

  const filteredHalls = halls.filter(hall =>
    (hall.hall.toLowerCase().includes(searchQuery.toLowerCase()) ||
     hall.block.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedBlocks.length === 0 || selectedBlocks.includes(hall.block)) &&
    (hall.capacity >= capacityRange[0] && hall.capacity <= capacityRange[1])
  );

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HallBooking Logo" />
          </Link>
        </div>
        <p style={{ margin: '0', fontSize: '16px', color: '#333' }}>HAPPY BOOKING</p>
        <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
      </nav>
      <Box className="dashboard-body">
        <Box className="filter-container">
          <Heading as="h3" size="md" className="filters-heading">
            Filters
          </Heading>
          <Box className="search-container">
            <Input
              placeholder="Search halls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </Box>
          <Box className="filter-section">
            <Heading as="h4" size="sm" className="filter-title">
              Block
            </Heading>
            <Box className="filter-block">
              <label>
                <Checkbox
                  isChecked={selectedBlocks.includes('Family')}
                  onChange={() => handleBlockChange('Family')}
                />
                Family
              </label>
              <label>
                <Checkbox
                  isChecked={selectedBlocks.includes('Board Meeting')}
                  onChange={() => handleBlockChange('Board Meeting')}
                />
                Board Meeting
              </label>
              <label>
                <Checkbox
                  isChecked={selectedBlocks.includes('Corporate Events')}
                  onChange={() => handleBlockChange('Corporate Events')}
                />
                Corporate Events
              </label>
              <label>
                <Checkbox
                  isChecked={selectedBlocks.includes('Seminar Hall')}
                  onChange={() => handleBlockChange('Seminar Hall')}
                />
                Seminar Halls
              </label>
              <label>
                <Checkbox
                  isChecked={selectedBlocks.includes('Party')}
                  onChange={() => handleBlockChange('Party')}
                />
                Party
              </label>
            </Box>
          </Box>
          <Box className="filter-section">
            <Heading as="h4" size="sm" className="filter-title">
              Capacity
            </Heading>
            <Box className="range-slider-container">
              <div className="range-slider-label">
                <span>{capacityRange[0]}</span>
                <span>{capacityRange[1]}</span>
              </div>
              <input
                type="range"
                min="100"
                max="500"
                step="50"
                value={`${capacityRange[0]},${capacityRange[1]}`}
                onChange={handleRangeChange}
                className="range-slider"
              />
              <div
                className="moving-circle"
                style={{ left: getThumbPosition(capacityRange[0]) }}
              />
              <div
                className="moving-circle"
                style={{ left: getThumbPosition(capacityRange[1]) }}
              />
            </Box>
            <Box className="capacity-controls">
              <Button onClick={decreaseCapacity} disabled={capacityRange[0] <= 100}>-</Button>
              <span>Capacity Range</span>
              <Button onClick={increaseCapacity} disabled={capacityRange[1] >= 500}>+</Button>
            </Box>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={clearFilters}
              className="clear-filters-button"
            >
              Clear Filters
            </Button>
          </Box>
        </Box>
        <Box className="container">
          <Box textAlign="center" mb="8">
            <Heading as="h1" size="xl" mb="4">
              Discover the Ideal Venue for Your Next Event
            </Heading>
            <Heading as="h2" size="lg" color="gray.500">
              Browse Our Exclusive Selection of Premium Halls
            </Heading>
          </Box>
          <Box className="grid">
            {filteredHalls.map((hall, index) => (
              <div className="grid-item" key={index}>
                <HallCard
                  imgsrc={hall.imgsrc}
                  block={hall.block}
                  hall={hall.hall}
                  capacity={hall.capacity}
                  address={hall.address}
                  price={hall.price}
                  rating={hall.rating}
                />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
