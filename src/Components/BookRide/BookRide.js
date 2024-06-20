import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './BookRide.css'
import 'react-datepicker/dist/react-datepicker.module.css'
import logo9 from "../Assets/Images/arrow-up.png"
import search from "../Assets/Images/search.png"
import arrowDown from "../Assets/Images/donw-arrow.png"
import { FaCalendarAlt } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';


const BookRide = () => {
  const [desiredDestination, setDesiredDestination] = useState('');
  const [currentDestination, setCurrentDestination] = useState('');
  const [bookingDate, setBookingDate] = useState();
  const [selectedClass, setSelectedClass] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState("");

 
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const railwayusers = JSON.parse(localStorage.getItem('railwayusers'));
    const bookRideData = {
        desiredDestination,
        currentDestination,
        bookingDate: bookingDate.toISOString(),
        selectedClass,
        numberOfSeats: 4,
    };
    localStorage.setItem('bookRideData', JSON.stringify(bookRideData));
    const combinedData = { ...railwayusers, bookingRide: bookRideData };
    console.log('Book Ride:', bookRideData);
    try {
        fetch("http://localhost:8080/railway/addUsers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(combinedData),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    } catch (error) {
        alert("There was an error while logging in");
    }
    navigate("/checkout", { state: bookRideData });
}
{/**
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
     }; */}


function CustomInput({value, onClick}) {
   return(
    <div className='input-container '>
     {/*
         <div className='ride-details-container'>
       <p>Train Available from</p>
       <p>lorem ipsum svhvhd bhsvdy sbsb sdbjsd</p>
       <div className='button-ride-details'>
       <button className='button-back'>Back</button>
       <button className='button-proceed'>Proceed</button>
       </div>
      </div> */}
      
    <h3 style={{
      fontFamily: 'katibeh',
      fontSize: '30px',
      marginBottom: '10px'
    }}>Select Date</h3>
    <input type='text' className='select-datetext' value={value} onClick={onClick} onChange={(e) => setBookingDate(e.target.value)} readOnly></input>
    <div className='date-image-click'> 
    <div className='input-image'>
    <FaCalendarAlt className='facalendar'/>
    </div>
    </div> 
    </div>
   )
};
 return (
    <div className='container'>
       <div className='heading'>
     
          <h3 className='book-ride-text' style={{
            fontFamily: 'katibeh',
            fontSize: '40px',
            marginBottom: '5px'
          }}>Welcome to <br></br>GRC<br></br> Book your train ride here </h3>
          <div className='images' style={{
            width: '0px',
            height: '0px'
          }}>
          <img src={logo9}
          style={
            {
              position: "relative",
              bottom: '90px',
              left: "1030px",
                width:"34px",
                 height: "30px",
                 transform: "rotate(-180deg)",
                 cursor: "pointer"
            }
          } alt=''> 
          </img>
          </div>
        </div>

        <div className='block' style={{
          marginBottom: '50px',
          height: '550px',
          width: '900px',
          backgroundColor: '#089930',
          borderRadius: '10px'
        }}>
        <div className='cont' style={{
          height: '460px',
          width: '800px',
          borderRadius: '10px'
        }}>
  {
          /* <div className='LGA' style={{
          backgroundColor: 'white',
          width: '500px',
          height: '120px',
          margin: 'auto',
          marginTop: '50px',
          alignItems: 'center',
          boxShadow: '35px 35px 100px 0px #00000080',
          borderRadius: '10px',
          padding: 'opx',
          display: 'flex',
          placeItems: 'center',
          

        }}><h2 style={{
          fontSize: '40px',
          padding: '25px'
        }}>Current Residential LGA</h2>
        <img src={arrowDown} alt='' style={{
          alignItems: 'end',
          cursor: 'pointer',
          //  backgroundColor: 'green',
           position: 'relative',
           left: '30px'
        }}></img>
        </div>
      
        <div className='search' style={{
          backgroundColor: 'white',
          width: '250px',
          height: '70px',
          margin: 'auto',
          marginTop: '50px',
          alignItems: 'center',
          boxShadow: '35px 35px 100px 0px #00000080',
          borderRadius: '10px',
          padding: 'opx',
          display: 'flex',
          alignItems: 'center'
        }}><h2 style={{
          textAlign: 'center',
          fontSize: '45px',
          // padding: '0px'
        }}>Search</h2>
      </div> */
    }

      <div className='input-ride-details'>
      <div className='destination-container'> 
      <h3 style={{
        fontFamily: 'katibeh',
        fontSize: '30px',
        marginBottom: '10px',
        marginTop: '0px'
      }}>Desired Destination</h3>
     <select className='select-destination' value={desiredDestination} onChange={(e) => setDesiredDestination(e.target.value)}>
      <option value=''></option>
      <option value='Wole Soyinka Abuja' style={{
        fontSize: '30px'
      }}>Wole Soyinka Abuja</option>

      <option value='Babatunde Raji Fashola Station Ebute Metta' style={{
        fontSize: '30px'
      }}>Babatunde Raji Fashola Station Ebute Metta</option>
      <option value='Bola Ahamed Tinubu Gbagada' style={{
        fontSize: '30px'
      }}>Bola Ahamed Tinubu Gbagada</option>
      </select>
      </div>
      
     <div className='residential-container'> 
      <h3 style={{
        fontFamily: 'katibeh',
        fontSize: '30px',
        marginBottom: '10px',
        marginTop: '0px',
      }}>Current Residential LGA</h3>
     <select className='select-destination' value={currentDestination} onChange={(e) => setCurrentDestination(e.target.value)}>
     <option value=''></option>
     <option value='Wole Soyinka Lagos' style={{
        fontSize: '30px'
      }}>Wole Soyinka Lagos</option>
      <option value='Babatunde Raji Fashola Station Agege' style={{
        fontSize: '30px'
      }}>Babatunde Raji Fashola Station Agege</option>
      <option value='Bola Ahamed Tinubu Apapa' style={{
        fontSize: '30px'
      }}>Bola Ahamed Tinubu Apapa</option>
      </select>
      </div>
      </div>


      {/* <div className='class-container'> 
      <h3 style={{
        fontFamily: 'katibeh',
        fontSize: '30px',
        marginBottom: '10px',
        marginTop: '0px'
      }}>Select Class</h3>
     <select className='select-destination' value={destination} onChange={(e) => setDestination(e.target.value)}>
      <option value=''></option>
      <option value='Lagos' style={{
        fontSize: '25px'
      }}>WoleSoyinka  Lagos</option>
      <option value='Abuja'>Wole Soyinka Abuja</option>
      <option value='Ibadan'>Wole Soyinka Ibadan</option>
      </select>
      </div>


     {/*<div className='current-lga'>
     <select value={currentLGA} onChange={(e) => setCurrentLGA(e.target.value)}>
      <option value=''>--Current LGA --</option>
      <option value='Ibadan'>Ibadan</option>
      <option value='Akure'>Akure</option>
      <option value='Osun'>Osun</option>
      </select>
      </div> */}
      
     

     {/*<div className='select-class'>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
      <option value=''></option>
      <option value='First class'>First Class</option>
      <option value='Second class'>Second Class</option>
      <option value='Third Class'>Third Class</option>
      </select>
      </div>  
    */}
    <div className='calendar'>
      <label>
      <ReactDatePicker 
      selected={bookingDate}
      onChange={date=>setBookingDate(date)} customInput={<CustomInput/>}/></label>
  </div>  

 {/* <div className='select-class'>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
      <option value=''></option>
      <option value='First class'>First Class</option>
      <option value='Second class'>Second Class</option>
      <option value='Third Class'>Third Class</option>
      </select>
  </div> */}
  <div className='class-container'> 
      <h3 style={{
        fontFamily: 'katibeh',
        fontSize: '30px',
        marginBottom: '10px',
        marginTop: '0px'
      }}>Select Class</h3>
     <select className='select-destination' value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
      <option value=''></option>
      <option value='first-class'>First Class</option>
      <option value='second-class'>Second Class</option>
      <option value='third-class'>Third Class</option>
      </select>
      </div>
    <button className='bookride-btn' onClick={handleSubmit}>Find A Train</button>
        </div>
        </div>
        </div>
    
  )



}
export default BookRide
