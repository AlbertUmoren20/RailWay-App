import React, { useState } from "react";
import './RegisterPage.css'
import image from '../Assets/Images/railway-logo.png'
import { useNavigate } from "react-router-dom";


const RegisterPage = () => { 
   const navigate = useNavigate();
    const SignupPageClick = () => {
     navigate('/Signup');
};
     {/*const HomepageClick = () => {
      navigate('/homepage');
     }
    */}

    const [formData, setFormData] = useState({
      fullName: '',
      nin: '',
      password: ''
    }) 


     const handleSubmit = (event) => {
      event.preventDefault();
      if(formData.fullName && formData.nin && formData.password) {
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form Submitted Successfully!', formData);
        navigate(`/homepage?fullName=${formData.fullName}`); //Redirect to a new page
      }
      else{
        // console.error('Invalid form data!');
      }
     };
    
     const formchange = (event) => {
       const {value,name} = event.target
       setFormData((prev)=>{
         return({
           ...prev,
           [name] : value
         })
       })
     }


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
       <form className="form-inputs" onClick={handleSubmit}  >
       <div className="input-field">
       <label htmlFor="fullName"></label>
       <input 
       type="text"
       className="fullName"
       value={formData.fullName}
       placeholder=" FULL NAME"
       name="fullName"
       onChange={formchange}
        required
        />
       </div>

       <div className="input-field">
       <label htmlFor="nin"></label>
       <input 
       type="text"
       className="nin"
       value={formData.nin}
       onChange={formchange}
       placeholder=" NIN"
       name="nin"
        required/>
       </div>
       
       <div className="input-field">
       <label htmlFor="password"></label>
       <input 
       type="password"
       className="password"
       value={formData.password}
       onChange={formchange}
       placeholder=" PASSWORD"
       name="password"
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
