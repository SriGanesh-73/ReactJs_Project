import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './landing_pages.css';
import Careers from './careers.jsx'; // Import the Careers component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the Careers component
root.render(
  <React.StrictMode>
    <Careers />
  </React.StrictMode>
);