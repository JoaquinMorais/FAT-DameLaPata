import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';

function Subtitle({ write }) {
  return (
    <Container>
      <Fade bottom>
        <Sub>{write}</Sub>
      </Fade>
    </Container>
  );
}

export default Subtitle;

const Container = styled.div`
  margin-top: 20px; /* Ajusta la distancia desde la parte superior */
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 0; /* Restaura el margen superior en pantallas pequeñas */
  }
`;

const Sub = styled.h2`
  margin-top: 20px; /* Ajusta la distancia entre el subtítulo y el contenido de texto */
  margin-left: 10px;
  margin-right: 10px;
  font-size: 40px;
  @media (max-width: 425px) {
    text-align: left;
    width: 100%;
  }
`;
