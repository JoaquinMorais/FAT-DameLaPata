import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import BotonHuellaPerro from '../../components/Unite/Button';



import '../../login.css';


export function Login() {
    return (
        <div>
          <Navbar />
          <div className="main">
                <h1>Login</h1>
                  <form id="form" action="" className="form">
                    <label htmlFor="name">Correo electrónico <span>*</span></label>
                    <input name="email" required type="text" id="name" placeholder="miperro@dog.com" />
                    
                    <label htmlFor="email">Contrasena <span>*</span></label>
                    <input name="password" type="password" id="email" required placeholder="**********" />
                    <BotonHuellaPerro />
                  </form>
                </div>
                <div className='ifnot'>
                  <p>¿No tienes cuenta? <a href="/option">Registrate</a></p>
                </div>
              </div>

      );
    }

export default Login;
