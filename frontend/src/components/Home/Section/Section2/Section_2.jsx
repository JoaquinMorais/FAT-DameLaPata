import React, { useState } from 'react';
import { styled } from 'styled-components';
import Roll from 'react-reveal/Roll';
import { Fade } from 'react-reveal';

function Section_2({ onClick }) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <Roll left>
      <Container>
        <Wrap blurBackground={showText}>
          <TopTitle>
            <TopText>CUAL ES</TopText>
          </TopTitle>
          <CenteredContent>
            <UpArrowContainer onClick={toggleText}>
              <UpArrow src="../Images/tibia.png" />
              <span>Ver más</span>
            </UpArrowContainer>
          </CenteredContent>
          <DownTitle>
            <DownText>NUESTRA MISION?</DownText>
          </DownTitle>
        </Wrap>
        {showText && (
          <ContainerViewMore>
            <ContainerCloseBtn>
                <CloseButton 
                  src= '../Images/close-icon.svg'
                  onClick={toggleText} 
                />
            </ContainerCloseBtn>
            <TextBoxWithImage>
              <ImageContainer>
                <Image src="../Images/pata.jpg" alt="" />
              </ImageContainer>
              <TextBox>
                <h1>En nuestra página de adopción, nuestra misión es clara y apasionada:</h1>
                <p>
                  <strong>promover la adopción responsable, crear conciencia sobre el abandono de perros y ofrecer recursos para el cuidado adecuado</strong> de estas adorables mascotas. Creemos que al unirnos como una comunidad de amantes de los animales, podemos hacer una verdadera diferencia en la vida de estos compañeros peludos que tanto lo necesitan.
                  A través de nuestra página y campañas en redes sociales, nos esforzamos por crear conciencia sobre el problema del abandono de perros y sus efectos devastadores. Compartimos historias inspiradoras de perros rescatados y cómo han encontrado una nueva oportunidad en una familia amorosa. También trabajamos en colaboración con otras organizaciones y refugios para prevenir el abandono y <strong>educar sobre la importancia de la tenencia responsable de mascotas</strong>.
                </p>
              </TextBox>
            </TextBoxWithImage>
          </ContainerViewMore>
        )}
      </Container>
    </Roll>
  );
}

export default Section_2;

const ContainerViewMore = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%; /* Centra verticalmente */
  left: 50%;
  transform: translate(-50%, -50%); /* Centra horizontal y verticalmente */
  z-index: 1;
  width: 80%;
  height: 80vh;
  overflow: hidden;
  overflow-y: auto;
`

const TextBoxWithImage = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  p{
    font-size: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    font-family: 'Lexend', sans-serif;
    overflow: hidden; /* Evita el desbordamiento del contenido */
    flex: 1;
  }
`;

const TextBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  h1{
    font-family: 'Lexend', sans-serif;
    font-weight: bold;
  }
`

const ImageContainer = styled.div`
  min-width: 100% !important;
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  background-color: white; 
  width: 100%;
  flex: 1;
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh;
  filter: ${(props) => (props.blurBackground ? 'blur(10px)' : 'none')};
  transition: filter 0.5s ease;
`;

const TopTitle = styled.div`
  align-self: flex-start;
`;

const DownTitle = styled.div`
  align-self: flex-end;
`;

const TopText = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  font-size: 40px;
  color: #1e1d1d;
`;

const DownText = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  font-size: 40px;
  color: #1e1d1d;
`;

const CenteredContent = styled.div`
  display: flex;
  min-width:100%:
  align-items: flex-end;
`;

const UpArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  animation: animateUp infinite 1.5s;


  span{
  color: #ff5722;
  font-weight: bold;
  font-family: 'Alfa Slab One', cursive;
  }
`;

const UpArrow = styled.img`
  margin-bottom: 8px;
  fill: orange; /* Espacio entre la flecha y el texto "Ver más" */
`;

const CloseButton = styled.img`
  cursor: pointer;
`;

const ContainerCloseBtn=styled.div`
  display: flex;
  justify-content: end;
`;