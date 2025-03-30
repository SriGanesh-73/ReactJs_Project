import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './About_Us.css';
import AboutUs from './About_Us.jsx'; // Import the Careers component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the AboutUs component
root.render(
  <React.StrictMode>
    <AboutUs />
  </React.StrictMode>
);