import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { BigCard } from '../components/BigCard/BigCard';
import { Footer } from '../components/Footer/Footer';

function Pinder() {
  fetch("/adoptante/getPet")
  const [data, setData] = useState([{}])
  useEffect(() =>{
    fetch('/db/traer').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      <Navbar />
      <div>
        <BigCard 
        nombre = 'Max'
        edad = '6'
        tamaño = 'Grande'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Pinder;