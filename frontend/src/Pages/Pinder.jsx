import React, { useEffect, useState } from 'react'; 
import BigCards from '../components/Pinder/BigCards/BigCards';
import NavBar from '../components/NavBar/NavBar'
import slides from '../dogs.json'
import axios from 'axios';

import IsLogged from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';

async function axiosTest() {
  const response = await axios.get("http://127.0.0.1:5000/pet/1")
  return response.data
}

function Pinder() {


  axiosTest()
  return (
    <> 
      <NavBar />
      <BigCards />
    </>
  )
}

export default Pinder