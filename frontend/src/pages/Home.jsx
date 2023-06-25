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
        ruta = '/Max'
        historia = 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '
        salud = 'Todas las vacunas al dia'
        comportamiento = 'Es un perro bueno con personas y otros perros.'
        requerimientos = 'Comida balanceada, salir a pasear una vez al dia (Minimo) y por los primeros 2 años dejarlo solo lo menos posible en su casa.'
        contacto = 'Whatsapp: 1212121212'
        />

        <Cards 
        nombre = 'Ryan'
        edad = '3'
        tamaño = 'Grande'
        ruta = '/Ryan'
        />

        <Cards 
        nombre = 'Wachin'
        edad = '11'
        tamaño = 'Pequeño'
        ruta = '/Wachin'
        />

        <Cards 
        nombre = 'Tobi'
        edad = '8'
        tamaño = 'Pequeño'
        ruta = '/Tobi'
        />

        <Cards 
        nombre = 'Rufian'
        edad = '2'
        tamaño = 'Mediano'
        ruta = '/Rufian'
        />

        <Cards 
        nombre = 'SonGoku'
        edad = '5'
        tamaño = 'Grande'
        ruta = '/SonGoku'
        />

        <Cards 
        nombre = 'Hit'
        edad = '1'
        tamaño = 'Pequeño'
        ruta = '/Hit'
        />

        <Cards 
        nombre = 'Ler'
        edad = '1'
        tamaño = 'Pequeño'
        ruta = '/Ler'
        />

        <Cards 
        nombre = 'Juan'
        edad = '10'
        tamaño = 'Mediano'
        ruta = '/Juan'
        /> 
      </div>
      <Footer />
    </div>
  );
};

export default Home;
