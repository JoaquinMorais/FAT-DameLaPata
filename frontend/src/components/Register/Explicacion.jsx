import React from 'react'
import { styled } from 'styled-components'

function Explicacion({txt}) {
  return (
    <Container>
        <Text>{txt}</Text>
    </Container>
    
    )
}

export default Explicacion

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;


const Text = styled.p`
    text-align:justify;
`