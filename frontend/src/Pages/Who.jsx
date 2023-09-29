import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardTeam from '../components/Who/CardTeam';
import NavBar from '../components/NavBar/NavBar';

function Who() {
  return (
    <>
      <NavBar />
      
      <Zoom top>
        <Wrap_2>
          <TitleContainer>
            <StyledTitle variant="h3">¿QUIÉNES SOMOS?</StyledTitle>
          </TitleContainer>
        </Wrap_2>
      </Zoom>

      <Wrap>
        <Fade bottom>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Container>
                <StyledText variant="body1">
                  Somos un grupo comprometido de estudiantes y amantes de los animales del Instituto
                  Tecnico Salesiano Villada. Nuestro propósito es brindarles una oportunidad de encontrar un
                  hogar responsable. Creemos firmemente que cada perro merece una segunda oportunidad y el
                  cariño incondicional de una familia. Por ello, hemos creado esta plataforma para conectar a
                  perros rescatados con personas que estén dispuestas a darles un hogar lleno de amor.
                </StyledText>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageContainer>
                <CardMedia
                  component="img"
                  alt="Imagen de muestra"
                  height="auto"
                  image="https://images.ecestaticos.com/jLESCdMEXIc9qGG2FOpA1NP4H1w=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fba6%2F896%2Ff44%2Fba6896f446572c38b60115e358ae8ccb.jpg"
                  style={{ width: '100%' }} // Ancho ajustado al 100% del contenedor
                />
              </ImageContainer>
            </Grid>
          </Grid>
        </Fade>
      </Wrap>
      
      <Wrap>
        <StyledTitle variant="h4">Un poco de nuestra historia</StyledTitle>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="Imagen de muestra"
              height="auto"
              image="https://cdn.wikiwiki.jp/to/w/becomnextbot/Wenomechainsama/::attach/Wenomechainsama.png?rev=08e3f8c3e8252bc599d086a85d402b2d&t=20221226165443"
              style={{ width: '100%' }} // Ancho ajustado al 100% del contenedor
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              <StyledText variant="body1">
                Todo comenzó a principios de este año, donde teníamos que realizar una página sin fines de lucro. Después de una lluvia de ideas, nos decidimos por hacer un proyecto que ayude y facilite la adopción de perros. Así nació: Dame La Pata
              </StyledText>
              <StyledText variant="body1">
                La idea surgió al ver la triste realidad de muchos perros abandonados y maltratados en nuestra comunidad. Queríamos marcar una diferencia y contribuir a mejorar sus vidas. Así que nos pusimos manos a la obra y creamos "Dame La Pata", un espacio en línea donde los refugios y protectoras de animales pueden publicar perfiles de los perros disponibles para adopción, y las personas interesadas en adoptar pueden buscar y filtrar perros según sus preferencias y ubicación.
              </StyledText>
            </Container>
          </Grid>
        </Grid>
      </Wrap>
      <CardTeam />
    </>
  );
}

export default Who;

// Estilos
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled(Typography)`
  /* Anular el margin predeterminado de Material UI */
  margin: 40px 0 !important; /* Agregar margen arriba y abajo */
  font-size: 54px !important; /* Ajusta el tamaño de la fuente para títulos */
  font-weight: bold !important; /* Hacer que los títulos estén en negrita */
  text-align: center; /* Centrar el texto */
`;

const StyledText = styled(Typography)`
  font-size: 24px !important; /* Ajusta el tamaño de la fuente para el texto */
  text-align: center; /* Centra el texto en pantallas pequeñas */
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center; /* Centra el contenido en pantallas pequeñas */
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Wrap_2 = styled.div`
  width: 100%;
  height: 40vh;
  display: grid;
  place-items: center;

  @media (max-width: 425px) {
    height: auto;
  }
`;

const TitleContainer = styled.div`
  margin-top: 60px; /* Agregar margen superior en pantallas pequeñas */
`;