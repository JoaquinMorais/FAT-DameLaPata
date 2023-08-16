import React from 'react'
import styled from 'styled-components'
import Section from '../components/Home/Section/Section1/Section'
import Section_2 from '../components/Home/Section/Section2/Section_2'
import Section_3 from '../components/Home/Section/Section3/Section_3'
import Sponsor from '../components/Home/Section/Section4/Sponsor'
import NavBar from '../components/NavBar/Navbar';

function Home() {
  return (
    <>
    <NavBar/>
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