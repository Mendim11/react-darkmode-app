import React, { useState } from 'react';
import './MeetOurTeam.css';

const teamMembers = [
    {
        id: 1,
        name: 'Labinot Halimi',
        position: 'Managing Partner',
        image: '/man1.jpg',
    },
    {
        id: 2,
        name: 'Arbenita Jashari',
        position: 'Attorney at law, Partner',
        image: '/woman1.jpg',
    },
    {
        id: 3,
        name: 'Festina Murati',
        position: 'Attorney at law',
        image: '/woman2.jpg',
    },
    {
        id: 4,
        name: 'Arbenita Jashari',
        position: 'Attorney at law, Partner',
        image: '/woman1.jpg',
    },

];

const MeetOurTeam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < teamMembers.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="meet-our-team-section">
            <h1>Meet Our Team<hr className='hr4'></hr></h1>
            <p>Meet the brilliant minds behind LawKos. Our team of skilled lawyers and legal experts  make <br></br> LawKos your best choice for legal representation.</p>
            <div className="slider-container">
                <button className="slide-button-left" onClick={prevSlide}>
                    &#10094;
                </button>
                <div className="slider">
                    {teamMembers.slice(currentIndex, currentIndex + 3).map(member => (
                        <div className="team-member" key={member.id}>
                            <img src={member.image} alt={member.name} />
                            <h2>{member.name}  <button className="small-button">+</button></h2>
                            <p>{member.position}</p>
                            
                        </div>
                    ))}
                </div>
                <button className="slide-button-right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default MeetOurTeam;
