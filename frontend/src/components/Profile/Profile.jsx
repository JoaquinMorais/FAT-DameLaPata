import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

import '../Profile/Profile.css';

export const Profile = () => {
  return (
    <div className='perfil-background'>
      <div className="verde"></div>
      <div className="perfil-container">
        <img className='banner' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gtWOQpDxcdKer6RKV6Jc9a3SvHt0RaDOr_AsgwyDb_mwyXBQJa5NmWoiw-XbG4JS0w&usqp=CAU" alt="Banner" />
        <img className='fotoPerfil' src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?tf=3840x" alt="Foto de perfil" />
        <h2>Usuario</h2>
      </div>      
    </div>
  )
}