import logo from './logo.svg';
import './App.css';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Components/SignupPage/SignupPage';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/Register' element={<RegisterPage/>}/>
    <Route path='/Signup' element={<SignupPage/>} />
    </Routes>

    </Router>

     
  );
}

export default App;
