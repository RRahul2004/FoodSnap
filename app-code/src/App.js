import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
