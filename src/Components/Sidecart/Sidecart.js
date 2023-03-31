

import React, { useEffect, useState } from 'react';
import './Sidecart.css'

const Sidecart = ({ brandTotal }) => {
    const [time,setTime] = useState(brandTotal)
    useEffect(() => {
        const getTotalFromStorage = localStorage.getItem("brandValue");
        setTime(getTotalFromStorage)
    },[brandTotal])
    
    return (
        <div className='value-section'>
            
             
                <h2>Total value : { time}</h2>
        
        </div>
    );
};

export default Sidecart;