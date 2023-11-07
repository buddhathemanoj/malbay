import {json, useParams} from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { BiTransferAlt } from "react-icons/bi";
import qrCode from "../../asset/WhatsApp_Image_2023-10-25_at_10.58.26_AM-removebg-preview.png"
import "./payment.css"
import paynow from '../../asset/paynow2.jpg'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUser, FaChild } from 'react-icons/fa';
import axios from "axios";
import { Modal, Button } from "antd";

const Payment = () => {
  const location = useLocation();
  const { id, formData, selectedCarPrice } = location.state;


const [isModalOpen, setIsModalOpen] = useState(false);
const [submissionStatus, setSubmissionStatus] = useState(null);

const match = selectedCarPrice && selectedCarPrice.match(/\d+/);
const numericPrice = match ? parseInt(match[0], 10) : 0;

const [gst, setGst] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  if (numericPrice) {
    const gstAmount = numericPrice * 0.18;  // Assuming GST rate is 18%
    const totalPriceAmount = numericPrice + gstAmount;

    setGst(gstAmount);
    setTotalPrice(totalPriceAmount);
  }
}, [numericPrice]);

const clickToCancel = () => {
  window.history.back()
}

const handleModalClose = () => {
  setIsModalOpen(false)
}

const clickToConfirm = async () => {
  try {
  
    const response = await fetch('https://sg2mycabserver.onrender.com/api/contactform/booking/form', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  });
    const result = await response.json();
    setSubmissionStatus(result.success);
    setIsModalOpen(true);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


    return (
      <div>
          <div  className="payment-bg-container">
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
                {submissionStatus === true ? 'Successfully! Booked , happy riding' : 'Email sending failed. Please try again.'}
            </Modal>
            <div className="detail-image-container">
                <div className="payment-card-container">
                    <div style={{display:'flex',justifyContent:'space-between',fontWeight:'bold'}} className="payment-destination"><p>{formData.pickupLocation}</p> <p><BiTransferAlt style={{ marginLeft:"20px", color:"009900",fontSize:"20"}}/></p><p> {formData.dropLocation}</p></div>
                    <h6 className="payment-location">Car Name  <span className="payment-destination">{formData.car}</span></h6>
                    <h6 className="payment-location"> Adults   <span className="payment-destination">{formData.numberOfAdults}</span></h6>
                    <h6 className="payment-location"> Children   <span className="payment-destination">{formData.numberOfChildren}</span></h6>
                    <hr/>
                    <h6 className="payment-location">Price  <span className="payment-destination"><b>S${numericPrice}</b></span></h6>
                    <h6 className="payment-location">GST  <span className="payment-destination"><b>S${gst}</b></span></h6>
                    <hr/>
                    <h6 className="payment-location">Amount  <span className="payment-destination"><b>S${totalPrice}</b></span></h6>
                     <button className="confirm-booking-btn" type="button" onClick={clickToConfirm}>Confirm Booking</button>
                    <button type="button" className="cancel-payment-btn" onClick={clickToCancel}>Cancel Payment</button>
                </div>
                {/* <div className="payment-image-container">

                    <p className="invoice-desc">Scan QR code with your<br/> <img style={{width:"18%"}} src={paynow} alt="PayNow"></img> <br/>to proceed with payment</p>
                <img src={qrCode} alt="qr code" className="qr-code-image" width={200} />
                <button className="payment-pay-btn">Pay Now</button>
                </div> */}
            </div>
        </div>
      </div>
      
    )
}

export default Payment