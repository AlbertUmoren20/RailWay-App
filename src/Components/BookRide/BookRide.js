import React, { useState } from 'react';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import './BookRide.css'
import logo9 from "../Assets/Images/arrow-up.png"
import search from "../Assets/Images/search.png"
import arrowDown from "../Assets/Images/donw-arrow.png"

const BookRide = () => {
    const [showDropdown, setShowDropdown] = useState(false);
   
    const handleImageClick = () => {
      setShowDropdown(!showDropdown);
      console.log(showDropdown)
    }
    const handleItemClick = (event) => {
      event.preventDefault();
      setShowDropdown(false);
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

        <div className='desire-dest' 
        style={
          {
          // backgroundColor: 'white',
          // width: '400px',
          // height: '120px',
          // margin: 'auto',
          // marginTop: '20px',
          // alignItems: 'center',
         
          // borderRadius: '10px',
          // padding: 'opx',
          // placeItems: 'center',
        }
      } 
      >
      <input 
      form='dropdown' 
      className='dropdown' 
      type='dropdown' 
      placeholder='Desired Destination'
       style={
        {
        width: '400px',
        height: '120px',
        margin: 'auto',
        marginLeft: '170px',
        marginTop: '10px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '50px',
        textAlign: 'center',
        // padding: '10px',
        fontFamily: 'katibeh',
        boxShadow: '35px 35px 100px 0px #00000080'
      }
    }>
    
    </input>
        </div>

        <div className='LGA' style={{
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
        </div>
        </div>
        </div>
        </div>
    
  )
}

export default BookRide
