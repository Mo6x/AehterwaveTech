import React from 'react'
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Community from '../../Components/Community/Community';
import Footer from '../../Components/Footer/Footer';
import Footers from '../../Components/Footers/Footers';



const About = () => {
  return (
    <div className='About-container'>
       <Navbar />
       <div className='About-services'>
          <h1 className='highlight'>Who we are</h1>
          <p className='who-we-are'>
          The AetherWave Technologies, Are virtual assistant's ability to render support in any specific technology areas may depend on our expertise and skills. It's essential to communicate your requirements clearly and ensure that the AetherWave Technologies has the necessary knowledge to provide effective assistance.
          This list is not exhaustive, as technology is a vast field, and AetherWave Technologies can adapt to various specific needs and requirements. Depending on your requirements, we can cover different aspects of technology support for individuals and businesses.
          </p>
       </div>
       <Community />
       <Footer />
       <Footers />
    </div>
  )
}

export default About