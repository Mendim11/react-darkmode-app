import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h1>What our clients say about us</h1>
      <div className="reviews-container">
        <div className="review">
          <img src="/man.png" alt="Profile 1" className="profile-picture" />
          <p>LawKos is our trustworthy legal partner. Their team is <br></br> professional, responsible and very supportive.
           The legal advices<br></br> and services provided are always successful. We want to thank<br></br> 
           LawKos for being an important factor to the success of our<br></br> company. </p>
           <hr className='hr5' ></hr>
          <h2>Drilon Kraniqi</h2>
          <p>Director, TravelKos</p>
        </div>
        <div className="review">
          <img src="/girl.png" alt="Profile 2" className="profile-picture" />
          <p>Thank you LawKos for your amazing services. We want to express<br></br> our gratitude for all the years we have been working together.<br></br> Your team is very professional and talented.<br></br>
          We would recommend LawKos to anyone who needs legal<br></br> services and solutions.</p>
          <hr className='hr5'></hr>
          <h2>Blinera Morina</h2>
          <p>CEO, Jackal Agency</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
