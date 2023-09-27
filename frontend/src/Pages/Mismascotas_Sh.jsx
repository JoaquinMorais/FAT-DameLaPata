import React from 'react';
import CardComponent from '../components/Mismascotas/CardComponent';
import Grid from '@mui/material/Grid';
import Navbar from '../components/NavBar/NavBar';
import { Container } from '@mui/material';

function Mismascotas_Sh() {
  return (
    <>
    <Navbar/>
    <Container maxWidth="xl" > 
      <Grid container spacing={2} >
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <CardComponent
            imageUrl="https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/09/6278c6e1a7002.jpeg"
            title="Perro"
            description="Perro feliz"
            descr="Este es Timmy"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            imageUrl="https://i.blogs.es/bd07a7/sherry-wright-f7gphcsyyb4-unsplash/450_1000.jpeg"
            title="Perro"
            description="Perro triste"
            descr="bolas"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            imageUrl="https://t2.ea.ltmcdn.com/es/posts/8/8/7/12_cosas_que_no_debes_hacer_con_tu_perro_23788_600.jpg"
            title="Perro"
            description="Perro humillado"
            descr="Y ahora navegamos por LA"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            imageUrl="https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/09/6278c6e1a7002.jpeg"
            title="Perro"
            description="Jugueton"
            descr="hola hola"
          />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Mismascotas_Sh;
