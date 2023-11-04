import { FaUserAlt,FaMedal,FaCalendarCheck } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FaCarRear } from "react-icons/fa6";
import "./service.css"
import car from "../airporttransfer.jpg"
import car1 from "../../../src/asset/privateaviation.jpg"
import car2 from "../../../src/asset/hourlycharter.jpg"
import car3 from "../../../src/asset/discovertheextraordinary.jpg"
import { Link ,useNavigate} from "react-router-dom";


const Service = () => {
    const navigate = useNavigate();
    const handleLearnmore=()=>{
        navigate('/pricing');
    
        window.scrollTo(0, 0);
    }
    return(
        <div className="service-bg-container">
        <div className="luxury-car-container">
            <h1 className="luxury-heading">Premium Transportation Excellence</h1>
            <p className="luxury-desc">Discover Unrivaled Luxury, Revel in unmatched comfort, unwavering safety, <br/> and a touch of excellence in every journey.</p>
            <ul className="services-list-container">
                <li className="services-list-item">
                    <FaUserAlt className="services-icon"/>
                    <p className="services-desc">Top-Notch Chauffeurs</p>
                </li>
                <li className="services-list-item">
                    <FaCalendarCheck className="services-icon"/>
                    <p className="services-desc">Punctual Pick-Up Guarantee</p>
                </li>
                <li className="services-list-item">
                    <FaMedal className="services-icon"/>
                    <p className="services-desc">Honest Pricing: No Surprises</p>
                </li>
                <li className="services-list-item">
                    <AiFillCar className="services-icon"/>
                    <p className="services-desc">Modern Luxury Fleet</p>
                </li>
            </ul>
        </div>
        <div className="airport-bg-container">
            <div className="airport-transfer-container">
                  <h1>Airport Transfers Made Easy</h1>
                  <p>Discover Superior Service and Support with Sg2Mycab Express Transport Solutions. Our 24/7 operations team ensures a seamless experience for travelers of all types and group sizes. Choose Sg2Mycab for a stylish and secure journey to the airport, redefining your travel experience.
                    </p>
                <button className="btn btn-info learn-more-btn" onClick={handleLearnmore}>Learn more</button>
            </div>
            <img src={car} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
        </div>
        <div className="privat-bg-container">
            <img src={car1} alt="cars" style={{borderRadius:"10px"}} className="car-img"/>
            <div className="private-transfer-container">
                  <h1>Premium Ground Transportation for Private Aviation</h1>
                  <p>Choose Sg2Mycab Express for premium ground transportation that enhances your private aviation experience. With dedicated private aviation specialists, we ensure seamless access to private airports and FBOs, prioritizing your comfort and safety. Elevate your journey with our unmatched service and support, setting us apart for a worry-free and luxurious travel experience.</p>
                    <button className="btn btn-info learn-more-btn" onClick={handleLearnmore}>Learn more</button>
            </div>
        </div>
        <div className="airport-bg-container">
            <div className="airport-transfer-container">
                  <h1>Tailored Hourly Charters for Your Convenience</h1>
                  <p>Enjoy Unmatched Flexibility with Sg2Mycab's Hourly Services. Unlike local tours, our chauffeur-driven approach lets you customize your journey, whether it's a short outing or a longer adventure. Just share your pick-up details and tailor your stops along the way to suit your preferences. Your travel, your way – that's Sg2Mycab's commitment, providing top-tier service and support that stands out from local tours.</p>
                     <button className="btn btn-info learn-more-btn" onClick={handleLearnmore}>Learn more</button>
            </div>
            <img src={car2} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
        </div>

        <div className="extended-bg-container">
        <img src={car3} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
            <div className="private-transfer-container">
                  <h1>Discover the Extraordinary</h1>
                  <p>Discover Unrivaled Long-Distance Luxury with Sg2Mycab. Unlike local tours, our premium vehicles and dedicated chauffeurs provide a superior travel experience, whether for business or leisure. Each mile is a private sanctuary, offering unparalleled comfort and style. Choose Sg2Mycab for a travel experience that sets a new standard for luxury and service.</p>
                     <button className="btn btn-info learn-more-btn" onClick={handleLearnmore}>Learn more</button>
            </div>
          
        </div>
    </div>
    )
}

export default Service