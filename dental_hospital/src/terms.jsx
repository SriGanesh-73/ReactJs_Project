import React from 'react';
import NavBar from './index.jsx';
import './landing_pages.css';
import './index.css';

const TermsAndConditions = () => {
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
                    <a href="terms.html">Terms and Conditions</a>
                    <span>|</span>
                    <a href="privacy-policy.html">Privacy and Policy</a>
                    <span>|</span>
                    <a href="index.html/#faq-item">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;