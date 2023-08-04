import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import BotonHuellaPerro from '../../components/Unite/Button';
import httoClient from '../../httoClient';

import '../../login.css';


export function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logInUser = async () => {
    console.log(username, password);
    try{
      const resp = await httoClient.post("//localhost:5000/login", 
      {
        username,
        password
      });
      window.location.href = "/";
    }

    catch(error){
      if(error.response.status === 401){
        console.log('owo')
      }
    }

  }

    return (
        <div>
          <Navbar />
          <div className="main">
                <h1>Login</h1>
                  <form id="form" action="" className="form">
                    <label htmlFor="name">Correo electrónico <span>*</span></label>
                    <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} required type="text" id="name" placeholder="miperro@dog.com" />
                    
                    <label htmlFor="email">Contrasena <span>*</span></label>
                    <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" id="name" placeholder="********" />
                    <button onClick={() => logInUser()} type='button'>LOGIN</button>
                  </form>
                </div>
                <div className='ifnot'>
                  <p>¿No tienes cuenta? <a href="/option">Registrate</a></p>
                </div>
              </div>

      );
    }

export default Login;
