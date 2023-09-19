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
  flex-direction: column; /* Cambia la dirección del flexbox a columna */
  align-items: center; /* Centra los elementos horizontalmente */
`;

const Container = styled.div`
  width: 100%; /* Cambia el ancho al 100% para ocupar todo el espacio disponible */
  padding: 20px; /* Añade espaciado alrededor del texto */

  @media (min-width: 1024px) {
    width: 50%; /* Vuelve a establecer el ancho al 50% en pantallas más grandes */
    padding-right: 20px;
  }
`;

const Txt = styled.p`
  font-size: 22px;
  text-align: center; /* Cambia la alineación del texto a "center" para pantallas grandes */
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 28px;
    margin-right: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 100%; /* Cambia el ancho al 100% para ocupar todo el espacio disponible */
`;

const ImgPart = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 600px;

  @media (min-width: 1024px) {
    max-width: 70%;
    height: auto;
  }
`;
