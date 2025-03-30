import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './index.jsx';
import AboutUs from './About_Us';
import ContactUs from './contact.jsx';
import Careers from './careers.jsx';
import TermsAndConditions from './terms.jsx';
import PrivacyPolicy from './privacy_policy.jsx';
import AppointmentBooking from './Appointment_Booking_form.jsx';
import DoctorTreatment from './Doctor_Treatment_details.jsx';

const AllRouters = () => {
  return (
    <Router>
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
        
        {/* Add a catch-all route for 404 pages */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRouters;