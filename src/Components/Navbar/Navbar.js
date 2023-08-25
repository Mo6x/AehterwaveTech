import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assert/logo.png';
import Avater from '../../assert/noavatar.jpg';
import { Link } from "react-router-dom";



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  
  return (
    <div className='Navbar-container'>
        <div className='navbar-section'>
            <div className='navbe-img'>
              <img src={logo} alt='Company-logo' />
              <h1 className='appgenius'>AETHERWAVE  TECHNOLOGIES</h1>
            </div>
            <div className='Navbar-lists'> 
              <div className='list-link'>
                <div isModalOpen={isModalOpen} onClose={closeModal} className='close-button'>X</div>
               <ul>
                <li> <Link  className="link" to="/">Home</Link> </li>
                <li> <Link  className="link" to="/About">About-Us</Link> </li>
                <li> <Link  className="link" to="/Services">Services</Link></li>
                <li> <Link  className="link" to="/Impact">Impact</Link> </li>
                <li> <Link  className="link" to="/Contact">Contact-Us</Link></li>
               </ul>
               </div>
              <div className='avater-img' onClick={openModal}>
               <img src={ Avater} alt='avatar images' />
              </div>
             </div>
        </div>
    </div>
  )
}

export default Navbar
