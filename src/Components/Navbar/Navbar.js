import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assert/logo.png';



const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
        <div className="navbar-logo">
           <img src={logo} alt='Company-logo' />
           <h1 className='appgenius'>AETHERWAVE <span className='techs'>TECHNOLOGIES</span></h1>
         </div>

      <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/About">About-Us</a></li>
        <li className="navbar-item"><a href="/Services">Services</a></li>
        <li className="navbar-item"><a href="/Impact">Impact</a></li>
        <li className="navbar-item"><a href="Contact">Contact-Us</a></li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`} />
        <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`} />
        <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`} />
      </div>
    </div>
  )
}




export default Navbar
