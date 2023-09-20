import React from 'react'
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Card from '../components/Who/Card'
import History from '../components/Who/History'
import NavBar from '../components/NavBar/Navbar';


function Who() {
  return (
    <>  
    <NavBar/>
      <Zoom top>
        <Wrap_2>
          <Title>¿QUIÉNES SOMOS?</Title>
        </Wrap_2>
      </Zoom>
        <Wrap>
          <Fade bottom>
            <Container>
              <Txt>{'Somos un grupo comprometido de estudiantes y amantes de los animales del Instituto Tecnico Salesiano Villada. Nuestro propósito es brindarles una oportunidad de encontrar un hogar responsable. Creemos firmemente que cada perro merece una segunda oportunidad y el cariño incondicional de una familia. Por ello, hemos creado esta plataforma para conectar a perros rescatados con personas que estén dispuestas a darles un hogar lleno de amor.'}</Txt>
            </Container>
            <ImageContainer>
              <ImgPart src={'https://images.ecestaticos.com/jLESCdMEXIc9qGG2FOpA1NP4H1w=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fba6%2F896%2Ff44%2Fba6896f446572c38b60115e358ae8ccb.jpg'} />
            </ImageContainer>
          </Fade>
        </Wrap>
        <History/>
        <Card/>

    </>
  )
}

export default Who

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

const Wrap_2 = styled.div`
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
