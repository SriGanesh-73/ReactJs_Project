import React, { useState, useRef, useEffect } from 'react';
import logo from './assets/logo.webp';

const NavBar = ({ showForm }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isDropdown1Active, setIsDropdown1Active] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuContainerRef = useRef(null);
  const menuButton2Ref = useRef(null);
  const dropdownRef = useRef(null);
  const dropdown1Ref = useRef(null);
  const overlayRef = useRef(null);
  const menuBtn1Ref = useRef(null);
  
  // Handle menu toggle functionality
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  
  // Handle dropdown toggle functionality
  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownActive(!isDropdownActive);
  };
  
  // Handle dropdown1 toggle functionality
  const toggleDropdown1 = () => {
    setIsDropdown1Active(!isDropdown1Active);
  };
  
  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    const newMenuOpenState = !isMenuOpen;
    setIsMenuOpen(newMenuOpenState);
    if (overlayRef.current) {
      overlayRef.current.style.display = newMenuOpenState ? "block" : "none";
    }
  };
  
  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownActive(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div id="icon">
        <img src={logo} width="20px" height="20px" alt="DentaEase Logo" />
        <h3><a href="index.html">DentaEase</a></h3>
      </div>
      
      <div id="container" ref={menuContainerRef} className={isMenuActive ? "active" : ""}>
        <ul id="menu">
          <li><a href="index.html">Home</a></li>
          <li id="dropdown" ref={dropdownRef} className={isDropdownActive ? "active" : ""} onClick={toggleDropdown}>
            <a href="#">Features</a>
            <ul id="dropdown-content">
              <li><a href="#features1">Electronic Patient Records</a></li>
              <li><a href="#features2">Appointment and Schedules</a></li>
              <li><a href="#features3">SMS and Email Notifications</a></li>
              <li><a href="#features4">Accounts & Cash Management</a></li>
              <li><a href="#features5">Reporting System</a></li>
              <li><a href="#features6">Document Management</a></li>
              <li><a href="#features7">Administrator</a></li>
              <li><a href="#features8">Inventory Management</a></li>
              <li><a href="#features9">Lab Management</a></li>
            </ul>
          </li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="About_Us.html">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        
        <button id="open-login" onClick={() => showForm('login')}>
          <a href="#">LOGIN</a>
        </button>
        
        <button id="open-register" onClick={() => showForm('register')}>
          <a href="#">REGISTER</a>
        </button>
        
        <span 
          id="menu-btn1" 
          ref={menuBtn1Ref} 
          onClick={toggleMobileMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </span>
      </div>
      
      <span 
        id="menu-btn2" 
        ref={menuButton2Ref} 
        onClick={toggleMenu}
      >
        {isMenuActive ? "✖" : "☰"}
      </span>
      
      {/* Right Menu */}
      <div id="right-menu" className={isMenuOpen ? 'open' : ''}>
        <div id="section1">
          <a href="#discover">DISCOVER</a>
          <a href="#manage">MANAGE</a>
          <a href="#educate">EDUCATE</a>
          <a href="#buy">BUY</a>
        </div>
        
        <div id="section2">
          <div 
            id="dropdown1" 
            ref={dropdown1Ref} 
            className={isDropdown1Active ? "active" : ""} 
            onClick={toggleDropdown1}
          >
            <div id="features">
              <a id="ele1" href="#">Features</a>
              <span id="ele2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                </svg>
              </span>
            </div>
            
            <ul id="dropdown-content1">
              <li><a href="#features1">Electronic Patient Records</a></li>
              <li><a href="#features2">Appointment and Schedules</a></li>
              <li><a href="#features3">SMS and Email Notifications</a></li>
              <li><a href="#features4">Accounts & Cash Management</a></li>
              <li><a href="#features5">Reporting System</a></li>
              <li><a href="#features6">Document Management</a></li>
              <li><a href="#features7">Administrator</a></li>
              <li><a href="#features8">Inventory Management</a></li>
              <li><a href="#features9">Lab Management</a></li>
            </ul>
          </div>
          
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact Us</a>
          <a href="#support">Support</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;