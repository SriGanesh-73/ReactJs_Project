import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './index.jsx';
import AboutUs from './About_Us';
import ContactUs from './contact.jsx';
import Careers from './careers.jsx';
import TermsAndConditions from './terms.jsx';
import PrivacyPolicy from './privacy_policy.jsx';
import AppointmentBooking from './Appointment_Booking_form.jsx';
import DoctorTreatment from './Doctor_Treatment_details.jsx';
import NavBar from './NavBar.jsx'; // Assuming your NavBar is in the same directory
import LoginPage from './Login_form.jsx';
import RegisterPage from './Register_form.jsx';

// Create Overlay Context
const OverlayContext = React.createContext();

const AllRouters = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <OverlayContext.Provider value={{ overlayVisible, setOverlayVisible }}>
      <Router>
        {/* Global Overlay - controlled by NavBar and other components */}
        <div 
          className={`overlay ${overlayVisible ? 'visible' : ''}`}
          onClick={() => setOverlayVisible(false)}
          style={{
            display: overlayVisible ? 'block' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
          }}
        />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/book-appointment" element={<AppointmentBooking />} />
          <Route path="/doctor-treatment" element={<DoctorTreatment />} />
          <Route path="/login-form" element={<LoginPage />} />
          <Route path="/register-form" element={<RegisterPage />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </OverlayContext.Provider>
  );
};

// Export the context to be used in other components
export { OverlayContext };
export default AllRouters;