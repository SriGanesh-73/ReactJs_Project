import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './landing_pages.css';
import TermsAndConditions from './terms.jsx'; // Import the Careers component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the TermsAndConditions component
root.render(
  <React.StrictMode>
    <TermsAndConditions />
  </React.StrictMode>
);