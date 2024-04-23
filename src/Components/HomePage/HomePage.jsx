import React from 'react'
import logo from "../Assets/Images/railway-logo.png"
import LoginSignup from '../RegisterPage/RegisterPage'
import "./HomePage.css"
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
const navigate = useNavigate();

const RegisterPageClick = () => {
  navigate('/Register');
};
const SignupPageClick = () => {
  navigate('/Signup');
};
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
      <h1>Gilbert<br/> Railway Corporation</h1>
      </div>
      <div className='nav-buttons'>
     
      <button className='register-btn' onClick={RegisterPageClick}>Register</button>

      <button className='login-btn' onClick={SignupPageClick}>Signup</button>
      </div>
      </div>

      <div className='heading-text'>
      
      </div>
    </div>
  )
}

export default HomePage
