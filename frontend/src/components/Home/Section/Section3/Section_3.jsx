import React from 'react';
import { Slide } from 'react-reveal';
import Wave from 'react-wavify';
import { styled } from 'styled-components';

function Section_3() {
  return (
    <WaveContainer>
      <Wave fill="#f79902" paused={false} options={{ height: 20, amplitude: 20, speed: 0.25, points: 8 }} />
      <Content>
        <WhyPart>
          <Slide bottom>
            <WhyTitle>RAZONES PARA ADOPTAR TU MASCOTA</WhyTitle>
            <ReasonsContainer>
              <ReasonLeft>
                <ReasonTitle>Compañía y afecto</ReasonTitle>
                <ReasonImage src='/Images/dog_girl.png'/>
              </ReasonLeft>
              <ReasonRight>
                <ReasonTitle>Reducción del estrés</ReasonTitle>
                <ReasonImage src='/Images/sillon.png'/>
              </ReasonRight>
              <ReasonLeft>
                <ReasonTitle>Estimulación mental</ReasonTitle>
                <ReasonImage src='/Images/estimulacion.png'/>
              </ReasonLeft>
              <ReasonRight>
                <ReasonTitle>Diversión y entretenimiento</ReasonTitle>
                <ReasonImage src='/Images/game.png'/>
              </ReasonRight>
            </ReasonsContainer>
          </Slide>
        </WhyPart>
      </Content>
    </WaveContainer>
  );
}

export default Section_3;

const WaveContainer = styled.div`
  position: relative;
`;

const Content = styled.div`
  background-color: #f79902;
  padding: 10px;
  margin-top: -10px;
  padding-bottom: 20px;
  text-align: center;
  z-index: 2;
`;

const WhyPart = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const WhyTitle = styled.h1`
  font-size: 80px;
  color: white;
  @media(max-width: 768px){
    font-size: 50px;
  }
`;

const ReasonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: justify;

  @media(max-width: 768px){
      flex-direction: column;
      text-align:center;
  }

`;

const ReasonTitle = styled.h1`
    font-size: 45px;
    font-family: 'Grape Nuts', cursive;


`

const ReasonImage = styled.img`
  width: 400px;
  height: auto;
  filter: drop-shadow(0px 5px 15px rgba(255,255, 255, 0.8));
  
  @media(max-width: 768px){
    width: 400px;    
  }

  @media(max-width: 425px){
    font-size: 60px;

  }

`


const ReasonLeft = styled.div`
  margin-top: 60px;
  flex-basis: 50%;
  margin-right: 100px;
  max-width: 40%;
  text-align: center;
  margin-bottom: 10px;
  word-wrap: break-word;
  height: 500px;
  position: relative; 
  overflow: hidden; 
  
  @media(max-width: 768px){
    max-width: 100%;
    margin:0;
    margin-top: 50px;
  }

`;

const ReasonRight = styled.div`
  margin-top: 60px;
  flex-basis: 50%;
  max-width: 40%;
  margin-left: 100px;
  text-align: center;
  margin-bottom: 10px;
  word-wrap: break-word; 
  height: 500px;

  @media(max-width: 768px){
    max-width: 100%;
    margin:0;
    margin-top: 50px;

  }
`
