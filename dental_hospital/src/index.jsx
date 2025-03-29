import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import NavBar from './NavBar.jsx';

// Icons and images
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import icon5 from './assets/icon5.png';
import icon6 from './assets/icon6.png';
import icon7 from './assets/icon7.png';
import icon8 from './assets/icon8.png';
import icon9 from './assets/icon9.png';
import dentalClinicInstruments from './assets/dental-clinic-instruments.jpg';
import goPaperless from './assets/go-paperless.webp';
import easyBooking from './assets/EasyBooking.jpg';
import communication from './assets/communication.png';
import hippaIcon from './assets/hippa-icon.jpg';

function Home() {
  // Form visibility states
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  
  // Refs
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  
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
    
    const scrollContainers = document.querySelectorAll(".scroll-container");
    scrollContainers.forEach((container) => observer.observe(container));
    
    return () => {
      scrollContainers.forEach((container) => observer.unobserve(container));
    };
  }, []);
  
  // FAQ toggle function
  const toggleFaq = (index) => {
    const faqItems = document.querySelectorAll(".faq-item");
    const faqItem = faqItems[index];
    const answer = faqItem.querySelector(".answer");
    const arrow = faqItem.querySelector(".arrow");
    
    faqItem.classList.toggle("active");
    answer.classList.toggle("active");
    arrow.classList.toggle("rotate");
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
    <div className="main">
      <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>
      
      <NavBar 
        showForm={showForm}
        hideForm={hideForm}
        isLoginFormShown={isLoginFormShown}
        isRegisterFormShown={isRegisterFormShown}
      />
      
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
      
      {/* Main Content */}
      <div id="content" ref={contentRef}>
        {/* Row 1 - Welcome */}
        <div id="row1" className="scroll-container">
          <div id="desc1" className="hidden1">
            <h1>Welcome to DentaEase</h1>
            <h3>Your Smile, Our Priority!</h3>
            <button id="bt-1"><a href="Appointment_booking_form.html">Book an Appointment</a></button>
            <button id="bt-2"><a href="Doctor_Treatment_details.html">Our Doctors & Treatment</a></button>
          </div>
          <div className="hidden" id="img1">
            <img src={dentalClinicInstruments} width="350px" height="200px" alt="Dental Clinic Instruments" />
          </div>
        </div>
        
        {/* Row 2 - Booking */}
        <div id="row2" className="scroll-container">
          <div id="booking" className="hidden1">
            <h1>Easy Online Booking</h1>
            <h2>Need a checkup or treatment? Schedule your appointment with our experienced dentists today!</h2>
            <h3>BE PART OF THE DIGITAL REVOLUTION</h3>
            <button onClick={() => showForm('register')}>Register Now</button>
          </div>
        </div>
        
        {/* Row 3 - Features */}
        <div id="row3" className="scroll-container">
          <h1>Our Best of Key features</h1>
          <div id="grid" className="hidden1">
            <div className="grid-item">
              <img src={icon1} alt="Electronic Patient Records" />
              <h3>Electronic Patient Records</h3>
              <p>All patient data stored digitally on secure servers.</p>
            </div>
            <div className="grid-item">
              <img src={icon2} alt="Appointments and Schedulers" />
              <h3>Appointments and Schedulers</h3>
              <p>Easy to use Appointment Management Module simplifies cabin / chair management.</p>
            </div>
            <div className="grid-item">
              <img src={icon3} alt="Sms and email notifications" />
              <h3>Sms and email notifications</h3>
              <p>Stay connected with your patients. Send SMS and Email notifications.</p>
            </div>
            <div className="grid-item">
              <img src={icon4} alt="Accounts & Cash Management" />
              <h3>Accounts & Cash Management</h3>
              <p>Automatic record keeping of income and expenditure.</p>
            </div>
            <div className="grid-item">
              <img src={icon5} alt="Reporting System" />
              <h3>Reporting System</h3>
              <p>Illegible handwritten prescriptions replaced by printed forms.</p>
            </div>
            <div className="grid-item">
              <img src={icon6} alt="Document Management" />
              <h3>Document Management</h3>
              <p>Digitally stored documents save space, effort and stationery.</p>
            </div>
            <div className="grid-item">
              <img src={icon7} alt="Administrator" />
              <h3>Administrator</h3>
              <p>Manage Doctors, Staff, administrators, etc.</p>
            </div>
            <div className="grid-item">
              <img src={icon8} alt="Inventory Management" />
              <h3>Inventory Management</h3>
              <p>Manage and monitor dental inventory.</p>
            </div>
            <div className="grid-item">
              <img src={icon9} alt="Lab Management" />
              <h3>Lab Management</h3>
              <p>Manage your Dental Lab.</p>
            </div>
          </div>
        </div>
        
        {/* Row 4 - Paperless */}
        <div id="row4" className="scroll-container">
          <div id="desc2" className="hidden1">
            <h2>Why Go paperless ?</h2>
            <ul>
              <li>Enhances communication among doctors, staff, labs, and patients, improving clinic efficiency.</li>
              <li>Ensures clear and organized clinical notes, reducing the risk of errors.</li>
              <li>Simplifies data analysis with advanced dental billing tools.</li>
              <li>Enables easy access to information through dental office management software.</li>
            </ul>
            <button id="plan-btn">View Plan</button>
          </div>
          <div className="hidden" id="img2">
            <img src={goPaperless} width="400px" height="300px" alt="Go Paperless" />
          </div>
        </div>
        
        {/* Row 5 - Easy Booking */}
        <div id="row5" className="scroll-container">
          <div className="hidden" id="img3">
            <img src={easyBooking} width="400px" height="300px" alt="Easy Booking" />
          </div>
          <div id="desc3" className="hidden1">
            <h1>Book appointment in less than 5 seconds !!</h1>
            <ul>
              <li>Efficiently manage patient appointments with user-friendly views and waiting time analysis.</li>
              <li>Color-coded appointment slots for each doctor.</li>
              <li>Automated appointment reminders.</li>
              <li>Convenient online appointment booking option.</li>
            </ul>
            <button id="plan-btn">View Plan</button>
          </div>
        </div>
        
        {/* Row 6 - Patient Communication */}
        <div id="row6" className="scroll-container">
          <div id="desc4" className="hidden1">
            <h2>Strong patient communication</h2>
            <ul>
              <li>Routine checkup reminders at quarterly, half-yearly, annual, or custom intervals.</li>
              <li>Automated appointment reminders for patients at customizable intervals.</li>
              <li>Seamless communication with multiple patients via messages and emails.</li>
              <li>Personalized birthday greetings for patients.</li>
            </ul>
            <button id="plan-btn">View Plan</button>
          </div>
          <div className="hidden" id="img4">
            <img src={communication} width="500px" height="400px" alt="Communication" />
          </div>
        </div>
        
        {/* Row 7 - Security */}
        <div id="row7" className="scroll-container">
          <div className="hidden" id="img5">
            <img src={hippaIcon} width="300px" height="300px" alt="HIPPA Icon" />
          </div>
          <div id="desc5" className="hidden1">
            <h1>Security.Peace of mind.</h1>
            <ul>
              <li>Download your data anytime</li>
              <li>Data Secured on microsoft azure server</li>
              <li>Secured your clinic data to be accessed from fixed location</li>
              <li>Two step authentication Security</li>
            </ul>
          </div>
        </div>
        
        {/* Row 8 - FAQ */}
        <div id="row8" className="scroll-container">
          <h2>Frequently Asked Questions</h2>
          <main>
            <div className="faq-item" onClick={() => toggleFaq(0)}>
              <h3>
                How do I book an appointment?
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
                    <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/>
                  </svg>
                </span>
              </h3>
              <div className="answer">
                <p>You can book online through our website or call our reception desk.</p>
              </div>
            </div>
            
            <div className="faq-item" onClick={() => toggleFaq(1)}>
              <h3>
                Do you accept insurance?
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
                    <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/>
                  </svg>
                </span>
              </h3>
              <div className="answer">
                <p>Yes, we accept most insurance plans. Contact us for details.</p>
              </div>
            </div>
            
            <div className="faq-item" onClick={() => toggleFaq(2)}>
              <h3>
                What treatments do you offer?
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
                    <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/>
                  </svg>
                </span>
              </h3>
              <div className="answer">
                <p>We provide general dentistry, cosmetic treatments, orthodontics, and more.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <div id="footer">
        <p>Copyrights © 2025 DentaEase. All rights reserved.</p>
        <div id="landing_pages">
          <a href="terms.html">Terms and Conditions</a>
          <span>|</span>
          <a href="privacy-policy.html">Privacy and Policy</a>
          <span>|</span>
          <a href="faq.html">FAQ</a>
        </div>
      </div>
    </div>
  );
}

export default Home;