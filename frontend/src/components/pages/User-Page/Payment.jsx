
// recent crt code as yesterday

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment.css';
import logo from '../../Assets/logo1.png'; 
import { Link } from 'react-router-dom';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hall, date, startTime, endTime, price, userId } = location.state || {};
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardholderName: '',
    expDate: '',
    cvv: '',
  });

  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentStatusType, setPaymentStatusType] = useState('');

  const isFieldEmpty = (value) => !value.trim();
  const isCardNumberValid = (number) => /^[0-9]{16}$/.test(number.replace(/\s/g, ''));
  const isExpDateValid = (date) => /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(date);
  const isCvvValid = (cvv) => /^[0-9]{3}$/.test(cvv);

  const handlePayment = async () => {
    if (isFieldEmpty(paymentInfo.cardholderName)) {
      setPaymentStatus('Cardholder name is required.');
      setPaymentStatusType('error');
      return;
    }
    if (!isCardNumberValid(paymentInfo.cardNumber)) {
      setPaymentStatus('Invalid card number. It must contain exactly 16 digits.');
      setPaymentStatusType('error');
      return;
    }
    if (!isExpDateValid(paymentInfo.expDate)) {
      setPaymentStatus('Invalid expiration date. Use MM/YY format.');
      setPaymentStatusType('error');
      return;
    }
    if (!isCvvValid(paymentInfo.cvv)) {
      setPaymentStatus('Invalid CVV. It must be 3 digits.');
      setPaymentStatusType('error');
      return;
    }
    if (Object.values(paymentInfo).some(isFieldEmpty)) {
      setPaymentStatus('Please fill out all payment fields.');
      setPaymentStatusType('error');
      return;
    }

    console.log('hall:', hall);
    console.log('date:', date);
    console.log('startTime:', startTime);
    console.log('endTime:', endTime);
    console.log('price:', price);
    console.log('userId:', userId);

    const bookingData = {
      hall: hall || 'Default Hall',
      date: date || '2024-08-10',
      startTime: startTime || '10:00',
      endTime: endTime || '14:00',
      price: price || 10000.0,
      status: 'PAID',
      user: { id: userId || 1}
    };
     
    
    try {
      // const bookingData = {
      //   hall,
      //   date,
      //   startTime,
      //   endTime,
      //   price,
      //   status: 'PAID',
      //   user: { id: userId }
      // };

      // const response = await axios.post('/api/bookings', bookingData);
      const response = await axios.post('http://localhost:8080/api/bookings', bookingData);
      if (response.status === 200) {
        setPaymentStatus('Payment successful! A receipt has been sent to your email.');
        setPaymentStatusType('success');
        // Navigate to another page if needed
        // navigate('/thankyou');
        // navigate('/hallbooking', { state: { booking: bookingData } });
      } else {
        setPaymentStatus('Payment failed. Please try again.');
        setPaymentStatusType('error');
      }
    } catch (error) {
      setPaymentStatus('Payment failed. Please try again.');
      setPaymentStatusType('error');
    }
  };

  const handleCancel = () => {
    navigate('/halllist');
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
    </div><div className="payment-container">
        <div className="payment-details">
          <h3>Booking Information</h3>
          <div className="booking-info">
            <p><strong>Hall:</strong> {hall}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {startTime} - {endTime}</p>
            <p><strong>Price: </strong> Rs.10000
            {/* {price} */}
            </p>
          </div>
        </div>

        <div className="payment-form">
          <h3>Payment Information</h3>
          <label>
            Cardholder Name:
            <input
              type="text"
              value={paymentInfo.cardholderName}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardholderName: e.target.value })}
              placeholder="John Doe"
              className={isFieldEmpty(paymentInfo.cardholderName) ? 'invalid' : ''} />
          </label>
          <label>
            Card Number:
            <input
              type="text"
              value={paymentInfo.cardNumber}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
              placeholder="1234 5678 9012 3456"
              className={isFieldEmpty(paymentInfo.cardNumber) ? 'invalid' : ''} />
          </label>
          <label>
            Expiration Date (MM/YY):
            <input
              type="text"
              value={paymentInfo.expDate}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, expDate: e.target.value })}
              placeholder="MM/YY"
              className={isFieldEmpty(paymentInfo.expDate) ? 'invalid' : ''} />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={paymentInfo.cvv}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
              placeholder="123"
              className={isFieldEmpty(paymentInfo.cvv) ? 'invalid' : ''} />
          </label>

          <div className="button-container">
            <button className="pay-button" onClick={handlePayment}>Pay Now</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>

          {paymentStatus && <p className={`payment-status ${paymentStatusType}`}>{paymentStatus}</p>}
        </div>
      </div></>
  );
}

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Payment.css';
// import logo from '../../Assets/logo1.png'; 
// import { Link } from 'react-router-dom';


// export default function Payment() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { hall, date, startTime, endTime, price } = location.state || {};

//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     cardholderName: '',
//     expDate: '',
//     cvv: '',
//   });

//   const [paymentStatus, setPaymentStatus] = useState('');
//   const [paymentStatusType, setPaymentStatusType] = useState('');

//   const isFieldEmpty = (value) => !value.trim();
//   const isCardNumberValid = (number) => /^[0-9]{16}$/.test(number.replace(/\s/g, ''));
//   const isExpDateValid = (date) => /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(date);
//   const isCvvValid = (cvv) => /^[0-9]{3}$/.test(cvv);

//   const handlePayment = () => {
//     if (isFieldEmpty(paymentInfo.cardholderName)) {
//       setPaymentStatus('Cardholder name is required.');
//       setPaymentStatusType('error');
//       return;
//     }
//     if (!isCardNumberValid(paymentInfo.cardNumber)) {
//       setPaymentStatus('Invalid card number. It must contain exactly 16 digits.');
//       setPaymentStatusType('error');
//       return;
//     }
//     if (!isExpDateValid(paymentInfo.expDate)) {
//       setPaymentStatus('Invalid expiration date. Use MM/YY format.');
//       setPaymentStatusType('error');
//       return;
//     }
//     if (!isCvvValid(paymentInfo.cvv)) {
//       setPaymentStatus('Invalid CVV. It must be 3 digits.');
//       setPaymentStatusType('error');
//       return;
//     }
//     if (Object.values(paymentInfo).some(isFieldEmpty)) {
//       setPaymentStatus('Please fill out all payment fields.');
//       setPaymentStatusType('error');
//       return;
//     }

//     // Simulate payment processing
//     setTimeout(() => {
//       setPaymentStatus('Payment successful! A receipt has been sent to your email.');
//       setPaymentStatusType('success');
//       // Navigate to another page if needed
//       // navigate('/thankyou');
//     }, 2000);
//   };

//   const handleCancel = () => {
//     navigate('/halllist');
//   };

//   const handleLogout = () => {
//     navigate('/user-page');
//   };

//   return (
//     <><div>
//       <nav>
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="HallBooking Logo" />
//           </Link>
//         </div>
//         <button className="nav-btn" variant="outline-light" onClick={handleLogout}>Back</button>
//       </nav>
//     </div><div className="payment-container">
//         <div className="payment-details">
//           <h3>Booking Information</h3>
//           <div className="booking-info">
//             <p><strong>Hall:</strong> {hall}</p>
//             <p><strong>Date:</strong> {date}</p>
//             <p><strong>Time:</strong> {startTime} - {endTime}</p>
//             <p><strong>Price:</strong> ${price}</p>
//           </div>
//         </div>

//         <div className="payment-form">
//           <h3>Payment Information</h3>
//           <label>
//             Cardholder Name:
//             <input
//               type="text"
//               value={paymentInfo.cardholderName}
//               onChange={(e) => setPaymentInfo({ ...paymentInfo, cardholderName: e.target.value })}
//               placeholder="John Doe"
//               className={isFieldEmpty(paymentInfo.cardholderName) ? 'invalid' : ''} />
//           </label>
//           <label>
//             Card Number:
//             <input
//               type="text"
//               value={paymentInfo.cardNumber}
//               onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
//               placeholder="1234 5678 9012 3456"
//               className={isFieldEmpty(paymentInfo.cardNumber) ? 'invalid' : ''} />
//           </label>
//           <label>
//             Expiration Date (MM/YY):
//             <input
//               type="text"
//               value={paymentInfo.expDate}
//               onChange={(e) => setPaymentInfo({ ...paymentInfo, expDate: e.target.value })}
//               placeholder="MM/YY"
//               className={isFieldEmpty(paymentInfo.expDate) ? 'invalid' : ''} />
//           </label>
//           <label>
//             CVV:
//             <input
//               type="text"
//               value={paymentInfo.cvv}
//               onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
//               placeholder="123"
//               className={isFieldEmpty(paymentInfo.cvv) ? 'invalid' : ''} />
//           </label>

//           <div className="button-container">
//             <button className="pay-button" onClick={handlePayment}>Pay Now</button>
//             <button className="cancel-button" onClick={handleCancel}>Cancel</button>
//           </div>

//           {paymentStatus && <p className={`payment-status ${paymentStatusType}`}>{paymentStatus}</p>}
//         </div>
//       </div></>
//   );
// }
