import React, { useEffect } from 'react';
import NavBar from './NavBar.jsx';
import './landing_pages.css';
import './index.css';
import {Link} from 'react-router-dom';

const TermsAndConditions = () => {
    // Scroll animation effect
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const img = entry.target.querySelector(".hidden");
            const text = entry.target.querySelector(".hidden1");
            
            if (entry.isIntersecting) {
            if (img) img.classList.add("show");
            if (text) text.classList.add("show1");
            } else {
            if (img) img.classList.remove("show");
            if (text) text.classList.remove("show1");
            }
        });
        }, { threshold: 0.2 });
        
        // Observe the scroll containers
        const scrollContainers = document.querySelectorAll(".scroll-container");
        scrollContainers.forEach((container) => observer.observe(container));
        
        return () => {
        scrollContainers.forEach((container) => observer.unobserve(container));
        };
    }, []);
    return (
        <div className="main">
            <div className="overlay"></div>
            <NavBar />
            
            <header className="scroll-container">
                <div className="hidden1">
                    <h1>Terms and Conditions</h1>
                </div>
            </header>
            
            <main className="scroll-container">
                <div className="hidden">
                    <h2>Use of Our Website</h2>
                    <p>By accessing our website, you agree to our terms regarding appointment booking and service usage.</p>
                    
                    <h2>Medical Disclaimer</h2>
                    <p>Information on this site is for reference only and does not replace professional medical advice.</p>
                    
                    <h2>Cancellation Policy</h2>
                    <p>Appointments must be canceled at least 24 hours in advance to avoid cancellation fees.</p>
                    
                    <h2>Privacy Policy</h2>
                    <p>We respect your privacy and handle your personal information with care according to our privacy policy.</p>
                    
                    <h2>Intellectual Property</h2>
                    <p>All content on this website is the property of DentaEase and protected by copyright laws.</p>
                    
                    <h2>Limitation of Liability</h2>
                    <p>DentaEase shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.</p>
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

export default TermsAndConditions;