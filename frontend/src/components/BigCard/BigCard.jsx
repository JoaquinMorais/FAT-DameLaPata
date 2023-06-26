import React from 'react'

import '../BigCard/BigCard.css'

export const BigCard = (props) => {
  return (
    <>
      <div className='cartaGrande-container'>
        <div className="cartaGrande">
          <img src={require(`../../images/Dogs/perros-${props.nombre}.jpg`)} alt="imagen" />
        </div>
        <div className="informacion">
          <h1>{ props.nombre }</h1>
          <hr></hr>
          <h2>{ props.edad } años</h2>
          <h2>Tamaño: { props.tamaño }</h2>
        </div>
      </div>

      <div className="cartaGrande-info">
        <h2>HISTORIA</h2>
        <p>{ props.historia }</p>
        <h2>SALUD</h2>
        <p>{ props.salud }</p>
        <h2>COMPORTAMIENTO</h2>
        <p>{ props.comportamiento }</p>
        <h2>REQUERIMIENTOS</h2>
        <p>{ props.requerimientos }</p>
        <h2>CONTACTO</h2>
        <p>{ props.contacto }</p>

      </div>
    </>
  )
}