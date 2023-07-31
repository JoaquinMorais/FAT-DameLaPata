import React from 'react'
import { styled } from 'styled-components';

function Section() {
  return (
    <Wrap>
        <Container>
            <Title>QUIENES SOMOS PART</Title>  
        </Container>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
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