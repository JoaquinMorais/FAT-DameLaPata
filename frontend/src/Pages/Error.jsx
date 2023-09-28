import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Error() {
  return (
    <>
      <Navbar />
      <div style={styles.centeredContent}>
        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Lo sentimos, ha ocurrido un error :c</h1>
        <img src="https://img.freepik.com/fotos-premium/terrier-brasileno-sobre-fondo-blanco_87557-14811.jpg" alt="" />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
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
    height: '100vh', 
  },
};

export default Error;
