import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';

const LeftContent = ({ text, imageUrl }) => {
  return (
    <Wrap>
      <Fade bottom>
        <Container>
          <Txt>{text}</Txt>
          <ImgPart src={imageUrl} />
        </Container>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%; /* Ajusta el ancho del contenedor según tus preferencias */
  margin: 0 auto; /* Centra el contenido horizontalmente */

  @media (max-width: 1024px) {
    flex-direction: column; /* Cambia a una columna en pantallas más pequeñas */
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    padding: 0 20px; /* Reduce el espacio en los costados en pantallas más grandes */
  }
`;

const Txt = styled.p`
  font-size: 22px;
  text-align: justify;
  margin-top: 40px;
  margin-bottom: 20px; /* Agrega más margen inferior en pantallas grandes */
  flex: 1; /* El texto ocupará todo el ancho disponible en pantallas más pequeñas */

  @media (min-width: 1024px) {
    font-size: 28px; /* Aumenta el tamaño de la fuente en pantallas más grandes */
  }

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
    margin-right: 0; /* Elimina el espacio entre el texto y la imagen en pantallas más pequeñas */
  }
`;

const ImgPart = styled.img`
  object-fit: cover;
  max-width: 50%; /* La imagen ocupará el 50% del ancho disponible en pantallas grandes */
  height: auto;

  @media (min-width: 1024px) {
    max-height: 600px; /* Aumenta la altura máxima de la imagen en pantallas más grandes */
    width: 100%; /* Hace que la imagen ocupe todo el ancho disponible */
  }

  @media (max-width: 425px) {
    min-height: 350px;
  }
`;
