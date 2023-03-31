import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="main-container">
            <div className="main-header">
                <div className="nav-header">
                        <h2>Argentine Bangladesh Football Community</h2>
                   </div>
                <div className="about-section">
                        <a href="./home">Home</a>
                        <a href="./Details">Details</a>
                        <a href="./value">Value</a>
                        <a href="./login">Login</a>
                </div>
                </div>
                </div>
        </div>
    );
};

export default Header;