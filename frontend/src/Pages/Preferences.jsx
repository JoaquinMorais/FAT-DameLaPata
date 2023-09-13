import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Slider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
    const [tamanio, setTamanio] = React.useState(''); // Variable de estado para el primer menú
    const [colores, setColores] = React.useState(''); // Variable de estado para el segundo menú

    const handleTamanioChange = (event) => { // Función de manejo de cambios para el primer menú
      setTamanio(event.target.value);
    };
    
    const handleColoresChange = (event) => { // Función de manejo de cambios para el segundo menú
      setColores(event.target.value);
    };
  
    return (
      <React.Fragment>
        <Grid item xs={2}>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="tamanio-label">Tamanio</InputLabel>
          <Select
            labelId="tamanio-label"
            id="tamanio-select"
            value={tamanio}
            onChange={handleTamanioChange}
          >
            <MenuItem value={10}>Chico</MenuItem>
            <MenuItem value={20}>Medio</MenuItem>
            <MenuItem value={30}>Grande</MenuItem>
          </Select>
        </FormControl>
      </Box>
        </Grid>
        <Grid item xs={2}>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="colores-label">Colores</InputLabel>
          <Select
            labelId="colores-label"
            id="colores-select"
            value={colores}
            onChange={handleColoresChange}
          >
            <MenuItem value={1}>Negro</MenuItem>
            <MenuItem value={2}>Blanco</MenuItem>
            <MenuItem value={3}>Gris</MenuItem>
            <MenuItem value={4}>Amarillo</MenuItem>
          </Select>
        </FormControl>
      </Box>
        </Grid>
        <Grid item xs={2}>
        <Slider
            disabled={false}
            marks
            max={20}
            min={0}
            size="big"
            valueLabelDisplay="on"
          />
        </Grid>
      </React.Fragment>
    );
  }

function Aditional() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Item>Salud</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Comportamiento</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Apariencia</Item>
        </Grid>
      </React.Fragment>
    );
  }

export default function Preferences() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <Aditional />
        </Grid>
      </Grid>
    </Box>
  );
}
