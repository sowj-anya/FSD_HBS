// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import logo1 from '../Assets/logo1.png'
// import { FaFacebook ,FaInstagram,FaTwitter,FaGoogle} from 'react-icons/fa'

// // import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
// import { Link } from "react-router-dom";



// const Footer = () => {
//     return (
      

//         <Container fluid className="bg-white py-4">
//             <Row className="d-md-flex d-none ">
//                 <Col md={2} className="ps-5 ">
//                     <img src={logo1} height="70" alt='Logo'/>
//                 </Col>
//                 <Col>
//                <div> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
//                 </Col>
//                 <Col className="d-flex flex-column">
//                     <Link to="/" >EventSpot</Link>
//                     <Link to="/Contatct" >Contatct-Us</Link>
//                     <Link to="/About" >About-Us</Link>
//                     <Link to="/admin/Login" >Login</Link>
//                 </Col>
//                 <Col className="">
//                    <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
//                    <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
//                    <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
//                    <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
//                 </Col>
//             </Row>

//             <Row className="d-md-none d-block justify-content-center">
//                 <Col sm={12} md={2} className="ps-5 justify-content-center">
//                     <img src={logo1} height="70" alt='Logo'/>
//                 </Col>
//                 <Col sm={12}>
//                <div className="justify-content-center"> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
//                 </Col>
//                 <Col sm={12} className="d-flex flex-column justify-content-center">
//                     <Link to="/" >EventSpot</Link>
//                     <Link to="/Contatct" >Contatct-Us</Link>
//                     <Link to="/About" >About-Us</Link>
//                     <Link to="/admin/Login" >Login</Link>
//                 </Col>
//                 <Col sm={12} className="">
//                    <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
//                    <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
//                    <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
//                    <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
//                 </Col>
//             </Row>


//         </Container>



//     );
// };

// export default Footer;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from '../Assets/logo1.png';
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <Container fluid className="footer-container">
            <Row className="d-md-flex d-none align-items-center">
                <Col md={2} className="footer-logo">
                    <img src={logo1} alt="Logo" />
                </Col>
                <Col className="footer-description">
                    We have Air Conditioned Banquet Halls with modern interior decorations, 
                    elegant lighting, a spacious dance floor, and fully carpeted to match five-star atmosphere.
                </Col>
                <Col className="footer-links d-flex flex-column">
                    <Link to="/">EventSpot</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/login-register">Login</Link>
                </Col>
                <Col className="footer-social-icons d-flex">
                    <Link to="https://www.facebook.com"><FaFacebook size={30} /></Link>
                    <Link to="https://www.instagram.com"><FaInstagram size={30} /></Link>
                    <Link to="https://www.twitter.com"><FaTwitter size={30} /></Link>
                    <Link to="https://mail.google.com"><FaGoogle size={30} /></Link>
                </Col>
            </Row>

            <Row className="d-md-none d-block justify-content-center align-items-center text-center">
                <Col sm={12} className="footer-logo mb-3">
                    <img src={logo1} alt="Logo" />
                </Col>
                <Col sm={12} className="footer-description mb-3">
                    We have Air Conditioned Banquet Halls with modern interior decorations, 
                    elegant lighting, a spacious dance floor, and fully carpeted to match five-star atmosphere.
                </Col>
                <Col sm={12} className="footer-links d-flex flex-column mb-3">
                    <Link to="/">EventSpot</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/login-register">Login</Link>
                </Col>
                <Col sm={12} className="footer-social-icons d-flex justify-content-center">
                    <Link to="https://www.facebook.com" className="ms-3"><FaFacebook size={30} /></Link>
                    <Link to="https://www.instagram.com" className="ms-3"><FaInstagram size={30} /></Link>
                    <Link to="https://www.twitter.com" className="ms-3"><FaTwitter size={30} /></Link>
                    <Link to="https://mail.google.com" className="ms-3"><FaGoogle size={30} /></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
