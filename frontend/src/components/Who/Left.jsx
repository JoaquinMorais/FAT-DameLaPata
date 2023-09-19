import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';

const LeftContent = ({ text, imageUrl }) => {
  return (
    <Wrap>
      <Fade bottom>
        <Container>
          <Txt>{text}</Txt>
        </Container>
        <ImageContainer>
          <ImgPart src={imageUrl} />
        </ImageContainer>
      </Fade>
    </Wrap>
  );
};

export default LeftContent;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  padding-right: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const Txt = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 28px;
    margin-right: 40px; /* Margen a la derecha solo en pantallas más grandes */
  }

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  @media (max-width: 1024px) {
    display: none; /* Oculta la imagen en pantallas pequeñas */
  }
`;

const ImgPart = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 600px;

  @media (min-width: 1024px) {
    max-width: 100%; /* Ajusta el ancho de la imagen en pantallas más grandes */
    height: auto; /* Ajusta la altura automáticamente para que la imagen sea más grande */
  }

  @media (max-width: 425px) {
    min-height: 350px;
  }
`;
