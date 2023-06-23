import React from 'react'

export const BigCard = (props) => {
  return (
    <div className='carta-container'>
    <a className='carta-click' href="">
        <div className="carta">

        </div>
        <div className="texto-carta">
        <h3>{ props.nombre }</h3>
        <h6>{ props.edad } - { props.tamaño }</h6>
        <p className='click'>Click para mas información</p>
        </div>
    </a>
    </div>
  )
}