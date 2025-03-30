import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Appointment_booking_form.css';
import AppointmentBooking from './Appointment_Booking_form.jsx'; // Import the Careers component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the AppointmentBooking component
root.render(
  <React.StrictMode>
    <AppointmentBooking />
  </React.StrictMode>
);