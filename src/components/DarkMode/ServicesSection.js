import React from 'react';
import './ServicesSection.css'; 

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="left-side-services">
                <h1>Services <br></br> <hr></hr></h1>
            </div>
            <div className="middle-section">
                <div className="personal">
                    <h3>Personal</h3>
                    <p>From family law to personal injury, we treat your <br></br> case with the care it deserves. Let's protect what
                     <br></br> matters most to you.</p>
                </div>
                <div className="business">
                    <h3>Business</h3>
                    <p>Achieve your business goals with LawKos <br></br> comprehensive legal solutions, designed to
                     <br></br> mitigate risks and fuel your growth.</p>
                </div>
            </div>
            <div className="right-side-services">
                <img src="/Services.png" alt="Services" />
            </div>
        </div>
    );
};

export default ServicesSection;

