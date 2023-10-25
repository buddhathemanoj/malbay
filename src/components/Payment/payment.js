import {useParams} from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { BiTransferAlt } from "react-icons/bi";
import qrCode from "../../asset/WhatsApp Image 2023-10-25 at 10.58.26 AM.jpeg"
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
                    <h3 className="payment-location">Total : <span className="payment-destination">670</span></h3>
                    <button className="payment-pay-btn">Pay Now</button>
                </div>
                <img src={qrCode} alt="qr code" className="qr-code-image" width={300} />
            </div>
        </div>
    )
}

export default Payment