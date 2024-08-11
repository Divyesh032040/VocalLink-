/* eslint-disable no-unused-vars */

import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Register from '../src/pages/Register/Register'
import Home from './pages/home/Home'
import Navigation from './Components/Shared/Navigation/Navigation'
import LogIn from './pages/LogIn/LogIn';

function App() { 
  return  <BrowserRouter> 

              <Navigation/>

                  <Routes>
                    <Route path="/" element={<Home/>} />
                  </Routes>

                  <Routes>
                    <Route path="/register" element={<Register/>} />
                  </Routes>

                  <Routes>
                    <Route path="/login" element={<LogIn/>} />
                  </Routes>



          </BrowserRouter>
      
}

export default App
