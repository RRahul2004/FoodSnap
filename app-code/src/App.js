import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import Landing from './Landing/landing';
import Locution from './Location/Locution';
import Faq from './FAQ/faq';

function App() {
   return (
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Landing />} />
            <Route path='/Location' element={<Locution />} />
            <Route path='/faq' element={<Faq />} />
          </Routes>
        </div>
      </>
   )
}

export default App; 