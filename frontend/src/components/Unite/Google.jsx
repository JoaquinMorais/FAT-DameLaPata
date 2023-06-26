import React from 'react';
import '../../login.css';
import { FcGoogle } from 'react-icons/fc';

const GoogleSign = () => {

  return (
    <div className="google-login">
    <p>o inicia sesión con Google</p>
    <a className="google-button" type="button" href='www.google.com'>
      <FcGoogle className="google-icon" />
    </a>
    <hr />
  </div>
  )
}

export default GoogleSign;