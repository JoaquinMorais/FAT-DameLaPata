import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import Home from '../pages/Home';
import Pinder from '../pages/Pinder';
import ProfilePage from '../pages/ProfilePage';
import { BigCard } from '../components/BigCard/BigCard';
import {Register} from '../pages/unite/Register';
import {Login} from '../pages/unite/Login';
import {Option} from '../pages/unite/Option';

import '.././index.css';
import '.././login.css';

function App() {
  {/* RUTAS FINALLY */}
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pinder" element={<Pinder />} />
          <Route path="/option" element={<Option />} />
          <Route path="/option/login" element={<Login />} />
          <Route path="/option/signup" element={<Register />} />
          <Route path="/Max" element={<BigCard nombre = 'Max' edad = '6' tamaño = 'Grande' historia = 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ' salud = 'Todas las vacunas al dia' comportamiento = 'Es un perro bueno con personas y otros perros.' requerimientos = 'Comida balanceada, salir a pasear una vez al dia (Minimo) y por los primeros 2 años dejarlo solo lo menos posible en su casa.' contacto = 'Whatsapp: 1212121212'/> } />
          {/* Falta completar lo de abajo, pero en vez de eso flaskearlo wooo mira la rima q te tiro paaa */}
          <Route path="/Ryan" element={<BigCard nombre = 'Ryan' edad = '3' tamaño = 'Grande'/> } />
          <Route path="/Wachin" element={<BigCard nombre = 'Wachin' edad = '11' tamaño = 'Pequeño'/> } />
          <Route path="/Tobi" element={<BigCard nombre = 'Tobi' edad = '8' tamaño = 'Pequeño'/> } />
          <Route path="/Rufian" element={<BigCard nombre = 'Rufian' edad = '2' tamaño = 'Mediano'/> } />
          <Route path="/SonGoku" element={<BigCard nombre = 'SonGoku' edad = '5' tamaño = 'Grande'/> } />
          <Route path="/Hit" element={<BigCard nombre = 'Hit' edad = '1' tamaño = 'Pequeño'/> } />
          <Route path="/Ler" element={<BigCard nombre = 'Ler' edad = '1' tamaño = 'Pequeño'/> } />
          <Route path="/Juan" element={<BigCard nombre = 'Juan' edad = '10' tamaño = 'Mediano'/> } />
          <Route path="/perfil" element={<ProfilePage />} />  
        </Routes>
    </Router>
  );
}

export default App;

{/* CREO Q ESTO NO HACE FALTA */}
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