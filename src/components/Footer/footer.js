import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faIdCard, faHandshake, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 para footer-first-container" >
                        <h3 className='logoname'><Link to='/'>Malbay Express</Link></h3>
                        <p>At Malbay Express, we provide reliable, safe, and budget-friendly MVP Private Car services for travelers heading from Singapore to Johor Bahru, Legoland Malaysia, and numerous other destinations across Malaysia. Your trusted partner for seamless and cost-effective journeys.</p>  
                    </div>
                    <div className="col-12 col-md-4 mb-3 home-about-footer-container">
                        <ul className="list-unstyled">
                            <li  style={{marginBottom:"6px"}} className='linksfooter'><Link to="/">HOME</Link></li>
                            <li  style={{marginBottom:"6px"}}><Link to="/about">ABOUT</Link></li>
                            <li  style={{marginBottom:"6px"}}><Link to="/services">SERVICES</Link></li>
                            <li style={{marginBottom:"6px"}}><Link to="/locations">LOCATIONS</Link></li>
                            <li style={{marginBottom:"6px"}}><Link to="/fleets">FLEETS</Link></li>
                            <li style={{marginBottom:"6px"}}><Link to="/pricing">PRICING</Link></li>
                            <li style={{marginBottom:"6px"}}><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mb-3 contact-footer-container">
                        <p><FontAwesomeIcon icon={faPhone} className="me-2" />+(91)6369487527</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />316C Anchorvale Link 05 - 209 <br/>Anchorvale Gardens<br/>Singapore<br/>543316</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="me-2" />flynewtours@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footerCopy bg-dark text-light py-2">
                <div className="text-center">
                    <p>Copyrights&copy; 2023. Developed by Digisailor</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
