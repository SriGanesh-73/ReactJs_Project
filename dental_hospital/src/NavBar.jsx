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
  const rightMenuRef = useRef(null);

  // Toggle overlay visibility
  const toggleOverlay = (show) => {
    if (overlayRef.current) {
      overlayRef.current.style.display = show ? 'block' : 'none';
    }
  };

  // Combined mobile menu toggle function
  const toggleMobileMenu = () => {
    const newState = !isMenuActive;
    setIsMenuActive(newState);
    toggleOverlay(newState);
    
    // Update hamburger icon
    if (hamburgerRef.current) {
      hamburgerRef.current.textContent = newState ? "✖" : "☰";
    }
    
    // Close right menu if open
    if (newState && isRightMenuOpen) {
      setIsRightMenuOpen(false);
    }
  };

  // Toggle right menu
  const toggleRightMenu = () => {
    const newState = !isRightMenuOpen;
    setIsRightMenuOpen(newState);
    toggleOverlay(newState);
    
    // Update hamburger icon
    if (hamburgerRef.current && window.innerWidth > 768) {
      hamburgerRef.current.textContent = newState ? "✖" : "☰";
    }
    
    // Close mobile menu if open
    if (newState && isMenuActive) {
      setIsMenuActive(false);
    }
  };

  // Combined click handler for hamburger button
  const handleHamburgerClick = () => {
    if (window.innerWidth <= 768) {
      toggleMobileMenu();
    } else {
      toggleRightMenu();
    }
  };

  // Close all menus and overlay
  const closeAllMenus = () => {
    setIsMenuActive(false);
    setIsRightMenuOpen(false);
    toggleOverlay(false);
    if (hamburgerRef.current) {
      hamburgerRef.current.textContent = "☰";
    }
  };

  // Handle overlay click
  const handleOverlayClick = () => {
    closeAllMenus();
  };

  // Handle dropdown toggle
  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownActive(!isDropdownActive);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside all menu elements
      if (
        menuContainerRef.current && 
        !menuContainerRef.current.contains(event.target) &&
        rightMenuRef.current && 
        !rightMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeAllMenus();
      }
      
      // Handle dropdown specifically
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownActive(false);
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
      if (window.innerWidth > 768 && isMenuActive) {
        closeAllMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuActive]);

  return (
    <div className="navbar">
      <div 
        className="overlay" 
        ref={overlayRef} 
        onClick={handleOverlayClick}
        style={{ display: 'none' }}
      ></div>
      
      <div id="icon">
        <img src={logo} width="20px" height="20px" alt="DentaEase Logo" />
        <h3><Link to="/">DentaEase</Link></h3>
      </div>
      
      {/* Main Navigation */}
      <div id="container" ref={menuContainerRef} className={isMenuActive ? "active" : ""}>
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li 
            id="dropdown" 
            ref={dropdownRef} 
            className={isDropdownActive ? "active" : ""} 
            onClick={toggleDropdown}
          >
            <Link to="#">Features</Link>
            <ul id="dropdown-content">
              {[1,2,3,4,5,6,7,8,9].map((i) => (
                <li key={i}>
                  <Link to={`#features${i}`}>
                    {[
                      'Electronic Patient Records',
                      'Appointment and Schedules',
                      'SMS and Email Notifications',
                      'Accounts & Cash Management',
                      'Reporting System',
                      'Document Management',
                      'Administrator',
                      'Inventory Management',
                      'Lab Management'
                    ][i-1]}
                  </Link>
                </li>
              ))}
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
      <div 
        id="right-menu" 
        ref={rightMenuRef}
        className={isRightMenuOpen ? 'open' : ''}
      >
        <div id="section1">
          {['DISCOVER', 'MANAGE', 'EDUCATE', 'BUY'].map((item) => (
            <Link key={item} to={`#${item.toLowerCase()}`}>{item}</Link>
          ))}
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
              {[1,2,3,4,5,6,7,8,9].map((i) => (
                <li key={i}>
                  <Link to={`#features${i}`}>
                    {[
                      'Electronic Patient Records',
                      'Appointment and Schedules',
                      'SMS and Email Notifications',
                      'Accounts & Cash Management',
                      'Reporting System',
                      'Document Management',
                      'Administrator',
                      'Inventory Management',
                      'Lab Management'
                    ][i-1]}
                  </Link>
                </li>
              ))}
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