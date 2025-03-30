import React from 'react';
import NavBar from './index.jsx';
import './landing_pages.css';
import './index.css';
import {Link} from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <NavBar />
            
            <header className="scroll-container">
                <div className="hidden1">
                    <h1>Privacy Policy</h1>
                </div>
            </header>
            
            <main className="scroll-container">
                <div className="hidden">
                    <h2>Patient Data Privacy</h2>
                    <p>We ensure the confidentiality of your medical records and personal data.</p>
                    
                    <h2>Cookie Policy</h2>
                    <p>We use cookies to improve user experience. By using our website, you consent to our cookie policy.</p>
                    
                    <h2>Data Security</h2>
                    <p>All transactions and patient records are encrypted for maximum security.</p>
                    
                    <h2>Information Collection</h2>
                    <p>We collect only necessary personal information required for providing dental services.</p>
                    
                    <h2>Data Usage</h2>
                    <p>Your data is used solely for appointment management, treatment records, and communication.</p>
                    
                    <h2>Third-Party Sharing</h2>
                    <p>We do not share your personal data with third parties without your explicit consent.</p>
                    
                    <h2>Your Rights</h2>
                    <p>You have the right to access, correct, or request deletion of your personal data.</p>
                    
                    <h2>Policy Updates</h2>
                    <p>We may update this policy periodically. Continued use of our services constitutes acceptance.</p>
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

export default PrivacyPolicy;