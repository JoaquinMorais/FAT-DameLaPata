import React from 'react';
import NavBar from '../components/NavBar/Navbar';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Successful() {
  return (
    <>
        <NavBar />
        <Container>
            <Bounce top><Imagen src="./Images/tickVerde.png" /></Bounce>
            <Fade><Texto>¡GRACIAS!</Texto></Fade>
            <Fade><SubTexto>Este perrito está en el camino a ser y hacer feliz.</SubTexto></Fade>
            <Hr></Hr>
            <Zoom><Boton href="/dogs">Ver perros</Boton></Zoom>
        </Container>   
    </>
    
  )
}

export default Successful

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
`;

const Imagen = styled.img`
    width: 100px;
    height: 100px;
`;

const Texto = styled.h1`
    font-weight: bold;
    font-style: italic;
    margin-top: 15px;
`;

const SubTexto = styled.h5`
    
`;

const Hr = styled.hr`
    width: 50%;
    border: 1px solid black;
    margin-bottom: 35px;
`;

const Boton = styled.a`
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    &:hover{
        background-color: #FF5722;
    }
`;