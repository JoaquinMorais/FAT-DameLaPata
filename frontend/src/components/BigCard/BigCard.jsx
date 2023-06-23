import React from 'react'

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

      </div>
    </>
  )
}