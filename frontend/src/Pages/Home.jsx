import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Section from '../components/Home/Section/Section1/Section'
import Section_2 from '../components/Home/Section/Section2/Section_2'
import Section_3 from '../components/Home/Section/Section3/Section_3'
import Sponsor from '../components/Home/Section/Section4/Sponsor'
import NavBar from '../components/NavBar/Navbar';
import axios from 'axios'

let pages_array = [];
let settings_array = [];

async function IsLogged() {
  try {
    const response = await axios.post('http://localhost:5000/profile', '' );
    console.log(response)
    if (response.data['status'] == 402){
      pages_array = ['page_uno', 'page_dos']
    }
  
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}


function Home() {      data_to_send = 'hola'

  useEffect(() => {
    IsLogged();
  }, []); 

  return (
    <>
    <NavBar extra_value={data_to_send}/>
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