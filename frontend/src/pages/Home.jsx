import React from 'react';

import { Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Cards } from '../components/Cards/Cards';
import { Footer } from '../components/Footer/Footer';

function Home() {
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
      <Footer />
    </div>
  );
};

export default Home;
