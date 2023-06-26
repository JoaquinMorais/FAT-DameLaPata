import React from 'react';
import Logo from "../../images/logo.png";
import { MdOutlinePets } from 'react-icons/md';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
        <div className="menu">
            <a href="">
                <div className="logo">
                    <Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>
            </a>
            <div className="links">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/pinder">Tinder</Link></li>
                    <li><a href="">Información</a></li>
                    <li><a href="">Favoritos</a><span className='total-favoritos'>2</span></li>
                    <li><a href="">Perfil</a></li>
                    <li><Link to="/option"> <MdOutlinePets />ÚNETE</Link><MdOutlinePets /></li>

                </ul>
            </div>
            <div className="hamburguer-div">
                <a href="" className='hamburguer'><box-icon name="menu"></box-icon></a>
            </div>
        </div>
    </header>
  )
}