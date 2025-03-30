import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './landing_pages.css';
import ContactUs from './contact.jsx'; // Import the ContactUs component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the ContactUs component
root.render(
  <React.StrictMode>
    <ContactUs />
  </React.StrictMode>
);