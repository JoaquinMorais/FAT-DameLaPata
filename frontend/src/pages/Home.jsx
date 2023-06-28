import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Cards } from '../components/Cards/Cards';
import { Footer } from '../components/Footer/Footer';
import httoClient from '../httoClient';

function Home() {
  const [data, setData] = useState(null);


  const logOut = async () =>{await httoClient.post("//localhost:5000/logout");
    window.location.href = "/";
  }

  useEffect(() => {
    fetch('/just because')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);


  

  
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
