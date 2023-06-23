import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import Home from '../pages/Home';
import Pinder from '../pages/Pinder';

import '.././index.css';
 
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/a" element={<Home />} />
          <Route path="/pinder" element={<Pinder />} />
        </Routes>
    </Router>
  );
}

export default App;



const routes = [
  {
  path:'/a',
  Component: Home
  },
  {
    path:'/pinder',
    Component: Pinder
    }
];