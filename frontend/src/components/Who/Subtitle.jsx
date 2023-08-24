import React from 'react'
import { styled } from 'styled-components'
import Fade from 'react-reveal/Fade';

function Subtitle({write}) {
  return (
    <Container>
      <Fade bottom>
        <Sub>{write}</Sub>

      </Fade>
    </Container>
  )
}

export default Subtitle

const Container = styled.div`
    margin-top: 100px;
    text-align: center;
    @media(max-width: 768px){
      margin-top:-300px
    }
`

const Sub = styled.h2`
    font-size: 40px;
    @media(max-width: 425px){
      text-align:left;
      width:100%;
    }
`