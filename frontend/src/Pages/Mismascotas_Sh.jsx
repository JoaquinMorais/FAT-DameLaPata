import React from 'react';
import CardComponent from '../components/Mismascotas/CardComponent';
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';

function Mismascotas_Sh() {

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" >
        <CardComponent
          imageUrl="https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/09/6278c6e1a7002.jpeg"
          title="Perro"
          description="Perro feliz"
          descr="Este es Timmy"
        />

        <CardComponent
          imageUrl="https://i.blogs.es/bd07a7/sherry-wright-f7gphcsyyb4-unsplash/450_1000.jpeg"
          title="Perro"
          description="Perro triste"
          descr="bolas"
        />

        <CardComponent
          imageUrl="https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/09/6278c6e1a7002.jpeg"
          title="Perro"
          description="Jugueton"
          descr="hola hola"
        />
      </Container>
    </>
  );
}

export default Mismascotas_Sh;
