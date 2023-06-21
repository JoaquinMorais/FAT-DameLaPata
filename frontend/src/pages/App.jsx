import React from 'react';

/* IMPORTS COMPONENTS */
import { Header } from '../components/Header/Header';
import { Cards } from '../components/Cards/Cards';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

import '.././index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="dogs">
        <Cards 
        nombre = 'Max'
        edad = '6'
        tamaño = 'Grande'
        />

        <Cards 
        nombre = 'Ryan'
        edad = '3'
        tamaño = 'Grande'
        />

        <Cards 
        nombre = 'Wachin'
        edad = '11'
        tamaño = 'Pequeño'
        />

        <Cards 
        nombre = 'Tobi'
        edad = '8'
        tamaño = 'Pequeño'
        />

        <Cards 
        nombre = 'Rufian'
        edad = '2'
        tamaño = 'Mediano'
        />

        <Cards 
        nombre = 'SonGoku'
        edad = '5'
        tamaño = 'Grande'
        />

        <Cards 
        nombre = 'Hit'
        edad = '1'
        tamaño = 'Pequeño'
        />

        <Cards 
        nombre = 'Ler'
        edad = '1'
        tamaño = 'Pequeño'
        />

        <Cards 
        nombre = 'Juan'
        edad = '10'
        tamaño = 'Mediano'
        />

        
      </div>
    </div>
  );
}

export default App;
