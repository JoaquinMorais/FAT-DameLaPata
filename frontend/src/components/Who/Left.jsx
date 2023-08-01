import React from 'react'
import { styled } from 'styled-components';

function Left() {
  return (
    <Wrap>
        <Container>
            <TPart>

            </TPart>
            <ImgPart>
            
            </ImgPart>
        </Container>
    </Wrap>
  )
}

export default Left

const Wrap = styled.div`
    width: 100%;
    height: 40vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
  `;

const TPart = styled.div`

`;

const ImgPart = styled.div`

`;