import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './index.jsx'; // Import the NavBar component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);