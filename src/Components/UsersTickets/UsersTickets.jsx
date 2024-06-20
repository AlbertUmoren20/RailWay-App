import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../UsersTickets/UsersTickets.css"
import image from '../Assets/Images/railway-logo.png'

const UsersTickets = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [numberOfSeats, setNumberOfSeats] = useState('')
  const [tickets, setTickets] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
  const email = localStorage.getItem('email')
    console.log(email);
    // if (!email) {
    //   navigate('/register');
    //   return;
    // }
    fetch(`http://localhost:8080/railway/getUsers/${email}`)
      .then(response => response.json())
      .then(data => {
        setTickets(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
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
    <div className='ticket'>
      {tickets.map(ticket => (
        <div key={ticket.id}>
        <div className='ticket-container'>
        <div className='ticket-block'>
        <div className='ticket-details'>
        <div className='tickets-fullname'> 
         Name: {ticket.fullName}
         </div>
         <div className='tickets-email'> 
        Email: {ticket.email}
        </div>
        {ticket.bookingRide && (
          <div className='ticket-info'>
            Number of Seats: {ticket.bookingRide.numberOfSeats} <br></br>
            Current Destination: {ticket.bookingRide.currentDestination} <br></br>
            Desired Destination: {ticket.bookingRide.desiredDestination} <br></br>
            Date: {ticket.bookingRide.bookingDate}
          </div>
        )}
        </div>
        </div>
        </div>
          {console.log(ticket)}
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default UsersTickets