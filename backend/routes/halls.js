
// const express = require('express');
// const router = express.Router();

// // Sample data
// const halls = [
//   {
//     id: 1,
//     imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg",
//     block: "Family",
//     hall: "Wedding Ceremony Hall",
//     capacity: 500,
//     address: "123 Wedding Ave, Cityville",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4
//   },
//   {
//     id: 2,
//     imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//     block: "Party",
//     hall: "Birthday Party Hall",
//     capacity: 200,
//     address: "45 Party St, FunTown",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.2
//   },
//   {
//     id: 3,
//     imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//     block: "Corporate Events",
//     hall: "Corporate Events Hall",
//     capacity: 100,
//     address: "89 Biz Blvd, Corporate City",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.7
//   },
//   {
//     id:4,
//     imgsrc: "https://5.imimg.com/data5/MH/AU/LZ/SELLER-9457619/complete-interior-technical-services-for-auditoriums-cinemas-schools-500x500.jpg",
//     block: "Seminar Hall",
//     hall: "ESB BIG SEMINAR HALL",
//     capacity: 100,
//     address: "12 Seminar Ln, Knowledge Hub",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.3
//   },
//   {
//     id:5,
//     imgsrc: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&w=1000&q=80",
//     block: "Seminar Hall",
//     hall: "ESB SEMINAR HALL 2",
//     capacity: 300,
//     address: "34 Lecture St, Education City",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.4
//   },
//   {
//     id:6,
//     imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3fK8XNplfliA1VexyVIbR_4__fFfr10K7eElaE7cJ6r6eVvNyQrzbjzwtyih5mhjHj8&usqp=CAU",
//     block: "Seminar Hall",
//     hall: "HIGHTECH SEMINAR HALL",
//     capacity: 400,
//     address: "56 Tech Blvd, Innovation Park",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.6
//   },
//   {
//     id:7,
//     imgsrc: "https://images.unsplash.com/photo-1588865198282-f1d9675e640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//     block: "Seminar Hall",
//     hall: "LHC SEMINAR HALL - 1",
//     capacity: 350,
//     address: "78 Lecture Dr, University Town",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.4
//   },
//   {
//     id:8,
//     imgsrc: "https://www.ramaiah-india.org/wp-content/uploads/2017/05/Ramaiah-gallery-19.jpg",
//     block: "Seminar Hall",
//     hall: "LHC SEMINAR HALL",
//     capacity: 350,
//     address: "90 Education Rd, College City",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.3
//   },
//   {
//     id:9,
//     imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//     block: "Board Meeting",
//     hall: "BOARD MEETING ROOM",
//     capacity: 100,
//     address: "23 Meeting St, Business Park",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.8
//   },
//   {
//     id:10,
//     imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//     block: "Party",
//     hall: "Farewell",
//     capacity: 100,
//     address: "45 Party St, FunTown",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.2
//   },
//   {
//     id:11,
//     imgsrc: "https://image.wedmegood.com/resized/450X/uploads/member/693397/1567247859_Screenshot_6.jpg",
//     block: "Family",
//     hall: "Marriage Hall",
//     capacity: 300,
//     address: "678 Celebration Rd, Wedding City",
//     price: 10000,
//     hour: "1 hr",
//     rating: 4.6
//   },
//   // Add more hall objects as needed
// ];

// // Define route to get all halls
// router.get('/', (req, res) => {
//   res.json(halls);
// });

// module.exports = router;
