import React from 'react';
import { styled } from 'styled-components';
import Subtitle from './Subtitle';
import Fade from 'react-reveal/Fade';

function History() {
  return (
    <>
      <Subtitle write={'Un poco de nuestra historia'} />
      <Container>
        <Fade bottom>
          <ImgPart src='https://cdn.wikiwiki.jp/to/w/becomnextbot/Wenomechainsama/::attach/Wenomechainsama.png?rev=08e3f8c3e8252bc599d086a85d402b2d&t=20221226165443' />
          <Wrap>
            <Text>
              Todo comenzó a principios de este año, donde teníamos que realizar una página sin fines de lucro. Después de una lluvia de ideas, nos decidimos por hacer un proyecto que ayude y facilite la adopción de perros. Así nació: Dame La Pata
            </Text>
            <Text>
              La idea surgió al ver la triste realidad de muchos perros abandonados y maltratados en nuestra comunidad. Queríamos marcar una diferencia y contribuir a mejorar sus vidas. Así que nos pusimos manos a la obra y creamos "Dame La Pata", un espacio en línea donde los refugios y protectoras de animales pueden publicar perfiles de los perros disponibles para adopción, y las personas interesadas en adoptar pueden buscar y filtrar perros según sus preferencias y ubicación.
            </Text>
          </Wrap>
        </Fade>
      </Container>
    </>
  );
}

export default History;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Wrap = styled.div`
  margin-left: 11%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 0;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    margin-top: 10px;
  }
`;

const Text = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-top: 30px;
  margin-right: 50px;
  text-align: right;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 23px;
    margin-top: 1px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
    margin-top: 5px;
  }
`;

const ImgPart = styled.img`
  margin-left: 30px;

  @media (max-width: 425px) {
    margin: 0;
    min-height: 350px;
    width: 100%;
  }
`;
