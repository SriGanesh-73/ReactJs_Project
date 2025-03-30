import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './landing_pages.css';
import PrivacyPolicy from './privacy_policy.jsx'; // Import the Careers component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the DoctorTreatment component
root.render(
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);