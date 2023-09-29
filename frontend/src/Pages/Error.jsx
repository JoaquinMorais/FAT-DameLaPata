import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import HomeIcon from '@mui/icons-material/Home';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material';
=======
import DeleteIcon from '@mui/icons-material/Delete';

>>>>>>> coneccion_to_demo

function Error() {
  const ColorButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'green', 
    borderColor: 'green', 
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'lightgreen', 
      borderColor: 'darkgreen', 
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'darkgreen', 
      borderColor: 'green', 
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
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
