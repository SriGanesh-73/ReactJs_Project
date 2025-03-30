import React, { useState } from 'react';
import NavBar from './index.jsx';
import './landing_pages.css';
import './index.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add validation and submission logic
    };

    return (
        <div className="main">
            <div className="overlay"></div>
            <NavBar />
            
            <header className="scroll-container">
                <div className="hidden1">
                    <h1>Contact Us</h1>
                </div>
            </header>
            
            <main className="scroll-container">
                <div className="hidden1">
                    <h2>Get in Touch</h2>
                    <p>Address: 123 Dental Street, City, State, Zip</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Email: contact@dentalclinic.com</p>
                    <h3>Send us a message</h3>
                </div>
                
                <form className="hidden" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <textarea 
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
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

export default ContactUs;