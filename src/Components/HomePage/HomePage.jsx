import React, { useState } from 'react'
import logo from "../Assets/Images/railway-logo.png"
import LoginSignup from '../RegisterPage/RegisterPage'
import "./HomePage.css"
import "../RegisterPage/RegisterPage"
import { useLocation, useNavigate } from 'react-router-dom'
import logo1 from "../Assets/Images/book-ride.png"
import logo2 from "../Assets/Images/faq.png"
import logo3 from "../Assets/Images/contact us.png"
import logo4 from "../Assets/Images/terms and conditions.png"
import logo5 from "../Assets/Images/privacy.png"
import logo6 from "../Assets/Images/timetable.png"
import logo7 from "../Assets/Images/schedule.png"
import logo8 from "../Assets/Images/tickets1.png"

const HomePage = () => {

  const location = useLocation();
  const fullName = new URLSearchParams(location.search).get("fullName");
 const navigate = useNavigate();

const RegisterPageClick = () => {
  navigate('/Register');
};
const SignupPageClick = () => {
  navigate('/Signup');
};
const BookRideClick = () => {
  navigate('/bookride')
}
const FaqClick = () => {
  navigate('/faq')
}
const contactusClick = () => {
  navigate ('/contactus')
}
  return (
    <div className='home-container'>
      <div className='navbar'>
      <div className='logo-title'>
      <img src={logo} style={
        {
            width:"93px",
             height: "90px"
        }
      } alt=''> 
      </img>
      <h1 style={{
      }}>Gilbert<br/> Railway Corporation</h1>
      </div>
      <div className='nav-buttons'>
      <button className='home-register-btn' onClick={RegisterPageClick}>Register</button>
      <button className='home-signup-btn' onClick={SignupPageClick}>Signup</button>
      </div>

      </div>
      <div className='heading-text'>
      <h2 className='home-text'>
      Welcome to Gilbert Railway Corporation (GRC), 
      an effecient and fast way to travel within Nigeria via trains.
       Select your train, the date of your journey, book your ticket and all is set.
       </h2>
      </div>
      <div className='home-iconlinks'>
      <div className='bookride homeicon' >
      <img src={logo1} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Book Ride</h5>
      </div>
      <div className='f-a-q homeicon'>
      <img src={logo2} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>FAQ</h5>
      </div>
      <div className='contac-us homeicon' >
      <img src={logo3} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Contact Us</h5>
      </div>
      <div className='privacy-policy homeicon'>
      <img src={logo4} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Privacy Policy</h5>
      </div>
      <div className='terms homeicon'>
      <img src={logo5} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Terms and Condition</h5>
      </div>
      <div className='timetable homeicon'>
      <img src={logo6} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Train Timetable</h5>
      </div>
      
      </div>
      <hr></hr>
      <div className='block-elements'>
      <div className='block1'>
      <h4>Changes to train time</h4>
      <hr className='linethrough'></hr>
      <p className='block1-text'>Check your route before booking</p>
      <img src={logo7} style={{
        width: "94px",
        height: "93px",
        position: "relative",
        left: "160px"
      }} alt=''>
      </img>
      <button className='more-info'>Find out more</button>
      </div>
      <div className='block2'>
      <h4>Terms and Condition</h4>
      <hr className='linethrough' style={{
        backgroundColor: '#27374D'
      }}></hr>
      <button className='readmore-info'>Read more</button>
      <img src={logo5} style={{
        color: 'white',
       width: '94px',
       height: '93px',
       position: 'relative',
       right: '140px',
       top: '220px'
      }} alt=''></img>
      </div>
      <div className='block1'>
      <h4>Try E-tickets</h4>
      <hr className='linethrough'></hr>
      <p className='block1-text'>A more conveinet way to get your tickets</p>
      <button className='readmore-info'>Find out more</button>
      <img src= {logo8} style={{
       position: 'relative',
       top: '150px',
       right: '150px'
      }} alt=''/>
      <img src= {logo8} style={{
       position: 'relative',
       top: '55px',
       left: '30px',
      }} alt=''/>
      </div>
      </div>


      <div className='footer'>
      </div>
    </div>
  )
}

export default HomePage
