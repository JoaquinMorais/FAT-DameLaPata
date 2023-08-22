import React, { useState } from 'react';
import { styled } from 'styled-components'
import NavBar from '../components/NavBar/Navbar';

function Add() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handleSeleccion = (opcion) => {
        setOpcionSeleccionada(opcion);
    };
  return (
    <>
        <NavBar/>
        <Container>
            <Titulo>Empezá a dibujar la felicidad de una persona.</Titulo>
            <Subtitulo>¡Agregá un perrito a la lista de adopción!</Subtitulo>
            <Hr></Hr>
            <Texto>Nombre</Texto>
            <Input type="text" placeholder="Ejemplo: Firulais..."/>

            <Texto>Fecha de nacimiento</Texto>
            <Input type="date"></Input>

            <Texto>Color</Texto>
            <Input type="text" placeholder="Ejemplo: Amarillo patito..."/>

            <Texto>Tamaño</Texto>
            <Input type="number" min="1" max="3" placeholder="Opciones: 1, 2 o 3..."/>

            <Texto>Peso</Texto>
            <Input type="number" min="1" max="3" placeholder="Peso"/>
        </Container>
    </>
  )
}

export default Add

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
`;

const Titulo = styled.h3`
    text-align: center;
`;

const Subtitulo = styled.p`
    text-align: center;
`;

const Hr = styled.hr`
    width: 65%;
    margin: 20px 0
`;

const Texto = styled.p`
    font-style: italic;
    font-weight: weight;
`;

const Input = styled.input`
    width: 250px;
    height: 35px;
    border: 2px solid black;
    &:hover{
        border: 2px solid #f76402;
    }
`;

const ContainerInputs = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Checkbox = styled.input`
    
`;