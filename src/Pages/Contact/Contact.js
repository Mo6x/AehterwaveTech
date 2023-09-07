import React from 'react';
import { useRef } from 'react';
import '../Contact/Contact.css';
import emailjs from '@emailjs/browser';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Footers from '../../Components/Footers/Footers';



const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zunbzrh', 'template_cyi0f5g', form.current, 'L7LX2tiCtz1VHuMZyC0tu')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
        e.target.reset();
    };

  return (
    <div className='Contact-container'>
        < Navbar  />
    <div className='contact-list'>    
    <div className='contact-form'>
      <h1 className='contact-h1'>Contact Us</h1>
      <div className='errorHandle'> 
         {/* {errorBlue(<div className='errorBlue'>sent successfuly</div>)}
         {errorRed(<div className='errorRed'>message not sent</div>)} */}
      </div>
       <form  ref={form} onSubmit={sendEmail}>
      <div className='contact-forms'>
        <label htmlFor="firstName">FirstName</label>
        <input type="text" id="firstName" name="firstName" required
        />
        <label htmlFor="lastName">LastName</label>
        <input type="text" id="lastName" name="lastName" required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>

    <div className='contact-info'>
       <div className='contact-infos'>
         <h1 className='more-detail'>Mail us at <span className='gmail'>Aetherwave.info@gmail.com</span> </h1>
         <h1 className='more-detail'>Currently we operate out of Nigeria, USA</h1>
       </div>
       <div className='contact-infos'>
         <h1 className='more-details'>Our address: 74 Allen Ave, Allen 101233, Ikeja, Lagos Nigeria</h1>
         <h1 className='more-details'>AehterWave Technologies Private Limited</h1>
         <div className='contact-details'>
         <h1 className='more-details'>Mobils: Numbers</h1>
         <h1 className='more-details'>+1 (726) 567-0145</h1>
         <h1 className='more-details'>+234 8058960314</h1>
         </div>
       </div>
    </div>
  </div>  
 <Footer />
 <Footers />
  </div> 
  );
}

export default Contact