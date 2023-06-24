import React, { useState } from 'react';
import '../../button.css';
import huellaPerro from '../../images/huella.png';

const BotonHuellaPerro = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    // Aquí puedes añadir la lógica adicional que desees al hacer clic en el botón
  };

  const handleAnimationEnd = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`boton-huella-perro ${isPressed ? 'pressed' : ''}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <img src={huellaPerro} alt="Huella de perro" className="huella-perro-img" />
      <span className="texto-entrar">Ingresar</span>
    </button>
  );
};

export default BotonHuellaPerro;