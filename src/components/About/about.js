import React from "react"
import  {RedirectFunction} from "react-router-dom"
import { Link ,useNavigate} from "react-router-dom"
import driverpic from '../driver.png'
import car1 from '../alphard-blue.png'
import car2 from '../alphard-white.png'
import city from "../city.jpeg"
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import "./about.css"

const About = () => {
    const navigate = useNavigate();
const handleKnowmore=()=>{
    navigate('/pricing');

    window.scrollTo(0, 0);
}
const handleServices=()=>{
    navigate('/services');

    window.scrollTo(0, 0);
}
    return(
        <div className="about-container">
            <div className="about-img-container">
               <h1 style={{color:"#fff",fontWeight:"bold",textShadow:"0 0 2px #000"}} className="about-us">About Us</h1>
            </div>
        <div className="transport-container">
            <div className='welcome-container'>
                <h1 className="welcome-heading">Discover Sg2Mycab: Your Trusted Partner in Seamless Travel</h1>
                <p className="welcome-desc">At Sg2Mycab Express, we're your premier choice for MVP Private Car service, redefining travel between Singapore and Malaysia.<span className="welcome-span">Our private transportation options cater to diverse needs and surpass local tour services, ensuring reliability, safety, and affordability. With dedicated drivers, we ensure the best travel experience.</span> 
                </p>
                <button type='button' onClick={handleKnowmore} className='know-more-bt'>KNOW MORE</button>
            </div>
            <img src={car2} alt="car" width={450} style={{marginBottom:"45px"}} className="about-car-img" />
        </div>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
        <img src={car1} alt="xc" className='half-image' width={300} height={180} style={{marginTop:"40px",borderRadius:"10px",marginRight:"50px",marginTop:"40px"}}/>
        </div>
        <div className='travel-container'>
            <div className='choose-container'>
            <h1 className='welcome-heading'>Why Opt for Our Travel Solutions</h1>
            <p className='travel-desc'>At Sg2Mycab Express, your safety and comfort take precedence in our commitment to providing the best private car transportation service for your family's Malaysia adventure. Our unwavering dedication extends to not only ensuring safety but also offering exceptional budget-friendly options that outshine other local tours. We understand that your family's happiness and peace of mind are paramount, and that's why our services are thoughtfully designed to deliver a seamless and secure journey, setting us apart as the superior choice for your Malaysia experience.</p>
                </div>
                <ul className='choose-list-container'>
                      <li className='choose-list-item-container'>
                        <MdHealthAndSafety className='safety-icon'/>
                         <h1 className='safety-heading'>Your Safety Is Our Top Concern</h1>
                         <p className='safety-desc'>At Sg2Mycab Express, We Lead with Safety. Our unwavering commitment to the strictest road safety standards ensures we provide the best service and support, setting us apart from other local tours.</p>
                      </li>
                      <li className='choose-list-item-container'>
                        <BsFillAlarmFill className='safety-icon'/>
                         <h1 className='safety-heading'>Punctuality Excellence</h1>
                         <p className='safety-desc'>At Sg2Mycab Express, we understand that your time is precious, and our unwavering commitment to punctuality is what sets us apart from other local tours.We prioritize punctuality to ensure we provide the best service and support</p>
                      </li>
                      <li className='choose-list-item-container'>
                        <FaTrophy className='safety-icon'/>
                         <h1 className='safety-heading'>Affordable Quality Services</h1>
                         <p className='safety-desc'>At Sg2Mycab Express, we firmly believe in offering unmatched support and service that surpasses other local tours. We are committed to making excellence accessible without the burden of high costs.</p>
                      </li>
                </ul>
                <div className='view-service-container'>
            <button type='button'onClick={handleServices} className='know-more-bt'>VIEW SERVICES</button>
                </div>
            </div>
        </div>
    )
}

export default About