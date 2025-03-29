import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import './Doctor_Treatment_details.css';
import './index.css';

// Import doctor images
import doctorImage from './assets/doctor_1.jpg';

// Import treatment images
import teethWhitening from './assets/teeth_whitening.jpg';
import rootCanal from './assets/Root-Canal-Treatment.jpeg';
import bracersAligners from './assets/Bracers_aligners.jpeg';
import extraction from './assets/extraction_dental.jpeg';
import dentures from './assets/Removable-Dentures.jpg';
import filling from './assets/dental_filling.png';
import implant from './assets/dental_implants.jpg';
import capsCrowns from './assets/caps_crowns.jpg';

function DoctorTreatment() {
  // States for login/register forms
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  
  // Refs for forms and overlay
  const overlayRef = useRef(null);
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);
  
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
    if (formType === 'login') {
      setIsLoginFormShown(false);
    } else if (formType === 'register') {
      setIsRegisterFormShown(false);
    } else {
      setIsLoginFormShown(false);
      setIsRegisterFormShown(false);
    }
    
    // Delayed overlay hide to match transition
    setTimeout(() => {
      if (overlayRef.current && !isLoginFormShown && !isRegisterFormShown) {
        overlayRef.current.style.display = "none";
      }
    }, 500);
  };
  
  // Handle overlay click
  const handleOverlayClick = () => {
    hideForm('all');
  };
  
  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const img = entry.target.querySelector(".hidden");
        const text = entry.target.querySelector(".hidden1");
        
        if (entry.isIntersecting) {
          if (img) img.classList.add("show");
          if (text) text.classList.add("show1");
        } else {
          if (img) img.classList.remove("show");
          if (text) text.classList.remove("show1");
        }
      });
    }, { threshold: 0.2 });
    
    // Observe the scroll containers
    const scrollContainers = document.querySelectorAll(".scroll-container");
    scrollContainers.forEach((container) => observer.observe(container));
    
    return () => {
      scrollContainers.forEach((container) => observer.unobserve(container));
    };
  }, []);
  
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
      // Handle login logic
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
      // Handle registration logic
      console.log('Registration successful');
      hideForm('register');
    }
  };

  return (
    <div className="main">
      <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>
      
      {/* Navbar Component */}
      <NavBar showForm={showForm} />
      
      {/* Login Form */}
      <div 
        id="login-form" 
        className={`form-container ${isLoginFormShown ? 'show' : ''}`} 
        ref={loginFormRef}
      >
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
      <div 
        id="register-form" 
        className={`form-container ${isRegisterFormShown ? 'show' : ''}`} 
        ref={registerFormRef}
      >
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
      
      <div id="header" className="scroll-container">
        <div className="hidden1">
          <h1>Meet Our Expert Dentists</h1>
          <p>Your smile is our priority!</p>
        </div>
      </div>
      
      <div id="content">
        {/* Doctor Profiles Section */}
        <section id="doctors" className="scroll-container">
          <div className="hidden1">
            <h2>Our Dental Specialists</h2>
          </div>
          <div id="doctor-grid" className="hidden">
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. A" />
              <h3>Dr. A</h3>
              <p>Specialist in Orthodontics</p>
              <p>Available: Mon - Fri (10 AM - 5 PM)</p>
            </div>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. B" />
              <h3>Dr. B</h3>
              <p>Endodontics & Root Canal Specialist</p>
              <p>Available: Tue - Sat (9 AM - 4 PM)</p>
            </div>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. C" />
              <h3>Dr. C</h3>
              <p>Cosmetic Dentistry Expert</p>
              <p>Available: Mon - Sat (11 AM - 6 PM)</p>
            </div>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. D" />
              <h3>Dr. D</h3>
              <p>Prosthodontics & Dental Implants Specialist</p>
              <p>Available: Mon - Fri (9 AM - 3 PM)</p>
            </div>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. E" />
              <h3>Dr. E</h3>
              <p>Periodontics & Gum Disease Specialist</p>
              <p>Available: Wed - Sun (10 AM - 6 PM)</p>
            </div>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. F" />
              <h3>Dr. F</h3>
              <p>Pediatric Dentist (Children's Dentistry)</p>
              <p>Available: Mon - Sat (8 AM - 4 PM)</p>
            </div>                   
          </div>
        </section>

        {/* Treatment Plans Section */}
        <section id="treatments" className="scroll-container">
          <div className="hidden1">
            <h2>Our Treatment Plans</h2>
          </div>
          <div id="treatment-list" className="hidden">
            <div className="treatment-card">
              <img src={teethWhitening} alt="teeth_whitening" />
              <h3>Teeth Whitening</h3>
              <p>Brighten your smile with professional whitening treatments.</p>
              <span className="price">$100</span>
            </div>
            <div className="treatment-card">
              <img src={rootCanal} alt="root_canal" />
              <h3>Root Canal Therapy</h3>
              <p>Save your teeth with expert root canal procedures.</p>
              <span className="price">$250</span>
            </div>
            <div className="treatment-card">
              <img src={bracersAligners} alt="bracers_aligners" />
              <h3>Braces & Aligners</h3>
              <p>Get straight, aligned teeth with our advanced orthodontic solutions.</p>
              <span className="price">$1500</span>
            </div>
            <div className="treatment-card">
              <img src={extraction} alt="extraction" />
              <h3>Extraction</h3>
              <p>Safe and painless tooth removal for better oral health.</p>
              <span className="price">$80</span>
            </div>
            <div className="treatment-card">
              <img src={dentures} alt="dentures" />
              <h3>Denture Removal</h3>
              <p>Comfortable, natural-looking replacements for missing teeth.</p>
              <span className="price">$500</span>
            </div>
            <div className="treatment-card">
              <img src={filling} alt="filling" />
              <h3>Filling</h3>
              <p>Restore cavities and protect your teeth with durable fillings.</p>
              <span className="price">$120</span>
            </div>
            <div className="treatment-card">
              <img src={implant} alt="implant" />
              <h3>Dental Implant</h3>
              <p>Replace missing teeth with strong and natural-looking dental implants.</p>
              <span className="price">$2000</span>
            </div>
            <div className="treatment-card">
              <img src={capsCrowns} alt="caps & crowns" />
              <h3>Caps & Crowns</h3>
              <p>Protect and strengthen damaged teeth with custom-made crowns.</p>
              <span className="price">$800</span>
            </div>
          </div>
        </section>
      </div>
      
      <div id="footer">
        <p>Copyrights © 2025 DentaEase. All rights reserved.</p>
        <span></span>
      </div>
    </div>
  );
}

export default DoctorTreatment;