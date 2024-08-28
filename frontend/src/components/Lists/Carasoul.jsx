// import React from 'react';
// import './Home.css';

// const Home = () => {
//     return (
//         <div className="home-container">
//             <h1>Welcome to the Hall Booking System</h1>
//             <p>
//                 Book the perfect venue for your events with ease and convenience. Explore our
//                 wide range of halls and make your reservations in just a few clicks.
//             </p>
//         </div>
//     );
// }

// export default Home;


import React from 'react'
// import '../../App.css';
import './Carasoul.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import back from '../Assets/back.png';
import back2 from '../Assets/back2.png';
import back3 from '../Assets/back3.webp';

export const Carasoul = () => {
    return (
        <div className='bgcolor'>
        <div className='d-flex justify-content-center align-items-center hero'>
            <div className='carasoulText '>
                <h1 style={{ fontSize: '100px' ,whiteSpace: 'nowrap'}}>EventSpot  Hall Booking</h1>
                <br></br>
                <div className='para'>
                    <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '900px',margin: '0 auto'}}>
                        Book the perfect venue for your events with ease and convenience. Explore our
                        wide range of halls and make your reservations in just a few clicks.
                    </p>
                </div>    
            </div>
            <div className="p-0 carasoulBody " style={{ overflowX: "hidden" }}  >
                <Row className='var' >    
                    <Col xs={12} md={12} className='carasoul'>
                        <Carousel fade >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back2}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back3}
                                    alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
    )
}
export default Carasoul;
