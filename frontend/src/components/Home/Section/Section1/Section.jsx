import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';
import { Fade } from 'react-reveal';
import { Slide } from 'react-reveal';

function Section() {
  return (
    <>
      <Wrap>
        <BackgroundImage />
        <Content>
          <CenterContent>
          <Fade top>
            <Title>Dame La Pata</Title>
            <Slogan>"Rescatar, proteger y encontrar hogares amorosos para perros necesitados."</Slogan>
          </Fade>

          <Container>
          <Slide bottom>
            <ButtonContainer >
            <ButtonAdop src='/Images/pataa.jpg' />
            <ButtonText>ADOPTA</ButtonText>
          </ButtonContainer>
        </Slide>
        </Container>

          </CenterContent>
        </Content>
      </Wrap>
    </>
  );
}

export default Section;

const Title = styled.h1`
  font-size: 90px;
  color: white;
  text-align: center;
  margin-bottom: 10px;

  @media(max-width: 425px){
    font-size: 60px;

  }
`;

const Slogan = styled.h4`
  font-size: 27px;
  letter-spacing: 3px;
  color: #89FF33;
  text-align: center;
  font-style: italic;
  font-family: 'Patrick Hand', cursive;

  @media(max-width: 425px){
    font-size: 20px;
  }
  
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;

`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;

  @media(max-width: 425px){
    margin:0 auto;
    text-align:center;
    justify-content:center;
    align-items:center;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://fotografias.larazon.es/clipping/cmsimages02/2020/11/06/91888410-EE48-43F9-8645-E4680B2C06A3/98.jpg?crop=2851,1604,x0,y216&width=1900&height=1069&optimize=low&format=webply);
  object-fit: cover;
  background-repeat: no-repeat;
  z-index: 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: -1;
  }
}`

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Container = styled.div`
  width: 26%;
  @media(max-width: 425px){
    margin:0 auto;
    width:100%;
  }
`;

const ButtonContainer = styled.div`
  width: 200px;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  
  @media(max-width: 425px){
    margin:0 auto;

  }
`;

const ButtonText = styled.h3`
  color: white;
  position: relative;
  margin-top: -50px;
  font-size: 14px;
`;

const ButtonAdop = styled.img`
  filter: drop-shadow(0px 5px 15px rgba(255, 255, 255, 0.8));
  margin-top: 50px;
  width: 130px;
  height: auto;
`;

