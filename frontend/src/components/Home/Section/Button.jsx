import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Slide } from 'react-reveal';

function Button({text}, {link}) {
  return (
    <Container>
      <Slide bottom>
        <ButtonContainer >
          <ButtonAdop src='/Images/pataa.jpg' />
          <ButtonText><a href={link}>{text}</a></ButtonText>
        </ButtonContainer>
      </Slide>
    </Container>
  );
}

export default Button;

const Container = styled.div`
  width: 26%;
`;

const ButtonContainer = styled.div`
  width: 200px;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

