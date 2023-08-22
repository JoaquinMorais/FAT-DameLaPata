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
            <Input type="text" placeholder="Ingresar nombre..."></Input>

            <Texto>Fecha de nacimiento</Texto>
            <Input type="date" placeholder="Ingresar fecha..."></Input>

            <Texto>Tamaño</Texto>
            <ContainerInputs>
                <Checkbox
                type="checkbox"
                id=" Chico (1)"
                name=" Mediano (2)"
                value=" Grande (3)"
                checked={opcionSeleccionada === 'Chico (1)'}
                onChange={() => handleSeleccion('Chico (1)')}
                />
                <label htmlFor="Chico (1)">Opción 1</label>
            </ContainerInputs>
            <div>
                <input
                type="checkbox"
                id="opcion2"
                name="opcion"
                value="opcion2"
                checked={opcionSeleccionada === 'Mediano (2)'}
                onChange={() => handleSeleccion('Mediano (2)')}
                />
                <label htmlFor="Mediano (2)">Opción 2</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="opcion3"
                name="opcion"
                value="opcion3"
                checked={opcionSeleccionada === 'Grande (3)'}
                onChange={() => handleSeleccion('Grande (3)')}
                />
                <label htmlFor="Grande (3)">Opción 3</label>
            </div>

            <Texto>Nombre</Texto>
            <Input type="text" placeholder="Ingresar nombre..."></Input>

            <Texto>Nombre</Texto>
            <Input type="text" placeholder="Ingresar nombre..."></Input>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Checkbox = styled.input`
    
`;