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

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-right: 10px;
`;

function Filters({ onColorFilter }) {
  const [showColorCheckboxes, setShowColorCheckboxes] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorCheckboxChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const applyColorFilters = () => {
    onColorFilter(selectedColors);
    setShowColorCheckboxes(false);
  };

  return (
    <Content>
      <Title>Filtrar por:</Title>
      <Button>Edad</Button>
      <Button>Tamaño</Button>
      <Button>Especie</Button>
      <Button>Peso</Button>
      <div>
      <Button onClick={() => setShowColorCheckboxes(!showColorCheckboxes)}>Color</Button>
        {showColorCheckboxes && (
          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                value="red"
                checked={selectedColors.includes('red')}
                onChange={() => handleColorCheckboxChange('red')}
              />
              Rojo
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="checkbox"
                value="blue"
                checked={selectedColors.includes('blue')}
                onChange={() => handleColorCheckboxChange('blue')}
              />
              Azul
            </CheckboxLabel>
            <CheckboxLabel>
              <input
                type="checkbox"
                value="green"
                checked={selectedColors.includes('green')}
                onChange={() => handleColorCheckboxChange('green')}
              />
              Verde
            </CheckboxLabel>
            {/* Agregar más checkboxes según los colores en tu data */}
            <Button onClick={applyColorFilters}>Aplicar</Button>
          </CheckboxGroup>
        )}
      </div>
    </Content>
  );
}


export default Filters;
