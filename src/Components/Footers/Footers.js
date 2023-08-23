import React from 'react'
import '../Footers/Footers.css';
import Logo from '../../assert/logo.png';
import Linkedin from '../../assert/linkedin.png';
import Facebook from '../../assert/facebook.png';
import Twitter from '../../assert/twitter.png';
import Instagram from '../../assert/instagram.png';


const Footers = () => {
     
   return (
    <div className='Footes-container'>
        <div className='line'></div>
        <div className='Footers-detail'>
           <img src={Logo} alt='company logo' />
           <p>AetherWave Technologies Limited: @2022 All Right Reserved.</p>
        </div>
        <div className='social-details'>
         <img src={Linkedin} alt='linkedin logo' />
         <img src={Facebook} alt='facebook logo' />
         <img src={Twitter} alt='twitterlogo' />
         <img src={Instagram} alt='instagram logo' />
        </div>
    </div>
  )
}

export default Footers