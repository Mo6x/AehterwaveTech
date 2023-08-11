import React from 'react';
import '../Navbar/Navbar.css';
import logo from '../../assert/logo.png';
import Avater from '../../assert/noavatar.jpg';
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <div className='navbar-section'>
            <div className='navbe-img'>
              <img src={logo} alt='Company-logo' />
              <h className='appgenius'>Genius Technologies</h>
            </div>
            <div className='Navbar-lists'> 
               <ul>
                <li> <Link  className="link" to="/">Home</Link> </li>
                <li> <Link  className="link" to="/About">About-Us</Link> </li>
                <li> <Link  className="link" to="/Services">Services</Link></li>
                <li> <Link  className="link" to="/Impact">Impact</Link> </li>
                <li> <Link  className="link" to="/Contact">Contact-Us</Link></li>
               </ul>
            </div>
              <div className='avater-img'>
               <img src={ Avater} alt='avatar images' />
              </div>
        </div>
    </div>
  )
}

export default Navbar
