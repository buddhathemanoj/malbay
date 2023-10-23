import React from 'react';
import { Collapse, Divider } from 'antd';

import "./pricing.css"
import Collapsible from '../Collapasible/collapsible';

const pricingArr = [
    "SENAI AIRPORT","KSL CITY MALL/TEBRAU JUSCO/BUKIT INDAH JUSCO","LEGOLAND JOHOR BAHRU","JOHOR PREMIUM OUTLETS (JPO)","SG - JB / SG - JB 1DAY TRIP","JOHOR BAHRU AREA","KUKUP","MALACCA","MERSING","DESARU","PORT DICKSON","KUALA LUMPUR","SEKINCHAN","GENTING HIGHLAND","KLUANG / BATU PAHAT/YONG PENG JOHOR","PULAU TIOMAN"
]
const pricingData = [
    { carName: "TOYOTA INNOVA", price: "SGD 100" },
    { carName: "TOYOTA ALPHARD", price: "SGD 130" },
    { carName: "HYUNDAI STAREX", price: "SGD 130" },
    // Add more cars and prices as needed
];
const Pricing = () => {

    return(
        <div className="pricing-bg-container">
            <div className="pricing-top-bg-container">
                <h1 className="pricing-heading"> UNBEATABLE AFFORDABILITY</h1>
                <h4 className="pricing-desc">We take pride in offering the most unbeatable rates for your journeys between Singapore and Malaysia, departing from your chosen locations at your preferred times.
                     Your cost-effective and convenient travel experience begins with us.</h4>
            </div>
            <ul className='pricing-list-container'>
            {pricingArr.map((eachArr) => <Collapsible eachArr={eachArr}/>)}
            </ul>
        </div>
    )
}

export default Pricing