import React from 'react';
import './News.css';

const News = () => {
    return (
        <div className="news-section">
            <div className="news-header">
                <h1>News & Events <hr className='hr6' ></hr></h1>
                <button className="news-button">View All →</button>
            </div>
            <div className="news-content">
                <div className="news-left">
                    <div className="image-container">
                        <img src="/statues.png" alt="News Left" className="news-image" />
                        <div className="image-overlay"> <p>November 3, 2023</p> <h2>New law on Environmental Impact <br></br>
                        Assessment</h2></div>
                    </div>
                </div>
                <div className="news-right">
                    <div className="image-container">
                        <img src="/roof.png" alt="News Right Top" className="news-image" />
                        <div className="image-overlay"> <p>October 22, 2023</p> <h2>Kosovo's first auction for solar energy park</h2></div>
                    </div>
                    <div className="image-container">
                        <img src="/collar.png" alt="News Right Bottom" className="news-image" />
                        <div className="image-overlay"> <p>August 15, 2023</p> <h2>Labor Law in Kosovo: Explained in details</h2></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
