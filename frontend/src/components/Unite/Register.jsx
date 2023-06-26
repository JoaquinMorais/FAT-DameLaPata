import React, { useState } from 'react';
import '../../button.css';
import '../../login.css';

import GoogleSign from '../../components/Unite/Google';

const FormRegister = () => {

  return (
    <div>
        <h1>REGISTRATE</h1>
        <GoogleSign/>
        <form id="form" className="form">
          <label htmlFor="name">Nombre <span>*</span></label>
          <input name="name" required type="text" id="name" placeholder="Nombre" />

          <label htmlFor="lastName">Apellido <span>*</span></label>
          <input name="lastname" required type="text" id="lastName" placeholder="Apellido" />

          <label htmlFor="email">Correo electrónico <span>*</span></label>
          <input name="email" required type="email" id="email" placeholder="Correo electrónico" />

          <label htmlFor="password">Contraseña <span>*</span></label>
          <input name="password" required type="password" id="password" placeholder="Contraseña" />

          <label htmlFor="confirmPassword">Confirmar Contraseña <span>*</span></label>
          <input name="confirmPassword" required type="password" id="confirmPassword" placeholder="Confirmar Contraseña" />

          <label htmlFor="province">Provincia <span>*</span></label>
          <select name="province" required id="province" onChange={handleProvinceChange} className="custom-select">
            <option value="">Seleccione una provincia</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>{province.nombre}</option>
            ))}
          </select>

          <label htmlFor="department">Departamento <span>*</span></label>
          <select name="department" required id="department" className="custom-select">
            <option value="">Seleccione un departamento</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>{department.nombre}</option>
            ))}
          </select>

          <label htmlFor="district">Barrio <span>*</span></label>
          <input name="district" required type="text" id="district" placeholder="Barrio" />

          <BotonHuellaPerro />
        </form>
      <div className="ifnot">
        <p>¿Ya tienes cuenta? <Link to="/option/login">Inicia sesión</Link></p>
      </div>    
    </div>
  );
};

export default FormRegister;