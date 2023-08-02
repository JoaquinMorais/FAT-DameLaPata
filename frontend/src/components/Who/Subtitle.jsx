import React from 'react'
import { styled } from 'styled-components'

function Subtitle({write}) {
  return (
    <Container>
        <Sub>{write}</Sub>
    </Container>
  )
}

export default Subtitle

const Container = styled.div`
    margin-top: 100px;
`

const Sub = styled.h2`
    font-size: 30px;
`