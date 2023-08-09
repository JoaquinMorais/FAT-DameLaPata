import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px; 
`;

const Title = styled.h3`
  font-size: 18px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function Filters({ onColorFilter }) {
  const [showColorButtons, setShowColorButtons] = useState(false);

  const handleColorButtonClick = () => {
    setShowColorButtons(!showColorButtons);
  };

  const handleColorSelection = (color) => {
    onColorFilter(color);
    setShowColorButtons(false);
  };

  return (
    <Content>
      <Title>Filtrar por:</Title>
      <Button>Edad</Button>
      <Button>Tamaño</Button>
      <Button>Especie</Button>
      <Button>Peso</Button>
      <div>
        <Button onClick={handleColorButtonClick}>Color</Button>
        {showColorButtons && (
          <div>
            <Button onClick={() => handleColorSelection('red')}>Rojo</Button>
            <Button onClick={() => handleColorSelection('blue')}>Azul</Button>
            <Button onClick={() => handleColorSelection('green')}>Verde</Button>
            {/* Agregar más botones según los colores en tu data */}
          </div>
        )}
      </div>
    </Content>
  );
}


export default Filters;
