import React, { useState } from "react";
import './RegisterPage.css'
import image from '../Assets/Images/railway-logo.png'
import { useNavigate } from "react-router-dom";


const RegisterPage = () => { 
  const [isRegistered, setIsRegistered] = useState(false);
  const[fullName, setfullName] = useState("")
  const[email, setemail] = useState("")
  const[password, setpassword] = useState("")

   const navigate = useNavigate();
    const SignupPageClick = () => {
     navigate('/Signup');
    
};
const UserPageClick = () => {
navigate('/user');
};
 
     {/*const HomepageClick = () => {
      navigate('/homepage');
     }
    */}



     const handleSubmit = (event) => {
      event.preventDefault();
      const railwayusers = {fullName, email, password}
        localStorage.setItem('railwayusers', JSON.stringify(railwayusers));
        // console.log('Form Submitted Successfully!', formData);
        try {
           fetch("http://localhost:8080/railway/addUsers",
        {
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(railwayusers)
      }). then(() => {
        console.log("New User Added")
        navigate(`/user?fullName=${fullName}`); //Redirect to a new page
      })
        } catch (error) {
          alert("There was an error while logging in")
        }
        
     };

    
    //  const formchange = (event) => {
    //    const {value,name} = event.target
    //    setFormData((prev)=>{
    //      return({
    //        ...prev,
    //        [name] : value
    //      })
    //    })
    //  }


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
       <form className="form-inputs" >
       <div className="input-field">
       <label htmlFor="fullName"></label>
       <input 
       type="text"
       className="fullName"
       value={fullName}
       placeholder=" FULL NAME"
       name="fullName"
       onChange={(e) => setfullName(e.target.value)}
      required
        />
       </div>

       <div className="input-field">
       <label htmlFor="email"></label>
       <input 
       type="text"
       className="email"
       value={email}
       onChange={(e) => setemail(e.target.value)}
       placeholder=" EMAIL"
       name="email"
        required />
       </div>
       
       <div className="input-field">
       <label htmlFor="password"></label>
       <input 
       type="password"
       className="password"
       value={password}
       onChange={(e) => setpassword(e.target.value)}
       placeholder=" PASSWORD"
       name="password"
       required />
       </div>
       <div className='nav-buttons'>
      <button className='register-btn' onClick={handleSubmit}>Register</button>
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
