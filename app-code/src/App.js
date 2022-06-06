import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import Landing from './Landing/landing';
import Locution from './Location/Locution';
import Signup from './Signup/Signup';
import Login from './Login/login';
import Fraq from './FAQ/faq';
import {ContactPage} from "./Contact/contact";

function App() {
   return (
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Landing />} />
            <Route path='/Location' element={<Locution />} />
            <Route path='/faq' element={<Fraq />} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </>
   )
}

export default App; 