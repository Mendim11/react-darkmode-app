
import React from 'react';
import './LegalSolutionsSection.css'; 
// import image1 from './image1.png';

function LegalSolutionsSection() {
    return (
        <div className="legal-solutions-section">
            <div className="top-section">
                <div className="left-side">
                    <h1>Legal solutions <br></br> to solve complex <br></br> problems</h1>
                </div>
                <div className="right-side">
                    <h4>We offer legal and consultancy services tailored to our clients' needs. <br></br> Wherever business takes you, we are here to help.</h4>
                    <button className="consulation-button">Get a free consulation →</button>
                    {}
                </div>
            </div>
            <div className="bottom-section">
            <img src="/image1.png" alt="Image 1" />


            </div>
        </div>
    );
}

export default LegalSolutionsSection;
