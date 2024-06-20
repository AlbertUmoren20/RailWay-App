import React, { useState } from 'react'
import "./ContactUs.css"
import { FaMap } from 'react-icons/fa'; 
import { FaPhone } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';



const ContactUs = () => {
  const [email, setEmail] = useState('');

  const contactMessage = () => {
    fetch(`http://localhost:8080/railway/contactUsEmail?email=${encodeURIComponent(email)}`)
      .then(response => response.text())
      .then(data => {
        alert(data); // Display success message
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email');
      });
  };

  return (
    <div className='contact-container'>
      <div className='contact-body'>
      <div className='contact-sections'>
      <div className='contact-icons-text'>
      <div className='contact-address'>
       <FaMap className='faMap' style={{
        fontSize: '50px',
        marginBottom:'0px',
        color: ' #089930'
       }}/>
       <h5 style={{
        marginTop: '0px',
        marginBottom: '0px'
       }}>ADDRESS</h5>
       <p style={{
        marginTop: '0px',
        marginBottom: '0px'
       }}>33 Oworonshoki obalowa way, Bariga Lagos </p>
      </div>
     <div className='contact-number'>
     <FaPhone className='faPhone' style={{
      fontSize: '50px',
      color: ' #089930'
     }}/>
     <h5 style={{
      marginTop: '0px',
        marginBottom: '0px'
     }}>PHONE NUMBER</h5>
     <p style={{
      marginTop: '0px',
        marginBottom: '0px'
     }}>+234 903 304 1866</p>
     </div>
     <div className='contact-email'>
     <FaMessage className='faEmail' style={{
      fontSize: '50px',
      color: ' #089930'
     }}/>
     <h5 style={{
      marginTop: '0px',
        marginBottom: '0px'
     }}>EMAIL</h5>
     <p style={{
      marginTop: '0px',
        marginBottom: '0px'
     }}>umorengilbert17@ gmail.com</p>
     </div>
      </div>
      <div style={{
        backgroundColor: 'gray',
        width: '1px',
        height: '610px',
        marginRight: '42px'
      }}>
      </div>
      <div className='contact-inputpage'>  
      <h3 style={{
        fontFamily: 'katibeh',
        fontSize: '40px',
        marginBottom: '10px'
      }}>SEND US A MESSAGE</h3>
      <p style={{
        marginTop: '0px',
        fontFamily: 'katibeh',
        fontSize: '30px'
      }}>Booking trouble? No worries! Reach out to our friendly customer support team for a smooth ride. </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
      <input 
      className='contact-input-name'
      type='text'
      name='username'
      placeholder= 'Enter Your Name'
      required/>
      <input 
      className='contact-input-email'
      type='email'
      name='email'
      placeholder= 'Enter Your Email'
      value={email}
      onChange={e => setEmail(e.target.value)}
      required/>
      <input 
      className='contact-input-Message'
      type='message'
      name='message'
      placeholder= 'Enter Your Message'
      required/>
      </div>
      <button className='contact-btn' onClick={contactMessage}>Submit</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUs
