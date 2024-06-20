import {React, useState} from 'react'
import "./PayStackIntegration.css"
import PayStackPop from '@paystack/inline-js'
import { useLocation } from 'react-router-dom'
import QRCode from 'react-qr-code'

const PayStackIntegration = () => { 
  const location = useLocation();
const [email, setEmail] = useState("");
const [amount, setAmount] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [idNumber, setIdNumber] = useState("");
const [firstName, setFirstName] = useState("");


const payWithPayStack = async (e) => {
  e.preventDefault();
  const paystack = new PayStackPop();
  paystack.newTransaction({
    key: "pk_test_904d25d701d310aff5a21dab8582242d5f6ddcfb",
    amount: amount * 100,
    email,
    firstName,
    phoneNumber,
    idNumber,
    onSuccess: async (transaction) => {
      // Verify the transaction status
      const verifyTransactionUrl = `https://api.paystack.co/transaction/verify/${transaction.reference}`;
      const verifyTransactionOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer pk_test_904d25d701d310aff5a21dab8582242d5f6ddcfb`
        }
      };
        const response = await fetch(verifyTransactionUrl, verifyTransactionOptions);
        const data = await response.json();
        if (data.status) {
          // Send email confirmation
          paymentEmail(email, transaction);
        }
      

      let message = `payment Complete Reference ${transaction.reference}`
      console.log(message)
      setFirstName("")
      setEmail("")
      setIdNumber("")
      setphoneNumber("") 
      setAmount("")
    },
    oncancel(){
      alert("Transaction Cancelled")
    }
  })
}
const paymentEmail = async (transaction) => {
  console.log('Email', email);
 
  const userData = {
    name: firstName,
    email,
    transactionReference:transaction.reference,
  };

  const userDataJson = JSON.stringify(userData);
try {
  const response= await fetch(`http://localhost:8080/railway/qr-code?userData=${encodeURIComponent(userDataJson)}`)
  if(!response.ok) {
    throw new Error(`Error generating QR code: ${response.status}`);
  }
  const qrCodeImage = await response.blob();
   
      // Attach the QR code to the email
      const emailBody = `Dear ${firstName},\n\nPlease find attached your payment QR code.\n\nBest regards, Railway App`;
      const emailSubject = 'Payment QR Code';
      const emailAttachment = new Blob([qrCodeImage], {
        type: 'image/png',
      });
      const formData = new FormData();
      formData.append('emailBody', emailBody);
      formData.append('emailSubject', emailSubject);
      formData.append('emailAttachment', emailAttachment);
      
      const emailResponse = await fetch(`http://localhost:8080/railway/paymentEmail?email=${encodeURIComponent(email)}`, {
         method: 'POST',
          body: formData,
        }
  );
 const emailData = await emailResponse.text();
  alert(emailData);
}
catch(error) {
  console.error('Error:', error);
  alert('Failed to generate QR code');
}}

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
      <input type="tel" onChange={(e) =>setAmount(e.target.value)} className='amount' id="amount" required />
    </div>
    <div className="form-group">
      <label htmlFor="phonenumber">Phone Number</label>
      <input type="tel" value={phoneNumber} onChange={(e) =>setphoneNumber(e.target.value)} className='phone-number' id="phonenumber" required />
    </div>

    <div className="form-group">
    <select className='identification'  onChange={(e) =>setIdNumber(e.target.value)} required>
     <option value=''></option>
      <option value='National Identification Number' style={{
        fontSize: '10px'
      }}>NIN</option>
      <option value='Drivers License' style={{
        fontSize: '10px'
      }}>Driver License</option>
      <option value='Phone Number' style={{
        fontSize: '10px'
      }}>Phone Number</option>
      </select>
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
