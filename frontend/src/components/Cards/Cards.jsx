import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

export const Cards = (props) => {
  return (
    <div className='carta-container'>
      <div className="carta">
        <img src={require(`../../images/Dogs/perros-${props.nombre}.jpg`)} alt="imagen" />
      </div>
      <Link className='link-to' to={props.ruta}>
      <div className="texto-carta">
        <h3>{ props.nombre }</h3>
        <h6>{ props.edad } - { props.tamaño }</h6>
        <p className='click'>Click para mas información</p>
      </div>
      </Link>
    </div>
  )
}