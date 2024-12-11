import React from 'react';
import './PracticeArea.css';

const PracticeArea = () => {
    return (
        <div className="practice-area-section">
            <div className="top-section-practice-area">
                <h1>Our Practice Area<hr className='hr3'></hr></h1>
                
                <button className="practice-area-button">Learn More <br></br>→</button>
            </div>
            <div className="bottom-section-practice-area">
                <div className="practice-area-item">
                    <img src="/law.png" alt="Logo 1" className="practice-area-logo" />
                    <h2>Corporate Law</h2>
                    <p>Focusing on advising and representing corporations,<br></br> their executives, and shareholders on various legal <br></br>matters. This includes mergers and acquisitions,<br></br> intellectual property rights, corporate governance, and<br></br> securities law.</p>
                </div>
                <div className="practice-area-item">
                    <img src="/bank.png" alt="Logo 2" className="practice-area-logo" />
                    <h2>Banking & Finance</h2>
                    <p>We are specialized in legal issues concerning the<br></br> transaction and regulation of financial instruments and<br></br> institutions. This involve issues like lending<br></br> agreements, regulatory compliance, securitization, and <br></br>capital markets.</p>
                </div>
                <div className="practice-area-item">
                    <img src="/laptop.png" alt="Logo 3" className="practice-area-logo" />
                    <h2>ICT Sector</h2>
                    <p>We help clients navigate through regulatory<br></br>compliance, data protection, intellectual property<br></br> issues, and e-commerce law. We also work on<br></br> contracts involving software licenses, cloud computing<br></br> agreements, and technology transfers.</p>
                </div>
                <div className="practice-area-item2">
                    <img src="/realestate.png" alt="Logo 4" className="practice-area-logo" />
                    <h2>Real Estate</h2>
                    <p>We guide our clients through property transactions,<br></br> ensuring that all regulations are met and that contracts<br></br> are legally sound. This can include zoning issues, title<br></br> searches, and financing.</p>
                </div>
                <div className="practice-area-item2">
                    <img src="/insurance.png" alt="Logo 5" className="practice-area-logo" />
                    <h2>Insurance</h2>
                    <p>We help our clients with legal issues concerning<br></br>  insurance policies and claims like policy interpretation,<br></br>  insurance fraud investigations, and litigation over<br></br>  denied claims.</p>
                </div>
                <div className="practice-area-item2">
                    <img src="/labor.png" alt="Logo 6" className="practice-area-logo" />
                    <h2>Labor & Employment</h2>
                    <p>We can help on matters involving employer-employee<br></br> relationships. Including employment contracts,<br></br> workplace discrimination, employee benefits, and<br></br> collective bargaining agreements.
                    </p>
                </div>
                <div className='image-container'> 
                    <img src='/statue.png' alt='image1' className='statue'></img>
                    <div className="text-overlay">From family law to personal injury,<br></br> we treat your case with the care it<br></br> deserves. Let's protect what matters<br></br> most to you.</div>
                </div>
            </div>
        </div>
    );
};

export default PracticeArea;
