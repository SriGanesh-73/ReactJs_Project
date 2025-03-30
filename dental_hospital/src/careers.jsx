import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import './landing_pages.css';
import './index.css';
import { Link } from 'react-router-dom';

const Careers = () => {
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setApplicationData(prev => ({
            ...prev,
            [name]: name === 'resume' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Application submitted:', applicationData);
        // You can add validation and submission logic
    };

    return (
        <div className="main">
            <div className="overlay"></div>
            <NavBar />
            
            <header className="scroll-container">
                <div className="hidden1">
                    <h1>Careers</h1>
                </div>
            </header>
            
            <main className="scroll-container">
                <div className="hidden1"> 
                    <h2>Join Our Team</h2>
                    <p>We are looking for talented professionals to join our dental team.</p>
                    <h3>Current Openings</h3>
                    <ul>
                        <li>Dentist - Minimum 3 years experience</li>
                        <li>Dental Assistant - Freshers welcome</li>
                        <li>Receptionist - Excellent communication skills required</li>
                    </ul>
                </div>
                
                <div className="hidden">
                    <h3>Apply Now</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            value={applicationData.name}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            value={applicationData.email}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="file" 
                            name="resume"
                            accept=".pdf" 
                            onChange={handleChange}
                            required 
                        />
                        <button type="submit">Submit Application</button>
                    </form>
                </div>
            </main>
            
            <div id="footer">
                <p>Copyrights © 2025 DentaEase. All rights reserved.</p>
                <div id="landing_pages">
                    <Link to="/terms">Terms and Conditions</Link>
                    <span>|</span>
                    <Link to="/privacy-policy">Privacy & Policy</Link>
                    <span>|</span>
                    <a href="faq.html">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default Careers;