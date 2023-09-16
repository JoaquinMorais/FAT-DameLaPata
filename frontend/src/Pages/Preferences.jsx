import React, { useState } from 'react';
import Select from 'react-select';
import {
  Slider,
  Button,
  Grid,
  Container,
  Box,
  TextField,
} from '@mui/material';

const options = [
  { value: 'Pequeño', label: 'Pequeño' },
  { value: 'Mediano', label: 'Mediano' },
  { value: 'Grande', label: 'Grande' },
];

const comportamientoOptions = [
  { value: 'Amigable', label: 'Amigable' },
  { value: 'Tímido', label: 'Tímido' },
  { value: 'Agresivo', label: 'Agresivo' },
];

const colorOptions = [
  { value: 'Blanco', label: 'Blanco' },
  { value: 'Negro', label: 'Negro' },
  { value: 'Marrón', label: 'Marrón' },
];

const saludOptions = [
  { value: 'Buena', label: 'Buena' },
  { value: 'Regular', label: 'Regular' },
  { value: 'Mala', label: 'Mala' },
];

const Formulario = () => {
  const [parametros, setParametros] = useState({
    tamaño: [],
    comportamiento: '',
    edad: 0,
    color: [],
    salud: '',
    adicionales: '',
  });

  const handleParamChange = (name, value) => {
    setParametros({
      ...parametros,
      [name]: value,
    });
  };

  const handleSliderChange = (event, newValue) => {
    handleParamChange('edad', newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(parametros);
  };

  return (
    <>
        <h1>REGISTRAR PREFERENCIAS</h1>
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <label htmlFor="tamaño">Tamaño</label>
              <Select
                id="tamaño"
                options={options}
                isMulti
                value={options.filter((option) =>
                  parametros.tamaño.includes(option.value)
                )}
                onChange={(selectedOptions) =>
                  handleParamChange(
                    'tamaño',
                    selectedOptions.map((option) => option.value)
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="comportamiento">Comportamiento</label>
              <Select
                id="comportamiento"
                options={comportamientoOptions}
                value={
                  comportamientoOptions.find(
                    (option) => option.value === parametros.comportamiento
                  ) || null
                }
                onChange={(selectedOption) =>
                  handleParamChange(
                    'comportamiento',
                    selectedOption ? selectedOption.value : ''
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label>Edad: {parametros.edad}</label>
              <Slider
                name="edad"
                value={parametros.edad}
                min={0}
                max={100}
                onChange={handleSliderChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="color">Color</label>
              <Select
                id="color"
                options={colorOptions}
                isMulti
                value={colorOptions.filter((option) =>
                  parametros.color.includes(option.value)
                )}
                onChange={(selectedOptions) =>
                  handleParamChange(
                    'color',
                    selectedOptions.map((option) => option.value)
                  )
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <label htmlFor="salud">Salud</label>
              <Select
                id="salud"
                options={saludOptions}
                value={
                  saludOptions.find(
                    (option) => option.value === parametros.salud
                  ) || null
                }
                onChange={(selectedOption) =>
                  handleParamChange(
                    'salud',
                    selectedOption ? selectedOption.value : ''
                  )
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="adicionales"
                label="Adicionales (separados por comas)"
                value={parametros.adicionales}
                onChange={(event) =>
                  handleParamChange('adicionales', event.target.value)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>

    </>
  );
};

export default Formulario;
