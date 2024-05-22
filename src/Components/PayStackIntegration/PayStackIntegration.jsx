import {React, useState} from 'react'
import "./PayStackIntegration.css"
import PayStackPop from '@paystack/inline-js'

const PayStackIntegration = () => { 

const [email, setEmail] = useState("");
const [amount, setAmount] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [ninNumber, setninNumber] = useState("");
const [firstName, setFirstName] = useState("");

const payWithPayStack = (e) =>{
  e.preventDefault()
  const paystack = new PayStackPop()
  paystack.newTransaction({
    key:"pk_test_904d25d701d310aff5a21dab8582242d5f6ddcfb",
    amount:amount * 100,
    email,
    firstName,
    phoneNumber,
    ninNumber,
    onSuccess(transaction){
      let message = `payment Complete Reference ${transaction.reference}`
      alert(message)
      setFirstName("")
      setEmail("")
      setninNumber("")
      setphoneNumber("") 
      setAmount("")
    },
    oncancel(){
      alert("Transaction Cancelled")
    }
  })
}
  return (
    <div className='payment-container'>
    <h3>Make Payment</h3>
    <form id="paymentForm" className=''>
    <div class="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className='email' id="email-address" required />
    </div>
    <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input type="tel" value={amount} onChange={(e) =>setAmount(e.target.value)} className='amount' id="amount" required />
    </div>
    <div className="form-group">
      <label htmlFor="phonenumber">Phone Number</label>
      <input type="tel" value={phoneNumber} onChange={(e) =>setphoneNumber(e.target.value)} className='phone-number' id="phonenumber" required />
    </div>
    <div className="form-group">
      <label htmlFor="nin">NIN Number</label>
      <input type="tel" value={ninNumber} onChange={(e) =>setninNumber(e.target.value)} className='nin-number' id="Nin-Number" required />
    </div>
    <div className="form-group">
      <label for="first-name">First Name</label>
      <input type="text" value={firstName} onChange={(e) =>setFirstName(e.target.value)} className='firstName' id="first-name" />
    </div>
    <div className="form-submit">
      <button type="submit" onClick={payWithPayStack}> Pay </button>
    </div>
  </form>
  
  <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  )
}

export default PayStackIntegration
