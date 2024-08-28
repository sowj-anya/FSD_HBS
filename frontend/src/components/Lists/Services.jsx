import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import card1 from '../Assets/card1.png'
import card2 from "../Assets/card2.png"
import card3 from '../Assets/card3.png'
import card4 from "../Assets/card4.png"
import PopUp from './PopupForm.jsx';
import { useState } from 'react';
import './Services.css';

import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div className='bcolor'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12} xl={12} lg={12} className='pt-3 mt-2 mb-3'>
                        <h1 className='text-center text-white text-bold mt-3 mb-5'>SERVICES</h1>
                    </Col>


                    <Col md={3} xs={12} lg={3} className='d-flex pb-4 pt-2 text-center ps-4' >
                        <Card className='card2'>
                            <Card.Img variant="top" src={card1} />
                            <Card.Body>
                                <Card.Title>Wedding Ceremoney</Card.Title>
                                <Card.Text>
                                    A wedding is once in a lifetime event, and we want yours to be one of the grandest & memorable.
                                </Card.Text>
                                {/* <Button variant="primary" onClick={() => setModalShow(true)}  >Enquire Now</Button> */}
                            </Card.Body>
                        </Card>
                        <PopUp show={modalShow} onHide={() => setModalShow(false)} />
                    </Col>


                    <Col md={3} xs={12} lg={3} className='d-flex  pb-4  pt-2  text-center' >
                        <Card className='card2'  >
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Title>Corporate Events</Card.Title>
                                <Card.Text>
                                    We serve your corporate guests with the best luxurious hospitality and graceful services.
                                </Card.Text>
                                {/* <Button variant="primary" onClick={() => setModalShow(true)}>Enquire Now</Button> */}
                            </Card.Body>
                        </Card>
                        <PopUp show={modalShow} onHide={() => setModalShow(false)} />
                    </Col>
                    <Col md={3} xs={12} lg={3} className='d-flex pb-4  pt-2  text-center' >
                        <Card className='card2' >
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Title>BirthDay Party</Card.Title>
                                <Card.Text>
                                    Our venue is ideal place for organizing all types of birthday parties for your loved ones.
                                </Card.Text>
                                {/* <Button variant="primary" onClick={() => setModalShow(true)}>Enquire Now</Button> */}
                            </Card.Body>
                        </Card>
                        <PopUp show={modalShow} onHide={()=>setModalShow(false)} />
                    </Col>
                    <Col md={3} xs={12} lg={3} className='d-flex  pb-4 pt-2  text-center' >
                        <Card className='card2'  >
                            <Card.Img variant="top" src={card4} />
                            <Card.Body >
                                <Card.Title>Social Events</Card.Title>
                                <Card.Text>
                                    Our place is a perfect venue for hosting all kinds of social events making a social event real fun.
                                </Card.Text>
                                {/* <Button variant="primary" onClick={() => setModalShow(true)}>Enquire Now</Button> */}
                            </Card.Body>
                        </Card>
                        <PopUp show={modalShow} onHide={()=>setModalShow(false)}  />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Services;
