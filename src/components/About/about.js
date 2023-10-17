// import React from "react"
// import  {RedirectFunction} from "react-router-dom"
// import driverpic from '../driver.png'
// import car1 from '../alphard-blue.png'
// import car2 from '../alphard-white.png'
// import city from "../city.jpeg"
// import { MdHealthAndSafety } from "react-icons/md";
// import { BsFillAlarmFill } from "react-icons/bs";
// import { FaTrophy } from "react-icons/fa";
// import "./about.css"

// const About = () => {
    
//     return(
//         <div className="about-container">
//             <div className="transport-container">
//                 <div className='welcome-container'>
//                     <h1 className="welcome-heading">Welcome to Sincere Transport Services</h1>
//                     <p className="welcome-desc">Sincere Transport Services offers a dependable, secure, and budget-friendly MVP Private Car service,
//                         catering to travel between Singapore and Johor Bahru, Legoland Malaysia, as well as various other destinations in Malaysia. Our range of private transport options is designed to meet the unique needs of every traveler, providing private transfers and hire-with-driver services for individuals, families, groups,
//                         and both leisure and business travelers. All our transport services include a dedicated driver, ensuring a seamless and enjoyable journey.
//                     </p>
//                     <button type='button' className='know-more-bt'>KNOW MORE</button>
//                 </div>
//                 <img src={car2} alt="car" width={450} style={{marginBottom:"45px"}} />
//             </div>
//             <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
//             <img src={car1} alt="xc" className='half-image' width={300} height={180} style={{marginTop:"40px",borderRadius:"10px",marginRight:"50px",marginTop:"40px"}}/>
//             </div>
//             <div className='travel-container'>
//                 <div className='choose-container'>
//                 <h1 className='welcome-heading'>WHY CHOOSE OUR TRAVEL SERVICES</h1>
//                 <p className='travel-desc'>At Sincere Transport Services, we prioritize your safety and comfort. Our commitment extends to providing private car transportation at exceptionally affordable rates,
//                      ensuring that every family's visit to Legoland Malaysia is both accessible and enjoyable.</p>
//                     </div>
//                     <ul className='choose-list-container'>
//                           <li className='choose-list-item-container'>
//                             <MdHealthAndSafety className='safety-icon'/>
//                              <h1 className='safety-heading'>Your Safety is Our Priority</h1>
//                              <p className='safety-desc'>At Sincere Transport Services, safety is paramount. We adhere to the highest road safety standards to ensure the well-being and security of all passengers throughout their journey.</p>
//                           </li>
//                           <li className='choose-list-item-container'>
//                             <BsFillAlarmFill className='safety-icon'/>
//                              <h1 className='safety-heading'>Punctuality Matters</h1>
//                              <p className='safety-desc'>At Sincere Transport Services, we prioritize punctuality to guarantee exceptional private car services that enhance the quality of your extraordinary journey.</p>
//                           </li>
//                           <li className='choose-list-item-container'>
//                             <FaTrophy className='safety-icon'/>
//                              <h1 className='safety-heading'>Quality Service, Fair Prices</h1>
//                              <p className='safety-desc'>At Sincere Transport Services, excellence doesn't come at a premium. Enjoy top-tier private car services at prices that make sense, reflecting our dedication to value and quality.</p>
//                           </li>
//                     </ul>
//                     <div className='view-service-container'>
//                     <button type='button' className='know-more-bt'>VIEW SERVICE</button>
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default About

import React from "react"
import  {RedirectFunction} from "react-router-dom"
import driverpic from '../driver.png'
import car1 from '../alphard-blue.png'
import car2 from '../alphard-white.png'
import city from "../city.jpeg"
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import "./about.css"

const About = () => {
    return (
        <div className="about-container container-fluid mt-5">
            <div className="transport-container row">
                <div className='welcome-container col-12 col-md-6'>
                    <h1 className="welcome-heading">Welcome to Sincere Transport Services</h1>
                    <p className="welcome-desc">Sincere Transport Services offers a dependable, secure, and budget-friendly MVP Private Car service,
                        catering to travel between Singapore and Johor Bahru, Legoland Malaysia, as well as various other destinations in Malaysia. Our range of private transport options is designed to meet the unique needs of every traveler, providing private transfers and hire-with-driver services for individuals, families, groups,
                        and both leisure and business travelers. All our transport services include a dedicated driver, ensuring a seamless and enjoyable journey.
                    </p>
                    <button type='button' className='know-more-bt btn btn-primary'>KNOW MORE</button>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={car2} alt="car" className="img-fluid carrr mb-4" />
                </div>
            </div>

            {/* <div className="row justify-content-end">
                <img src={car1} alt="xc" className='img-fluid col-6 carrrrr2 col-md-3 mb-4 rounded' />
            </div> */}

            <div className='travel-container container-fluid  py-4'>
                <div className='choose-container text-center mb-4'>
                    <h1 className='welcome-heading'>WHY CHOOSE OUR TRAVEL SERVICES</h1>
                    <p className='travel-desc'>At Sincere Transport Services, we prioritize your safety and comfort. Our commitment extends to providing private car transportation at exceptionally affordable rates,
                     ensuring that every family's visit to Legoland Malaysia is both accessible and enjoyable.</p>
                </div>
<div className="listwrapper">


                <ul className='choose-list-container row'>
                    <li className='choose-list-item-container col-12 col-md-3 text-center mb-4'>
                        <MdHealthAndSafety className='safety-icon'/>
                        <h1 className='safety-heading'>Your Safety is Our Priority</h1>
                        <p className='safety-desc'>At Sincere Transport Services, safety is paramount. We adhere to the highest road safety standards to ensure the well-being and security of all passengers throughout their journey.</p>
                    </li>
                    <li className='choose-list-item-container col-12 col-md-3 text-center mb-4'>
                        <BsFillAlarmFill className='safety-icon'/>
                        <h1 className='safety-heading'>Punctuality Matters</h1>
                        <p className='safety-desc'>At Sincere Transport Services, we prioritize punctuality to guarantee exceptional private car services that enhance the quality of your extraordinary journey.</p>
                    </li>
                    <li className='choose-list-item-container col-12 col-md-3 text-center mb-4'>
                        <FaTrophy className='safety-icon'/>
                        <h1 className='safety-heading'>Quality Service, Fair Prices</h1>
                        <p className='safety-desc'>At Sincere Transport Services, excellence doesn't come at a premium. Enjoy top-tier private car services at prices that make sense, reflecting our dedication to value and quality.</p>
                    </li>
                </ul>
</div>
                <div className='view-service-container text-center mt-4'>
                    <button type='button' className='know-more-bt btn btn-primary'>VIEW SERVICE</button>
                </div>
            </div>
        </div>
    );
};

export default About;
