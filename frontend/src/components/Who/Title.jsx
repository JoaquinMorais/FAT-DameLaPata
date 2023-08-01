import React from 'react'
import { styled } from 'styled-components';

function TitleFile() {
  return (
    <Wrap>
        <Container>
            <Title>¿QUIENES SOMOS?</Title>  
        </Container>
    </Wrap>
  )
}

export default TitleFile

const Wrap = styled.div`
  width: 100%;
  height: 40vh;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 1;
`;

const Title = styled.h1`
    font-size: 60px
`;