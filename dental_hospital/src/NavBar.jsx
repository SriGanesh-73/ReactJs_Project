import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.webp';
import './index.css';

const NavBar = () => {
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
    const menuOpen = document.body.classList.toggle("menu-open");
    
    // Toggle overlay visibility
    const overlay = document.querySelector(".overlay");
    if (overlay) {
      overlay.style.display = menuOpen ? "block" : "none";
    }
    
    // Update hamburger icon
    if (hamburgerRef.current) {
      hamburgerRef.current.textContent = menuOpen ? "✖" : "☰";
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

  // Form visibility states
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  
  
  // Form validation states
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginUsernameError, setLoginUsernameError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerUsernameError, setRegisterUsernameError] = useState('');
  const [registerEmailError, setRegisterEmailError] = useState('');
  const [registerPasswordError, setRegisterPasswordError] = useState('');
  const [registerConfirmPasswordError, setRegisterConfirmPasswordError] = useState('');

  // Form visibility functions
  const showForm = (formType) => {
    if (overlayRef.current) {
      overlayRef.current.style.display = "block";
    }
    
    if (formType === 'login') {
      setIsLoginFormShown(true);
      setIsRegisterFormShown(false);
    } else if (formType === 'register') {
      setIsRegisterFormShown(true);
      setIsLoginFormShown(false);
    }
  };
  
  const hideForm = (formType) => {
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
    }

    if (formType === 'login') {
      setIsLoginFormShown(false);
    } else if (formType === 'register') {
      setIsRegisterFormShown(false);
    } else {
      setIsLoginFormShown(false);
      setIsRegisterFormShown(false);
    }
    
    setTimeout(() => {
      if (overlayRef.current && !isLoginFormShown && !isRegisterFormShown) {
        overlayRef.current.style.display = "none";
      }
    }, 500);
  };
  // Form validation handlers
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    
    if (!loginUsername) {
      setLoginUsernameError('Username is required');
      isValid = false;
    } else {
      setLoginUsernameError('');
    }
    
    if (!loginPassword) {
      setLoginPasswordError('Password is required');
      isValid = false;
    } else {
      setLoginPasswordError('');
    }
    
    if (isValid) {
      console.log('Login successful');
      hideForm('login');
    }
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    
    if (!registerUsername) {
      setRegisterUsernameError('Username is required');
      isValid = false;
    } else {
      setRegisterUsernameError('');
    }
    
    if (!registerEmail) {
      setRegisterEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerEmail)) {
      setRegisterEmailError('Email is invalid');
      isValid = false;
    } else {
      setRegisterEmailError('');
    }
    
    if (!registerPassword) {
      setRegisterPasswordError('Password is required');
      isValid = false;
    } else {
      setRegisterPasswordError('');
    }
    
    if (!registerConfirmPassword) {
      setRegisterConfirmPasswordError('Confirm password is required');
      isValid = false;
    } else if (registerPassword !== registerConfirmPassword) {
      setRegisterConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setRegisterConfirmPasswordError('');
    }
    
    if (isValid) {
      console.log('Registration successful');
      hideForm('register');
    }
  };
  

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
      {/* Login Form */}
      <div id="login-form" className={`form-container ${isLoginFormShown ? 'show' : ''}`}>
        <div className="form-box">
          <span id="close-login" className="close-btn" onClick={() => hideForm('login')}>&times;</span>
          <h2>Login</h2>
          <form id="loginForm" onSubmit={handleLoginSubmit}>
            <input
              id="login-username"
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <span id="login-username_err" className="error-msg">{loginUsernameError}</span>
            
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <span id="login-password_err" className="error-msg">{loginPasswordError}</span>
            
            <button id="login-submit" type="submit">Login</button>
            <p>Don't have an account? <a id="no-account" href="#" onClick={() => showForm('register')}>Register</a></p>
          </form>
        </div>
      </div>
      
      {/* Register Form */}
      <div id="register-form" className={`form-container ${isRegisterFormShown ? 'show' : ''}`}>
        <div className="form-box">
          <span id="close-register" className="close-btn" onClick={() => hideForm('register')}>&times;</span>
          <h2>Register</h2>
          <form id="registerForm" onSubmit={handleRegisterSubmit}>
            <input
              id="register-username"
              type="text"
              placeholder="Username"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <span id="register-username_err" className="error-msg">{registerUsernameError}</span>
            
            <input
              id="register-email"
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <span id="register-email_err" className="error-msg">{registerEmailError}</span>
            
            <input
              id="register-password"
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <span id="register-password_err" className="error-msg">{registerPasswordError}</span>
            
            <input
              id="register-cn-password"
              type="password"
              placeholder="Confirm Password"
              value={registerConfirmPassword}
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
            />
            <span id="register-cn-password_err" className="error-msg">{registerConfirmPasswordError}</span>
            
            <button id="register-submit" type="submit">Register</button>
            <p>Already have an account? <a id="have-account" href="#" onClick={() => showForm('login')}>Login</a></p>
          </form>
        </div>
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