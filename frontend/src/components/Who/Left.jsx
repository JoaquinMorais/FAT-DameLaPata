  import React from 'react';
  import { styled } from 'styled-components';
  import Fade from 'react-reveal/Fade';

  const LeftContent = ({ text, imageUrl }) => {
    return (
      <Wrap>
        <Fade bottom>
          <Container>
            <ImgPart src={imageUrl} />
            <Txt>{text}</Txt>
          </Container>
        </Fade>
      </Wrap>
    );
  };

  export default LeftContent;

  const Wrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Divide en dos columnas en pantallas grandes */
    gap: 20px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
    }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Txt = styled.p`
    font-size: 22px;
    text-align: justify;
    margin-top: 40px;
    @media (max-width: 1024px) {
      text-align: center;
      margin-top: 30px;
      font-size: 20px;
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
