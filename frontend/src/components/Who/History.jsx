import React from 'react';
import { styled } from 'styled-components';
import Subtitle from './Subtitle';
import Fade from 'react-reveal/Fade';

function History() {
  return (
    <Container>
      <Subtitle write={'Un poco de nuestra historia'} />
      <ContentWrap>
        <Fade bottom>
          <ImgPart src='https://cdn.wikiwiki.jp/to/w/becomnextbot/Wenomechainsama/::attach/Wenomechainsama.png?rev=08e3f8c3e8252bc599d086a85d402b2d&t=20221226165443' />
        </Fade>
        <Fade bottom>
          <Text>
            Todo comenzó a principios de este año, donde teníamos que realizar una página sin fines de lucro. Después de una lluvia de ideas, nos decidimos por hacer un proyecto que ayude y facilite la adopción de perros. Así nació: Dame La Pata
          </Text>
          <Text>
            La idea surgió al ver la triste realidad de muchos perros abandonados y maltratados en nuestra comunidad. Queríamos marcar una diferencia y contribuir a mejorar sus vidas. Así que nos pusimos manos a la obra y creamos "Dame La Pata", un espacio en línea donde los refugios y protectoras de animales pueden publicar perfiles de los perros disponibles para adopción, y las personas interesadas en adoptar pueden buscar y filtrar perros según sus preferencias y ubicación.
          </Text>
        </Fade>
      </ContentWrap>
    </Container>
  );
}

export default History;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide en dos columnas en pantallas grandes */
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-top: 30px;
  @media (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
    margin-top: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const ImgPart = styled.img`
  object-fit: cover;
  height: auto;
  @media (max-width: 1024px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 425px) {
    min-height: 350px;
  }
`;
