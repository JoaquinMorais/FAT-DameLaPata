import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'; // Agrega FieldArray para manejar arrays
import * as Yup from 'yup';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';       

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import IsLogged, { GetProfile } from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';


function Add() {


  const [selectedColors, setSelectedColors] = useState([]);


  const [responseDataColors, setresponseDataColors] = useState(null); // Agrega el estado para la respuesta de axios

  useEffect(() => {
    async function fetchData() {
      try{
        const user = await GetProfile()
        if(user.data['status'] === 200){
          if(user.data.response['type'] !== 'shelter'){
            window.location.href = "/";
          }
        }
      }
      catch (error){
        console.log("Error al obtener los datos del usuario:", error.message);
        window.location.href = "/";
      }
      try {
        const response = await axios.get('http://localhost:5000/pets/info/colors'); 
        setresponseDataColors(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
  
    // Llama a la función fetchData para obtener los datos
    fetchData();
  }, []);
  

  ////

  const [responseDataCharacteristics, setresponseDataCharacteristics] = useState(null); // Agrega el estado para la respuesta de axios

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/pets/info/characteristics'); 
        setresponseDataCharacteristics(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); // Llama a la función fetchData para obtener los datos
  }, []);

  ////


  
  const handleCheckboxChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convierte el valor en un número
    if (event.target.checked) {
      setSelectedColors([...selectedColors, value]);
    } else {
      setSelectedColors(selectedColors.filter((color) => color !== value));
    }
  };



  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();
  const initialValues = {
    name: '',
    gender: '',
    birthdate: '',
    size: '',
    weight: '',
    image_path: '',
    characteristics: [],
    colors: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio.'),
    gender: Yup.number().required('El género es obligatorio.'),
    birthdate: Yup.date().required('La fecha de nacimiento es obligatoria.'),
    size: Yup.number().required('El tamaño es obligatorio.'),
    weight: Yup.number().required('El peso es obligatorio.'),
    image_path: Yup.string().required('La imágen es obligatoria.'),
    characteristics: Yup.array()
      .of(Yup.number())
      .required('Mínimo 1 característica.'),
    colors: Yup.array()
      .of(Yup.number())
      .required('Mínimo 1 color.'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    const dataToSend = values;
    axios
      .put('http://localhost:5000/pet', dataToSend)
      .then((response) => {
        console.log('Response:', response.data);
        // Redirigir a la página "/successful" después del éxito
        navigate('/successful');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    setSubmitting(false);
  };  

  
  responseDataColors?.response.forEach(element => {
    console.log(element)
  });
  return (

    <>
      <NavBar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
        <Form>
          <Container>
            <Titulo>Empezá a dibujar la felicidad de una persona.</Titulo>
            <Subtitulo>¡Agregá un perrito a la lista de adopción!</Subtitulo>
            <Hr></Hr>


            <div style={{ marginBottom: '60px' }}>
              <Field
                id="name"
                name="name"
              >
                {({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Nombre"
                      placeholder="Firulais..."
                      multiline
                      variant="standard"
                      sx={{ width: '100%' }} // Aquí puedes agregar estilos personalizados
                    />
                    <ErrorMessage name="name" component="div" />
                  </>
                )}
              </Field>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <Field
                id="demo-simple-select-standard"
                name="gender"
              >
                {({ field }) => (
                  <>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel id="demo-simple-select-standard-label">Género</InputLabel>
                      <Select
                        {...field}
                        labelId="demo-simple-select-standard-label"
                        label="Género"
                        sx={{ width: '100%' }}
                      >
                        <MenuItem value="">
                          <em>Quitar</em>
                        </MenuItem>
                        <MenuItem value={1}>Macho</MenuItem>
                        <MenuItem value={2}>Hembra</MenuItem>
                      </Select>
                    </FormControl>
                    <ErrorMessage name="gender" component="div" />
                  </>
                )}
              </Field>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <Field
                id="date"
                name="birthdate"
              >
                {({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Nacimiento"
                      type="date"
                      defaultValue="2022-12-18"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ width: 220 }} // Estilos personalizados aquí
                    />
                    <ErrorMessage name="birthdate" component="div" />
                  </>
                )}
              </Field>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <Field
                id="demo-simple-select-standard"
                name="size"
              >
                {({ field }) => (
                  <>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel id="demo-simple-select-standard-label">Tamaño</InputLabel>
                      <Select
                        {...field}
                        labelId="demo-simple-select-standard-label"
                        label="Tamaño"
                        sx={{ width: '100%' }} // Estilos personalizados aquí
                      >
                        <MenuItem value="">
                          <em>Quitar</em>
                        </MenuItem>
                        <MenuItem value={1}>Chico</MenuItem>
                        <MenuItem value={2}>Mediano</MenuItem>
                        <MenuItem value={3}>Grande</MenuItem>
                      </Select>
                    </FormControl>
                    <ErrorMessage name="size" component="div" />
                  </>
                )}
              </Field>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <Field
                id="weight"
                name="weight"
              >
                {({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Peso"
                      placeholder="123..."
                      multiline
                      variant="standard"
                      sx={{ width: '100%' }} // Estilos personalizados aquí
                    />
                    <ErrorMessage name="weight" component="div" />
                  </>
                )}
              </Field>
            </div>

            <div style={{ marginBottom: '60px' }}>
              <Field
                id="image_path"
                name="image_path"
              >
                {({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Imagen"
                      placeholder="perro.jpg..."
                      multiline
                      variant="standard"
                      sx={{ width: '100%' }} // Estilos personalizados aquí
                    />
                    <ErrorMessage name="image_path" component="div" />
                  </>
                )}
              </Field>
            </div>

            {/* <div style={{ marginBottom: '60px' }}>
              {responseDataColors?.response.map((item) => (
                <label key={item.id_color}>
                  <input
                    type="checkbox"
                    value={item.id_color}
                    onChange={handleCheckboxChange}
                    checked={selectedColors.includes(item.id_color)}
                  />
                  {item.color_name}
                </label>
              ))}
              <div>Valores seleccionados: {selectedColors.join(', ')}</div>
            </div> */}
            <div style={{ marginBottom: '60px' }}>
                <FormGroup>
                  {responseDataColors?.response.map((color, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          name={`colors[${index}]`}
                          checked={values.colors.includes(color.id_color)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            if (isChecked) {
                              push(color.id_color);
                            } else {
                              remove(values.colors.indexOf(color.id_color));
                            }
                          }}
                          style={{
                            color: '#f76402', // Cambiar el color del checkbox a naranja
                          }}
                        />
                      }
                      label={color.title}
                    />
                  ))}
                </FormGroup>
              </div>

          <div style={{ marginBottom: '60px' }}>
            <FieldArray name="characteristics">
              {({ push, remove }) => (
                <>
                  {values.characteristics.map((characteristics, index2) => (
                    <div key={index2}>
                      <div style={{ marginBottom: '60px' }}>
                        <Field
                          id={`characteristics[${index2}]`}
                          name={`characteristics[${index2}]`}
                        >
                          {({ field }) => (
                            <>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                                <InputLabel id={`characteristics-label[${index2}]`}>Caracteristica</InputLabel>
                                <Select
                                  {...field}
                                  labelId={`characteristics-label[${index2}]`}
                                  label="Caracteristicas"
                                  sx={{ width: '100%' }} // Estilos personalizados aquí
                                >
                                  <MenuItem value="">
                                    <em>Quitar</em>
                                  </MenuItem>
                                  {responseDataCharacteristics?.response.map((item2) => ( 
                                    <MenuItem value={item2.id_characteristic}>{item2.title}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              <ErrorMessage name={`characteristics[${index2}]`} component="div" />
                            </>
                          )}
                        </Field>
                      </div>
                      <AgregarEliminar type="button" onClick={() => remove(index2)}>
                        Eliminar Característica
                      </AgregarEliminar>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Agregar Característica
                  </button>
                </>
              )}
            </FieldArray>
            <ErrorMessage name="characteristics" component="div" />
          </div>




            <Boton type="submit">PUBLICAR</Boton>
          </Container>
        </Form>
        )}
      </Formik>
    </>
  );
}
export default Add;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Titulo = styled.h3`
    text-align: center;
    margin-top: 80px;
`;
const Subtitulo = styled.p`
    text-align: center;
`;
const Hr = styled.hr`
    width: 65%;
    margin: 20px 0
`;
const Texto = styled.p`
    font-style: italic;
    font-weight: weight;
`;
const FieldStyled = styled(Field)`
    width: 250px;
    height: 35px;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 20px;
    &:hover{
        border: 2px solid #f76402;
    }
`;

const ContainerInputs = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Boton = styled.button`
    width: 100px;
    height: 50px;
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: transparent;
    font-weight: bold;
    margin-bottom: 30px;
    &:hover{
        background-color: #f76402;
        cursor: pointer;
    }
`;

const AgregarEliminar = styled.button`

`;

const InputCB = styled.input`

`;