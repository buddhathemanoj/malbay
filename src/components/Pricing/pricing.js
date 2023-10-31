import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Collapse } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import "./pricing.css"
import '../Collapasible/collapsible.css'

const Pricing = () => {
    const [pricingArr, setPricingArr] = useState([]);
    const [isLoader, setLoader] = useState(true)
    const [openCollapsible, setOpenCollapsible] = useState(null); // State to track open collapsible item
    const navigate = useNavigate();

    const toggleCollapsible = (index) => {
        // Toggle the clicked collapsible item
        if (openCollapsible === index) {
            setOpenCollapsible(null); // Close the currently open collapsible
        } else {
            setOpenCollapsible(index); // Open the clicked collapsible
        }
    };

    // const {_id} = pricingArr
    // const handleBookNowClick = () => {
    //     navigate(`/booking/${_id}`);
    //     window.scrollTo(0, 0);
    // };

    useEffect(() => {
        axios
            .get('https://sg2mycabsing.onrender.com/api/packages/getallpackages')
            .then((response) => {
                setPricingArr(response.data);
                setLoader(!isLoader)
            })
            .catch((error) => {
                console.error('Error fetching pricingArr:', error);
            });
    }, []);

    return (
        <div className="pricing-bg-container">
            <div className="pricing-top-bg-container">
                <h1 className="pricing-heading">UNBEATABLE AFFORDABILITY</h1>
                <h4 className="pricing-desc">
                We are committed to providing you with the most competitive rates
                 for your trips between Singapore and Malaysia, departing at your convenience
                  from your selected locations. Your journey, cost-effective and convenient, commences with us.
                </h4>
            </div>
            {isLoader ? <div className='loader-container'>
                <BallTriangle type="ThreeDots" color="#C70039" height={50} width={50} />
            </div> : <ul className="pricing-list-container">
                {pricingArr.map((pricingData, index) => (
                    <li key={pricingData._id} className="collapse-list-item">
                        <div className='collapsible-button-container'>
                            <button className="collapsible-button" onClick={() => toggleCollapsible(index)}>
                                {pricingData.location}
                            </button>
                        </div>
                        {openCollapsible === index && (
                            <div className="content">
                                <div className="flex-container">
                                    <ul className='carlists'>
                                        {pricingData.cars.map((carData, carIndex) => (
                                            <li key={carIndex}>
                                                {carData.carName} : {carData.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ textAlign: 'center' }}>
                                        <Link to={`/booking/${pricingData._id}`} className='pricing-link-btn'>
                                            <div class="box-1">
                                                <div class="btn btn-one">
                                                    <span>Book Now</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                </div>
                               
                            </div>
                        )}
                    </li>
                ))}
            </ul>}
        </div>
    );
};

export default Pricing;
