import React from 'react'

export const BigCard = (props) => {
  return (
    <div className='cartaGrande-container'>
      <div className="carta">
      <img src={require(`../../images/Dogs/perros-${props.nombre}.jpg`)} alt="imagen" />
      </div>
      <div className="texto-carta">
      <h3>{ props.nombre }</h3>
      <h6>{ props.edad } - { props.tamaño }</h6>
      <p className='click'>Click para mas información</p>
      </div>
    </div>
  )
}