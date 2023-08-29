import React, { useEffect, useState } from 'react'; 
import BigCards from '../components/Pinder/BigCards/BigCards';
import slides from '../dogs.json'
import axios from 'axios';

async function axiosTest() {
  const response = await axios.get("http://127.0.0.1:5000/pet/1")
  return response.data
}

function Pinder() {
  axiosTest()
  return (
    <> 
      <BigCards />
    </>
  )
}

export default Pinder