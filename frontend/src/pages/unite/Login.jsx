import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


import '../../login.css';


export function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
          <Navbar />
          <div className="main">
                <h1>Login</h1>
                  <form id="form" action="" className="form">
                    <label htmlFor="name">Usuario <span>*</span></label>
                    <input name="name" required type="text" id="name" placeholder="elpepe777" />
                    
                    <label htmlFor="email">Contrasena <span>*</span></label>
                    <input name="password" type="password" id="email" required placeholder="**********" />
                    <button type="submit" className="button-58">Login</button>
                  </form>
                </div>
                <div className='ifnot'>
                  <p>¿No tienes cuenta? <a href="/register">Registrate</a></p>
                </div>
              </div>

      );
    }

export default Login;
