import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="top-section">
        <div className="left-top">
          <hr className="hr2"></hr>
          <h1>About Us</h1>
        </div>
        <div className="right-top">
          <h1>
            Our team consist of well-coordinated <br></br>
            lawyers that are able to solve the most <br></br>
            difficult tasks and cases.
            <button className="about-us-button">About us →</button>
          </h1>
        </div>
      </div>
      <div className="bottom-section-aboutus">
        <div className="left-bottom">
        <img src="/15.png" alt="Image 3" className="number" />
          <h1>
            Years of <br></br> experience
          </h1>
          <p>
            Founded in 2008, LawKos is committed to the pursuit of <br></br>
            justice in our country and more. Our team of dedicated <br></br>
            professionals works tirelessly to serve our community. We <br></br>
            offer legal services and consultancy in different areas.
          </p>
        </div>
        <div className="right-bottom">
    <img src="/businessman.png" alt="Image 1" className="image-businessman" />
    <img src="/room.png" alt="Image 2" className="image-room" />
</div>


      </div>
    </div>
  );
};

export default AboutUsSection;
