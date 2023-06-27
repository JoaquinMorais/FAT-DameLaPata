import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import BotonHuellaPerro from '../../components/Unite/Button';
import '../../login.css';
import { FcGoogle } from 'react-icons/fc';



export function Register() {
  const [provinces, setProvinces] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(response => response.json())
      .then(data => setProvinces(data.provincias));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${selectedProvince}`)
        .then(response => response.json())
        .then(data => setDepartments(data.departamentos));
    }
  }, [selectedProvince]);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <h1>REGISTRATE</h1>
        <div className="google-login">
          <p>o inicia sesión con Google</p>
          <a className="google-button" type="button" href='www.google.com'>
            <FcGoogle className="google-icon" />
          </a>
          <hr />
        </div>
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
      </div>
      <div className="ifnot">
        <p>¿Ya tienes cuenta? <a href="/option/login">Inicia sesión</a></p>
      </div>
    </div>
  );
}

export default Register;