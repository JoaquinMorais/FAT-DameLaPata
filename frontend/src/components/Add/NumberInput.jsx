import React, { Component } from 'react';
import { styled } from 'styled-components';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Verifica si el valor es un número entre 1 y 3
    if (/^[1-3]$/.test(inputValue)) {
      this.setState({ inputValue, error: '' });
    } else {
      this.setState({ error: 'Por favor, ingrese un número entre 1 y 3' });
    }
  };

  render() {
    return (
      <div>
        <Input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder='Opciones: 1, 2 o 3...'
        />
        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
      </div>
    );
  }
}

export default NumberInput;

const Input = styled.input`
    width: 250px;
    height: 35px;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 20px;
    &:hover{
        border: 2px solid #f76402;
    }
`;