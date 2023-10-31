import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

function Error() {  
  return (
    <>
      <Navbar />
      <div style={styles.centeredContent}>
        <p style={{ fontWeight: 'bold', marginTop:'100px', maxWidth: '100%', fontSize:'30px' }}>Lo sentimos, ha ocurrido un error :c</p>
        <img
          src="https://img.freepik.com/fotos-premium/terrier-brasileno-sobre-fondo-blanco_87557-14811.jpg"
          alt=""
          style={styles.image} // Agrega este estilo en línea
        />
        <Button variant="outlined" startIcon={<HomeIcon />}>
          <a href="/">VOLVER AL INICIO</a>
        </Button>
      </div>
    </>
  );
}

const styles = {
  centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '20px',
  },
};

export default Error;
