import logo from './logo.svg';
import './App.css';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';
import BookRide from './Components/BookRide/BookRide';
import Faq from './Components/FAQ/Faq';
import ContactUs from './Components/ContactUs/ContactUs';
import PayStackIntegration from './Components/PayStackIntegration/PayStackIntegration';
import UserPage from './Components/UserPage/UserPage';
 

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<RegisterPage/>}/>
    <Route path='/Signup' element={<SignupPage/>} />
    <Route path='/homepage' element={<HomePage/>}/>
    <Route path='/user' element={<UserPage/>}/>
    <Route path='/bookride' element={<BookRide/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/contactus' element={<ContactUs/>} />
    <Route path='/payment' element={<PayStackIntegration/>} />
  
    </Routes>

    </Router>

     
  );
}

export default App;
