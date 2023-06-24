import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import Home from '../pages/Home';
import Pinder from '../pages/Pinder';
import { BigCard } from '../components/BigCard/BigCard';
import {Register} from '../pages/unite/Register';
import {Login} from '../pages/unite/Login';
import {Option} from '../pages/unite/Option';

import '.././index.css';
import '.././login.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinder" element={<Pinder />} />
          <Route path="/option" element={<Option />} />
          <Route path="/option/login" element={<Login />} />
          <Route path="/option/signup" element={<Register />} />

          <Route path="/Max" element={
            <BigCard 
            nombre = 'Juan'
            edad = '10'
            tamaño = 'Mediano'
            /> 
          } />
        </Routes>
    </Router>
  );
}

export default App;

{/* RUTAS FINALLY */}

const routes = [
  {
    path:'/',
    Component: Home
  },
  {
    path:'/pinder',
    Component: Pinder
  },
  {
    path:'/Max',
    Component: BigCard
  },
  {
    path:'/option/signup',
    Component: Register
  },
  {
    path:'/option/login',
    Component: Login
  },
  {
    path:'/option',
    Component: Option
  }
];