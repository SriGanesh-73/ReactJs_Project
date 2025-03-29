import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Doctor_Treatment_details.css';
import DoctorTreatment from './DoctorTreatment';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the DoctorTreatment component
root.render(
  <React.StrictMode>
    <DoctorTreatment />
  </React.StrictMode>
);