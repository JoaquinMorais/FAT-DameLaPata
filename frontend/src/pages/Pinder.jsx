import React from 'react';

import { Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { BigCard } from '../components/BigCard/BigCard';
import { Footer } from '../components/Footer/Footer';

function Pinder() {
  return (
    <div>
      <Navbar />
      <div>
        <BigCard 
        nombre = 'Max'
        edad = '6'
        tamaño = 'Grande'
        />

        <BigCard 
        nombre = 'Ryan'
        edad = '3'
        tamaño = 'Grande'
        />

        <BigCard 
        nombre = 'Wachin'
        edad = '11'
        tamaño = 'Pequeño'
        />

        <BigCard 
        nombre = 'Tobi'
        edad = '8'
        tamaño = 'Pequeño'
        />

        <BigCard 
        nombre = 'Rufian'
        edad = '2'
        tamaño = 'Mediano'
        />

        <BigCard 
        nombre = 'SonGoku'
        edad = '5'
        tamaño = 'Grande'
        />

        <BigCard 
        nombre = 'Hit'
        edad = '1'
        tamaño = 'Pequeño'
        />

        <BigCard 
        nombre = 'Ler'
        edad = '1'
        tamaño = 'Pequeño'
        />

        <BigCard 
        nombre = 'Juan'
        edad = '10'
        tamaño = 'Mediano'
        /> 
      </div>
      <Footer />
    </div>
  );
};

export default Pinder;