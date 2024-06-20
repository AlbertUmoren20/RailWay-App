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
import TrainTimetable from './Components/TrainTimetable/TrainTimetable';
import CheckOut from './Components/CheckOut/CheckOut';
import UsersTickets from './Components/UsersTickets/UsersTickets';
 
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Signup' element={<SignupPage/>} />
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/user' element={<UserPage/>}/>
    <Route path='/bookride' element={<BookRide/>} />
    <Route path='/faq' element={<Faq/>} />
    <Route path='/contactus' element={<ContactUs/>} />
    <Route path='/payment' element={<PayStackIntegration/>} />
    <Route path='/traintimetable' element={<TrainTimetable/>} />
    <Route path='/checkout' element={<CheckOut/>} />
    <Route path='/mytickets' element= {<UsersTickets/>} />
  
    </Routes>

    </Router>

     
  );
}

export default App;
