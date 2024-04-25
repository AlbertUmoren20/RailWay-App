import React, { useState } from "react";
import './RegisterPage.css'
import image from '../Assets/Images/railway-logo.png'
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    // const [action, setAction] = useState("Login") 

    const navigate = useNavigate();
    const SignupPageClick = () => {
     navigate('/Signup');
};

    return(
        <div className="register-container">
        <div className="logo-title">
        <img src={image} style={
            {
                width:"93px",
                 height: "90px"
            }
          } alt=''> 
          </img>
          <h3>Gilbert<br/>Railway Corporation</h3>
        </div>
        <h2>Register</h2>
        <div className="block">
        <div className="cont">
       <div> 
       <form className="form-inputs">
       <div className="input-field">
       <label htmlFor="fullName"></label>
       <input 
       type="text"
       className="fullName"
       placeholder=" FULL NAME"
        required/>
       </div>

       <div className="input-field">
       <label htmlFor="nin"></label>
       <input 
       type="text"
       className="nin"
       placeholder=" NIN"
        required/>
       </div>
       
       <div className="input-field">
       <label htmlFor="password"></label>
       <input 
       type="password"
       className="password"
       placeholder=" PASSWORD"
       required />
       </div>
       <div className='nav-buttons'>
      <button className='register-btn'>Register</button>
      </div>
       </form>
       </div>
     </div>
      </div>
      <h4>Already have an account? Click <span style={{color: "green", cursor: "pointer"}} onClick={SignupPageClick}>Sign Up</span></h4>
      </div>
    )
}
 export default RegisterPage;
