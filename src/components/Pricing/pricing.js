import React from 'react';
import { Collapse, Divider } from 'antd';

import "./pricing.css"
import Collapsible from '../Collapasible/collapsible';

const pricingArr = [
    "SENAI AIRPORT","KSL CITY MALL/TEBRAU JUSCO/BUKIT INDAH JUSCO","LEGOLAND JOHOR BAHRU","JOHOR PREMIUM OUTLETS (JPO)","SG - JB / SG - JB 1DAY TRIP"
]
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