import React from 'react';
import Logo from "../../images/DameLaPata.jpg";

export const Navbar = () => {
  return (
    <header>
        <div className="menu">
            <a href="">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </a>
            <div className="links">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Información</a></li>
                    <li><a href="">Favoritos</a><span className='total-favoritos'>2</span></li>
                    <li><a href="">Perfil</a></li>
                </ul>
            </div>
            <div className="hamburguer-div">
                <a href="" className='hamburguer'><box-icon name="menu"></box-icon></a>
            </div>
        </div>
    </header>
  )
}