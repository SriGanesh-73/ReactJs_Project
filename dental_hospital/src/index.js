import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AllRouters from './AllRouters.jsx';
// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <AllRouters />
  </React.StrictMode>
);