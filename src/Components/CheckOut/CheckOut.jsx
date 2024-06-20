import React, { useState } from 'react'
import './CheckOut.css'
import { useLocation, useNavigate } from 'react-router-dom'
import image from '../Assets/Images/railway-logo.png'
import { FaX } from 'react-icons/fa6';

const CheckOut = () => {
    const location = useLocation();
    // const train = location.state;
    const bookRideData = JSON.parse(localStorage.getItem('bookRideData'));
    const navigate = useNavigate();

    // const {selectedDate} = train;
    // const formattedDate = new Date(selectedDate).toLocaleDateString();

    const [availableSeats, setAvailableSeats] = useState("");
    const [passengers, setPassengers] = useState("");
    const [selectedCoach, setSelectedCoach] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const amount = 2000;
    const trainfee = 50;

    // Corrected the calculation for the total price
    const price = (amount * availableSeats) + trainfee;

    const PaymentPageClick = () => {
      if(availableSeats && selectedCoach) {
        navigate('/payment');
      } else {
        setShowPopup(true)
      }
      
    };

  return (
    <div className='checkout-container'>
    <div className="logo-title" style={{
      position: 'relative',
      left: '400px'
    }}>
    <img src={image} style={{
             width:"93px",
             height: "90px"
        }} alt='Railway Logo'> 
      </img>
      <h3>Gilbert<br/>Railway Corporation</h3>
    </div>
    <div className='checkout'>
    <div className='checkout-box'>
     <div className='checkout-left'>

     <table style={{
      width:"1000px", 
      height: "600px",
    }}>
     <tr>
       <th>Destination:</th>
       <td>{bookRideData.desiredDestination}</td>
     </tr>
     <tr>
       <th>Current LGA:</th>
       <td>{bookRideData.currentDestination}</td>
     </tr>
     <tr>
       <th>Selected Class:</th>
       <td>{bookRideData.selectedClass}</td>
     </tr>
     <tr>
       <th>Date of Departure:</th>
       <td>{new Date(bookRideData.bookingDate).toLocaleDateString()}</td>
     </tr>
     <tr className='avail-coach'>
       <th>Coach/Available: *</th>
       <td>
       
       <select className='select-coach' required 
       value={selectedCoach}
       onChange={(e) => setSelectedCoach(e.target.value)}>
     <option value=''></option>
     <option value='Coach-1' style={{
        fontSize: '30px'
      }}>COH1</option>
      <option value='Coach-2' style={{
        fontSize: '30px'
      }}>COH2</option>
      <option value='Coach-3' style={{
        fontSize: '30px'
      }}>COH3</option>
      </select>
        </td>
       <td>
      {/* Commented out the unused select element */}
       </td>
     </tr>
     </table>
     </div>

     <div className='price-checkout'>
     <h3 style={{
      textAlign: 'center',
      fontFamily: 'katibeh'
     }}>Price CheckList $</h3>

     <span className='prc'>Price: </span>
     <button className='price'>{amount}
     </button>
     <div className='passenger-checkout'>
     <span className='prc'>Passenger: *</span>
     <input className='passenger-count' value={availableSeats} onChange={(e) =>{
      setAvailableSeats(e.target.value)
     }}>
     </input>
     </div>
     <div className='prc-box'>
     <span className='prc'>Other fee $:</span>
     <button className='fee-count'>{trainfee}
     </button>

     <div className='total'>
     <button className='total-btn'>{price}</button>
     </div>
     </div>
     
    </div>
      </div>
      <button className='btn-payment' onClick={PaymentPageClick}>Proceed to Payment</button>
      {showPopup && (
        <div className='popup'>
        <div className='popup-content'>
        <p>Please fill in all the required fields before proceeding to payment.</p>
        <span className="close-button" onClick={() => setShowPopup(false)}>
        {/** &times;*/}
        <FaX className= "close-pop" style={{
          fontSize: '30px'
        }}/>
        </span>
        </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default CheckOut
