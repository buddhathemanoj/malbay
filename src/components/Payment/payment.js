import {useParams} from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { BiTransferAlt } from "react-icons/bi";
import qrCode from "../../asset/WhatsApp_Image_2023-10-25_at_10.58.26_AM-removebg-preview.png"
import "./payment.css"

const Payment = () => {
    

    return (
        <div className="payment-bg-container">
            <div className="detail-image-container">
                <div className="payment-card-container">
                    <h3 className="payment-location">Location : <span className="payment-destination">Chennai <BiTransferAlt style={{color:"green"}}/> Kerela</span></h3>
                    <h3 className="payment-location">Car Name : <span className="payment-destination">SUV</span></h3>
                    <h3 className="payment-location">No of Adults : <span className="payment-destination">5</span></h3>
                    <h3 className="payment-location">No of Children : <span className="payment-destination">4</span></h3>
                    <hr/>
                    <h3 className="payment-location">Price : <span className="payment-destination">600</span></h3>
                    <h3 className="payment-location">GST : <span className="payment-destination">70</span></h3>
                    <hr/>
                    <h3 className="payment-location">Amount : <span className="payment-destination">670</span></h3>

                    <button className="cancel-payment-btn">Cancel Payment</button>
                </div>
                <div className="payment-image-container">
                    <h2 className="invoice-heading">Pay Invoice</h2>
                    <p className="invoice-desc">Scan QR code with your DagWallet to proceed with payment</p>
                <img src={qrCode} alt="qr code" className="qr-code-image" width={200} />
                <button className="payment-pay-btn">Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment