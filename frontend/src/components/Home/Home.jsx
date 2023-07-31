import React from 'react'
import styled from 'styled-components'
import Section from './Section/Section1/Section'
import Section_2 from './Section/Section2/Section_2'
import Section_3 from './Section/Section3/Section_3'
import Sponsor from './Section/Section4/Sponsor'

function Home() {
  return (
    <>
      <Section/>
      <Section_2/>
      <Section_3/>
      <Sponsor/>

    </>
    
  )
}

export default Home

const Container = styled.div`
height : 100 vh;
`