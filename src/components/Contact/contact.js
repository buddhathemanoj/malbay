// Contact.js
import React ,{useState}from "react";
import Contactpic from '../../asset/contact_page_banner_img.jpg';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from "antd";
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        
        try {
            const response = await fetch('https://sg2mycab.onrender.com/api/contactform/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log('handleSubmit called');
            const result = await response.json();
            console.log('Server response:', result);
            
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
            <h1>Get in Touch with Malbay's Professional Car Service</h1>
            <h3>
                Malbay is unwavering in its commitment to delivering world-class, on-time global 
                chauffeured ground transportation services. Our chauffeur service is designed to surpass
                 your expectations, setting the benchmark for excellence and quality.
                </h3>

            </div>
            <div className="contact-details">
                <div className="contact-info">
                <h1>Your Requests, Our Mission</h1>
                    <h3>Reach Out to Malbay Express Car Services</h3><br/>
                    <h2><FontAwesomeIcon icon={faPhone} /><span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>+++123456789</span> </h2>
                    <h2> <FontAwesomeIcon icon={faEnvelope} /> <span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>info@email.com</span></h2>
                </div>
                <div className="book-car-service">
                <h3>Book your car service</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <textarea 
                            className="form-control" 
                            placeholder="Message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;
