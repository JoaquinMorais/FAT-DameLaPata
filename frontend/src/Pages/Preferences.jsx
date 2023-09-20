import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {
  Slider,
  Button,
  Grid,
  Container,
  Box,
  TextField,
} from '@mui/material';
import NavBar from '../components/NavBar/Navbar';
import IsLogged from '../my_methods/session_methods';


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
  const [isLoading, setIsLoading] = useState(true);
  const [pages_array, setPagesArray] = useState([]);
  const [settings_array, setSettingsArray] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedResponse = await IsLogged();
        console.log(loggedResponse);
        setPagesArray(loggedResponse.pages_array);
        setSettingsArray(loggedResponse.setting_array);
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that might occur during the API call
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);


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

  const handleSelectChange = (name, selectedOptions) => {
    if (selectedOptions.length <= 2) {
      handleParamChange(name, selectedOptions.map((option) => option.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(parametros);
  };

  return (
    <>
      <NavBar pages_array={pages_array} settings_array={settings_array} />
      <div
        style={{
          backgroundImage:
            'url(https://www.publico.es/yo-animal/wp-content/uploads/2022/10/perros-callejeros-3-1024x683.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1, 
          }}
        >
          <Container maxWidth="sm">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minHeight="100vh"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                paddingLeft: '30px',
                paddingRight: '30px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  fontSize: '36px',
                  marginBottom: '100px',
                  fontWeight: 'bold',
                  fontFamily: 'Patrick Hand',
                  letterSpacing: '5px',
                }}
              >
                REGISTRAR PREFERENCIAS
              </h1>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid container spacing={3}>
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
                    handleSelectChange(
                      'tamaño',
                      selectedOptions
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
                <label>Edad minima: {parametros.edad}</label>
                <Slider
                  name="edad"
                  value={parametros.edad}
                  min={0}
                  max={20}
                  marks
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
                    handleSelectChange(
                      'color',
                      selectedOptions
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
                  InputProps={{
                    style: { backgroundColor: 'white' },
                  }}
  
                />
              </Grid>
              <Grid item xs={12}>
                <Button                 type="submit"
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: 'orange',
                  '&:hover': {
                    backgroundColor: 'darkorange',
                  },
                }}
>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      </div>
    </div>

    </>
  );
};

export default Formulario;
