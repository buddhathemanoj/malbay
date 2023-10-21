import React from 'react';
import './Float.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon from solid icons
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon from brand icons

const FloatButtons = () => {
  const phoneNumber = '6369487527'; // Replace with your phone number
  const whatsappNumber = '6369487527'; // Replace with your WhatsApp number

  return (
    <div className="float-buttons">
      <a href={`tel:${phoneNumber}`} className="contact-button">
        <FontAwesomeIcon icon={faPhone} /> 
      </a>
      <a href={`https://wa.me/${whatsappNumber}`} className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} /> 
      </a>
    </div>
  );
};

export default FloatButtons;
