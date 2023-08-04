import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centrar verticalmente */
  margin-bottom: 20px;
  margin-top: 20px; /* Agregar margen en la parte superior */
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
  margin-right: 10px; /* Agregar espacio entre los botones */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function Filters() {
  return (
    <Content>
      <Title>Filtrar por:</Title>
      <Button>Edad</Button>
      <Button>Tamaño</Button>
      <Button>Especie</Button>
      <Button>Peso</Button>
      <Button>Color</Button>
    </Content>
  );
}

export default Filters;
