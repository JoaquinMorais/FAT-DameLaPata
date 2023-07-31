import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { Fade } from 'react-reveal';
import { Flip } from 'react-reveal';
import { FaxRounded } from '@mui/icons-material';



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

            <Button></Button>
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
`;

const Slogan = styled.h4`
  font-size: 27px;
  letter-spacing: 3px;
  color: #89FF33;
  text-align: center;
  font-style: italic;
  font-family: 'Patrick Hand', cursive;
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
