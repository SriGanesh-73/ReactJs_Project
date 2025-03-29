import React, { useState, useEffect } from 'react';
import NavBar from './index.jsx';
import './About_Us.css';
import './index.css';

const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([
        {
            id: 1,
            name: "Dr. John Doe",
            role: "Chief Dentist with 20+ years of experience.",
            image: "assets/doctor_1.jpg"
        },
        {
            id: 2,
            name: "Dr. Jane Smith",
            role: "Specialist in Orthodontics and Cosmetic Dentistry.",
            image: "assets/doctor_1.jpg"
        }
    ]);

    const [memberStyles, setMemberStyles] = useState({});

    // Initialize member styles
    useEffect(() => {
        const initialStyles = {};
        teamMembers.forEach(member => {
            initialStyles[member.id] = { boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" };
        });
        setMemberStyles(initialStyles);
    }, [teamMembers]);

    const handleMouseEnter = (id) => {
        setMemberStyles(prev => ({
            ...prev,
            [id]: { ...prev[id], boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }
        }));
    };

    const handleMouseLeave = (id) => {
        setMemberStyles(prev => ({
            ...prev,
            [id]: { ...prev[id], boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }
        }));
    };

    return (
        <div className="main">
            <div className="overlay"></div>
            <NavBar />
            
            <div id="content">
                <header className="scroll-container">
                    <div className="hidden1">
                        <h1>About Us</h1>
                        <p>Your Smile, Our Priority!</p>
                    </div>
                </header>
                
                <section className="content1">
                    <div id="container" className="scroll-container">
                        <div className="hidden">
                            <h2>Our Mission</h2>
                            <p>At DentaEase, we are dedicated to providing high-quality dental care using advanced technology while ensuring patient comfort and satisfaction.</p>
                        </div>
                    </div>

                    <div id="team-section" className="scroll-container">
                        <div className="hidden1">    
                            <h2>Meet Our Team</h2>
                        </div>
                        <div id="team" className="hidden">
                            {teamMembers.map(member => (
                                <div 
                                    key={member.id}
                                    className="team-member"
                                    style={memberStyles[member.id]}
                                    onMouseEnter={() => handleMouseEnter(member.id)}
                                    onMouseLeave={() => handleMouseLeave(member.id)}
                                >
                                    <img src={member.image} alt={member.name} />
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="services" className="scroll-container">
                        <div className="hidden1">
                            <h2>Our Services</h2>
                        </div>
                        <ul className="hidden">
                            <li>Teeth Cleaning & Whitening</li>
                            <li>Dental Implants</li>
                            <li>Braces & Aligners</li>
                            <li>Root Canal Treatment</li>
                        </ul>
                    </div>

                    <div className="contact">
                        <h2>Contact Us</h2>
                        <p>Email: contact@dentaease.com</p>
                        <p>Phone: +91 98765 43210</p>
                    </div>
                </section>
            </div>
            
            <div id="footer">
                <p>Copyrights © 2025 DentaEase. All rights reserved.</p>
                <div id="landing_pages">
                    <a href="terms.html">Terms and Conditions</a>
                    <span>|</span>
                    <a href="privacy-policy.html">Privacy and Policy</a>
                    <span>|</span>
                    <a href="faq.html">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;