import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dogs from './Pages/Dogs';
import Pinder from './Pages/Pinder';
import NavBar from './components/NavBar/navBar';
import Home from './Pages/Home';
import Who from './Pages/Who';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<Home />} />
          <Route path="dogs/*" element={<Dogs />} />
          <Route path="pinder/*" element={<Pinder />} />
          <Route path="Who/*" element={<Who />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
