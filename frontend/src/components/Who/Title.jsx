import React from 'react';
import { styled } from 'styled-components';
import Zoom from 'react-reveal/Zoom';

function TitleFile() {
  return (
    <Zoom top>
      <Wrap>
        <Title>¿QUIÉNES SOMOS?</Title>
      </Wrap>
    </Zoom>
  );
}

export default TitleFile;

const Wrap = styled.div`
  width: 100%;
  height: 40vh;
  display: grid;
  place-items: center; /* Centra verticalmente y horizontalmente */
  @media (max-width: 425px) {
    height: auto; /* Ajusta la altura automáticamente en pantallas pequeñas */
  }
`;

const Title = styled.h1`
  font-size: 60px; /* Tamaño original de la fuente del título */
  margin-top: 20px; /* Ajusta el margen superior del título para evitar superposición */
  transition: font-size 0.5s; /* Transición suave para cambiar el tamaño de fuente */
  
  @media (max-width: 425px) {
    font-size: 30px; /* Tamaño más pequeño de la fuente en pantallas pequeñas */
    margin-top: 60px; /* Ajusta el margen superior en pantallas pequeñas */
    margin-bottom: 20px;
  }
`;
