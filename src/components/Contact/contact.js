// Contact.js
import React, { useState } from "react";
import Contactpic from '../../asset/contactbmg.jpg';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faL } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from "antd";
const Contact = () => {
    const [nameError, setNameError] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number:'',
        subject: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('https://sg2mycabserver.onrender.com/api/contactform/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log('handleSubmit called');
            const result = await response.json();
            console.log('Server response:', result);
            setFormData({
                name: '',
                email: '',
                number:"",
                subject: '',
                message: ''
            });
            setSubmissionStatus(result.success);
            setIsModalOpen(true);


        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleModalClose = () => {
        setIsModalOpen(false);  // Function to close the modal
    };
    const handleChange = (e) => {
        const { name, value } = e.target;


        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));


    };

    const errorMsg = nameError ? "*Required" : ""
    const nameSty = nameError ? "newSty" : ""


    return (
        <div className="contact-container">
            <Modal
                title="Submission Status"
                visible={isModalOpen}
                onCancel={handleModalClose}
                footer={[
                    <Button key="ok" type="primary" onClick={handleModalClose}>
                        OK
                    </Button>
                ]}
            >
                {submissionStatus === true ? 'Email has been sent successfully!' : 'Email sending failed. Please try again.'}
            </Modal>
            <div className="contact-header">
                <div className="background-image">
                    <img src={Contactpic} alt="Contact Background" />
                </div>
                <div className="overlay-text">
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className="contactparas">
                <h1>Get in Touch with Sg2Mycab's Professional Car Service</h1>
                <h3>
                    Sg2Mycab is steadfast in its commitment to delivering world-class global chauffeured ground transportation services that outshine other local tours. Our chauffeur service is a testament to our unwavering pursuit of excellence, ensuring punctuality, support, and a level of service that sets the highest industry standards.
                </h3>

            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h1>Your Requests, Our Mission</h1>
                    <h3>Reach Out to Sg2Mycab Express Car Services</h3><br />
                    <h2><FontAwesomeIcon icon={faPhone} /><span style={{ color: '#333333', fontSize: '20px', marginLeft: '10px' }}>+6582335292</span> </h2>
                    <h2> <FontAwesomeIcon icon={faEnvelope} /> <span style={{ color: '#333333', fontSize: '20px', marginLeft: '10px' }}>sg2mycab@email.com</span></h2>
                </div>
                <div className="book-car-service">
                    <h3>Book your car service</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <input
                                type="text"
                                className={`form-control ${nameSty}`}
                                placeholder="Name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {nameError ? <p>{errorMsg}</p> : ""}
                        </div>
                        <div className="mb-2">
                            <input
                                type="email"
                                required
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="number"
                                required
                                className="form-control"
                                placeholder="Number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <textarea
                                className="form-control"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-2">
                            <button type="submit" className="btn btn-primary  submit-btn">Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Contact;
