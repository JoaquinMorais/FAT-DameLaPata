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
            <UpArrow
              src="../Images/expand-less.png"
              onClick={toggleText}
            />
          </CenteredContent>
          <DownTitle>
            <DownText>NUESTRA MISION?</DownText>
          </DownTitle>
        </Wrap>
        {showText && (
          <TextBox>
            <p>
            En nuestra página de adopción, nuestra misión es clara y apasionada: promover la adopción responsable, crear conciencia sobre el abandono de perros y ofrecer recursos para el cuidado adecuado de estas adorables mascotas. Creemos que al unirnos como una comunidad de amantes de los animales, podemos hacer una verdadera diferencia en la vida de estos compañeros peludos que tanto lo necesitan.
            A través de nuestra página y campañas en redes sociales, nos esforzamos por crear conciencia sobre el problema del abandono de perros y sus efectos devastadores. Compartimos historias inspiradoras de perros rescatados y cómo han encontrado una nueva oportunidad en una familia amorosa. También trabajamos en colaboración con otras organizaciones y refugios para prevenir el abandono y educar sobre la importancia de la tenencia responsable de mascotas.
            </p>
          </TextBox>
        )}
      </Container>
    </Roll>
  );
}

export default Section_2;

const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%; /* Centra verticalmente */
  left: 50%;
  transform: translate(-50%, -50%); /* Centra horizontal y verticalmente */
  z-index: 1;
  p{
    font-family: 'Lexend', sans-serif;
  }
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
  background-image: url('../Images/paw_prints.gif');
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
`;

const DownText = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  font-size: 40px;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5vh;
`;

const UpArrow = styled.img`
  cursor: pointer;
  animation: animateUp infinite 1.5s;
`;