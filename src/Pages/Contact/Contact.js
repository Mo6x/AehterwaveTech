import React from 'react';
import { useState } from 'react';
import '../Contact/Contact.css';
import Navbar from '../../Components/Navbar/Navbar';



const Contact = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here (e.g., sending the data to the backend)
      console.log(formData);
      // Reset form fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    };
    
  return (
    <div className='Contact-container'>
        < Navbar  />
    <div className='contact-list'>    
    <div className='contact-form'>
      <h1 className='contact-h1'>Contact Us</h1>
       <form onSubmit={handleSubmit}>
      <div className='contact-forms'>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName}  onChange={handleChange} required
        />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}  required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}  required
        />
      </div>
      <div className='contact-forms'>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    <div className='contact-info'>
       <div className='contact-infos'>
         <h1 className='more-detail'>Mail us at support@pericius.com</h1>
         <h1 className='more-detail'>Currently we operate out of USA, Nigeria</h1>
       </div>
       <div className='contact-infos'>
         <h1 className='more-details'>Our address:</h1>
         <h1 className='more-details'>Genius Technologies Private Limited</h1>
         <h1 className='more-details'>hjh</h1>
       </div>
    </div>
  </div>  
  </div> 
  );
}

export default Contact