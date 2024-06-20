import React, { useState } from "react";
import './RegisterPage.css'
import image from '../Assets/Images/railway-logo.png'
import { useNavigate } from "react-router-dom";
import Validation from "../Validation/Validation";


const RegisterPage = () => { 
  const [isRegistered, setIsRegistered] = useState(false);
  const[fullName, setFullName] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: ''
  })
   const[errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleInput (event) {
    const {name, value} = event.target;
    setValues((prevValues) => ({...prevValues, [name]: value}));
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
        case "password":
          setPassword(value);
          break;
        default:
          break;
      }
  }

  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

   
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
      const errors = Validation({fullName, email, password});
      setErrors(errors);

       if(Object.keys(errors).length === 0) {
         const railwayusers = {fullName, email, password} 
         localStorage.setItem('railwayusers', JSON.stringify(railwayusers));
         localStorage.setItem('email', email); // Store email for UsersTickets, to fetch data from mysql 
         
        // console.log('Form Submitted Successfully!', formData);
        try {
           fetch("http://localhost:8080/railway/addUsers",
        {
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(railwayusers)
      })
      . then(() => {
        console.log("New User Added");
        navigate(`/user?fullName=${fullName}`); //Redirect to a new page
        
      })
        } catch (error) {
          alert("There was an error while logging in")
        }
     };
       }
       
      
      
      

    
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
       <form className="form-inputs" onSubmit={handleSubmit}>



       <div className="input-field">
       <label htmlFor="fullName"></label>
       <input 
       type="text"
       className="fullName"
       value={values.fullName}
       placeholder=" FULL NAME"
       name="fullName"
       aria-describedby="fullName-tooltip"
       onChange={
        // (e) => setfullName(e.target.value)
        handleInput
      }
      required
        />
        <span id="fullName-tooltip" className="tooltip">
        <ul>
        <li>
        Name must have a Capital Letter
        </li>
        <li>
        Name must have a Small Letter
        </li>
        <li>
        Name must not have Symbols
        </li>
        <li>
        Name must 8-24 characters 
        </li>
        </ul>
       </span>
        {errors.fullName && <p style={{
          color: 'red'
        }}>{errors.fullName}</p>}
       </div>




       <div className="input-field">
       <label htmlFor="email"></label>
       <input 
       type="text"
       className="email"
       value={values.email}
       onChange={
        // (e) => setemail(e.target.value)
        handleInput
      }
       placeholder=" EMAIL"
       name="email"
       aria-describedby="email-tooltip"
      title="Email must be in the format of example@example.com"
      // aria-describedby="email-tooltip"
        required />
        {/*{errors.email && <p style={{
          color: 'red'
        }}>{errors.email}</p>}*/}
        <span id="email-tooltip" className="tooltip">
        <ul>
        <li>
        Email must be in the format of example@example.com
        </li>
        </ul>
       </span>
       </div>
       



       <div className="input-field">
       <label htmlFor="password"></label>
       <input 
       type="password"
       className="password"
       value={values.password}
       aria-describedby="password-tooltip"
       onChange={
        // (e) => setpassword(e.target.value)
        handleInput
      }
       placeholder=" PASSWORD"
       name="password"
       required />

       <span id="password-tooltip" className="tooltip">
       <ul>
       <li>
       Password must have a Capital Letter
       </li>
       <li>
       Password must have a Small Letter
       </li>
       <li>
       Password must not have Symbols
       </li>
       <li>
       Password must contain numbers 
       </li>
       </ul>
      </span>

       {errors.password && <p style={{
        color: 'red'
      }}>{errors.password}</p>}
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
