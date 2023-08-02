import React from 'react'
import { styled } from 'styled-components'
import Subtitle from './Subtitle'


function History() {
  return (
    <Wrap>
      <Subtitle write={'Un poco de nuestra historia'}/>
    
    </Wrap>
  )
}

export default History

const Wrap = styled.div`
  background-color:red;
`