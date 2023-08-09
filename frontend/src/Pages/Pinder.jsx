import React from 'react'
import BigCards from '../components/Pinder/BigCards/BigCards';
import slides from '../dogs.json'

function Pinder() {
  return (
    <>
      <BigCards slides={slides}/>
    </>
  )
}

export default Pinder