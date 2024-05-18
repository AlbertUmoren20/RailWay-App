import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import './BookRide.css'
import 'react-datepicker/dist/react-datepicker.module.css'
import logo9 from "../Assets/Images/arrow-up.png"
import search from "../Assets/Images/search.png"
import arrowDown from "../Assets/Images/donw-arrow.png"
import { FaCalendarAlt } from 'react-icons/fa';


const BookRide = () => {
  const [destination, setDestination] = useState('');
  const [currentLGA, setCurrentLGA] = useState('');
  const [selectedDate, setSelectDate] = useState(null);
  const [selectedClass, setSelectedClass] = useState('');

  function handleSubmit(event) {
    event.preventDefault();


  const bookRideData = {
    destination,
    currentLGA,
    // selectedDate,
    selectedClass,
  };

  localStorage.setItem('bookRideData', JSON.stringify(bookRideData));
  console.log('Book Ride:', bookRideData)// Log Data to console
}

function CustomInput({value, onClick}) {
   return(
    <div className='input-container'>
    <input type='text' className='' value={value} onClick={onClick} readOnly></input>
    <div className='date-image-click'>
    <div className='input-image'>
    <FaCalendarAlt/>
    </div>
    </div>
    </div>
   )
}
  
  return (
    <div className='container'>
       <div className='heading'>
          <h3 className='book-ride-text' style={{
            fontFamily: 'katibeh',
            fontSize: '40px'
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
          <img src={search}
           style={
            {
            position: 'relative',
            left: '1500px',
            bottom: '70px',
            width: '60px',
            height: '59px',
            backgroundColor: 'green',
            borderRadius: '50px',
            cursor: 'pointer'
          }
        } alt=''>
          </img>
          </div>
        </div>
        <div className='block' style={{
          height: '500px',
          backgroundColor: '#089930'
          // marginBottom: '10px'
        }}>
        <div className='cont' style={{
          height: '420px',
        }}>

        <div className='dropdown'>
      
        
        </div>

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
     <div className='destination'> 
     <select value={destination} onChange={(e) => setDestination(e.target.value)}>
      <option value=''>--Select Destination</option>
      <option value='Lagos'>Lagos</option>
      <option value='Abuja'>Abuja</option>
      <option value='Ibadan'>Ibadan</option>
      </select>
      </div>

     <div className='current-lga'>
     <select value={currentLGA} onChange={(e) => setCurrentLGA(e.target.value)}>
      <option value=''>--Current LGA --</option>
      <option value='Ibadan'>Ibadan</option>
      <option value='Akure'>Akure</option>
      <option value='Osun'>Osun</option>
      </select>
      </div>

      <div className='select-class'>
      <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
      <option value=''></option>
      <option value='First class'>First Class</option>
      <option value='Second class'>Second Class</option>
      <option value='Third Class'>Third Class</option>
      </select>
      </div>

      <div className='calendar'>
      <label>
      <ReactDatePicker 
      selected={selectedDate}
      onChange={date=>setSelectDate(date)} customInput={<CustomInput/>}/></label>
      </div>
      <button className='bookride-btn' onClick={handleSubmit}>Find A Train</button>
      
      </div>
      

        </div>
        </div>
        </div>
    
  )
}

export default BookRide
