import logo from './logo.svg';
import './App.css';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';
import BookRide from './Components/BookRide/BookRide';
import Faq from './Components/FAQ/Faq';
import ContactUs from './Components/ContactUs/ContactUs';
 

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Register' element={<RegisterPage/>}/>
    <Route path='/Signup' element={<SignupPage/>} />
    <Route path='/bookride' element={<BookRide/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/contactus' element={<ContactUs/>} />
    </Routes>

    </Router>

     
  );
}

export default App;
