import React, { useState } from 'react'
import logo from "../Assets/Images/railway-logo.png"
import LoginSignup from '../RegisterPage/RegisterPage'
import "./UserPage.css"
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
import { FaCaretDown } from 'react-icons/fa'; 

const UserPage = () => {
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
const HomePageClick = () => {
  navigate ('/')
}

const TrainTimetableClick = () => {
  navigate('/traintimetable')
}
const UsersTicketsClick = () => {
  navigate('/mytickets')
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
      <div className='dropdown'>
     <button className='btn-username-logout dropbtn' style={{
      height: '70px',
      width: '450px',
      fontSize: '50px',
      position: 'relative',
      right: '100px',
      padding: '0px',
      fontFamily: 'katibeh',
      placeItems: 'center',
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer'
     }}>{fullName}
     <FaCaretDown style={{
      position: 'relative',
      fontSize: '25px'
     }}/>
     </button>
     <div className="dropdown-content">
     <a onClick={UsersTicketsClick}>My Tickets</a>
     <a onClick={HomePageClick}>LOG OUT</a>
     <a href="#"></a>
     </div>
     </div>
      {/*<div className='username-logout' style={{
        display: 'flex',
        cursor: 'pointer',
        position: 'relative',
      }}>
      <h2 style={{
       position: 'relative',
       right: '100px',
      }}>{fullName}</h2>
      <FaCaretDown style={{
        position: 'relative',
        right: '90px',
        top: '27px',
        fontSize: '25px',
      }}/>
    </div> */}
    </div> 

      <div className='heading-text'>
      <marquee direction="left">
      <h2 className='home-text'>
        Welcome to Gilbert Railway Corporation (GRC), 
       an effecient and fast way to travel within Nigeria via trains.
        Select your train, the date of your journey, book your ticket and all is set.
        </h2>
      </marquee>
      </div>
      <div className='home-iconlinks'>
      <div className='bookride homeicon' onClick={BookRideClick}>
      <img src={logo1} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>Book Ride</h5>
      </div>
      <div className='f-a-q homeicon' onClick={FaqClick}>
      <img src={logo2} style={{
        width: '45px',
        height: '45px'
      }} alt=''
      />
      <h5>FAQ</h5>
      </div>
      <div className='contac-us homeicon' onClick={contactusClick}>
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
      <div className='timetable homeicon' onClick={TrainTimetableClick}>
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

export default UserPage
