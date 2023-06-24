import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import BotonHuellaPerro from '../unite/Button';
import '../../login.css';

export function Register() {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(response => response.json())
      .then(data => setProvinces(data.provincias));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvince}`)
        .then(response => response.json())
        .then(data => setCities(data.localidades));
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

          <label htmlFor="city">Ciudad <span>*</span></label>
          <select name="city" required id="city" className="custom-select">
            <option value="">Seleccione una ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>{city.nombre}</option>
            ))}
          </select>

          <label htmlFor="district">Barrio <span>*</span></label>
          <input name="district" required type="text" id="district" placeholder="Barrio" />

          <BotonHuellaPerro className='button' />
        </form>
      </div>
      <div className="ifnot">
        <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </div>
    </div>
  );
}

export default Register;