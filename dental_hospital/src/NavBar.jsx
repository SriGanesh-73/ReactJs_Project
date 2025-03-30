import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.webp';

const NavBar = ({ showForm }) => {
  // State for menu controls
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  
  // Refs for DOM elements
  const menuContainerRef = useRef(null);
  const dropdownRef = useRef(null);
  const overlayRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Combined mobile menu toggle function
  const toggleMobileMenu = () => {
    const newState = !isMenuActive;
    setIsMenuActive(newState);
    
    // Toggle overlay
    if (overlayRef.current) {
      overlayRef.current.style.display = newState ? "block" : "none";
    }
    
    // Update hamburger icon
    if (hamburgerRef.current) {
      hamburgerRef.current.textContent = newState ? "✖" : "☰";
    }
  };

  // Toggle right menu (for larger screens)
  const toggleRightMenu = () => {
    if (window.innerWidth > 768) { // Adjust breakpoint as needed
      setIsRightMenuOpen(!isRightMenuOpen);
    }
  };

  // Combined click handler for hamburger button
  const handleHamburgerClick = () => {
    if (window.innerWidth <= 768) { // Mobile view
      toggleMobileMenu();
    } else { // Desktop view
      toggleRightMenu();
    }
  };

  // Close menus when clicking outside
  const handleOverlayClick = () => {
    setIsMenuActive(false);
    setIsRightMenuOpen(false);
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
    }
    if (hamburgerRef.current) {
      hamburgerRef.current.textContent = "☰";
    }
  };

  // Handle dropdown toggle
  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownActive(!isDropdownActive);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownActive(false);
      }
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuActive(false);
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>
      
      <div id="icon">
        <img src={logo} width="20px" height="20px" alt="DentaEase Logo" />
        <h3><Link to="/">DentaEase</Link></h3>
      </div>
      
      {/* Main Navigation */}
      <div id="container" ref={menuContainerRef} className={isMenuActive ? "active" : ""}>
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li id="dropdown" ref={dropdownRef} className={isDropdownActive ? "active" : ""} onClick={toggleDropdown}>
            <Link to="#">Features</Link>
            <ul id="dropdown-content">
              <li><Link to="#features1">Electronic Patient Records</Link></li>
              <li><Link to="#features2">Appointment and Schedules</Link></li>
              <li><Link to="#features3">SMS and Email Notifications</Link></li>
              <li><Link to="#features4">Accounts & Cash Management</Link></li>
              <li><Link to="#features5">Reporting System</Link></li>
              <li><Link to="#features6">Document Management</Link></li>
              <li><Link to="#features7">Administrator</Link></li>
              <li><Link to="#features8">Inventory Management</Link></li>
              <li><Link to="#features9">Lab Management</Link></li>
            </ul>
          </li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        
        <div className="auth-buttons">
          <button id="open-login" onClick={() => showForm('login')}>
            <span>LOGIN</span>
          </button>
          <button id="open-register" onClick={() => showForm('register')}>
            <span>REGISTER</span>
          </button>
        </div>
        
        {/* Dual-purpose hamburger button */}
        <span 
          id="menu-btn1"
          ref={hamburgerRef}
          onClick={handleHamburgerClick}
        >
          ☰
        </span>
      </div>
      
      {/* Right-side Menu */}
      <div id="right-menu" className={isRightMenuOpen ? 'open' : ''}>
        <div id="section1">
          <Link to="#discover">DISCOVER</Link>
          <Link to="#manage">MANAGE</Link>
          <Link to="#educate">EDUCATE</Link>
          <Link to="#buy">BUY</Link>
        </div>
        
        <div id="section2">
          <div id="features-dropdown">
            <Link to="#" className="features-header">
              <span>Features</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
              </svg>
            </Link>
            <ul className="features-list">
              <li><Link to="#features1">Electronic Patient Records</Link></li>
              <li><Link to="#features2">Appointment and Schedules</Link></li>
              <li><Link to="#features3">SMS and Email Notifications</Link></li>
              <li><Link to="#features4">Accounts & Cash Management</Link></li>
              <li><Link to="#features5">Reporting System</Link></li>
              <li><Link to="#features6">Document Management</Link></li>
              <li><Link to="#features7">Administrator</Link></li>
              <li><Link to="#features8">Inventory Management</Link></li>
              <li><Link to="#features9">Lab Management</Link></li>
            </ul>
          </div>
          <Link to="/careers">Careers</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="#support">Support</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;