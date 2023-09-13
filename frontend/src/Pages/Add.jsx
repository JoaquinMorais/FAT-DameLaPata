import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar/Navbar';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'; // Agrega FieldArray para manejar arrays
import * as Yup from 'yup';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';       

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Colors from "../components/Add/Colors"


function Add() {



  const [responseDataColors, setresponseDataColors] = useState(null); // Agrega el estado para la respuesta de axios

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/pets/info/colors'); 
        setresponseDataColors(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); // Llama a la función fetchData para obtener los datos
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
    id_shelter: 1,
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

            <div style={{ marginBottom: '60px' }}>
              <InputCB type="checkbox" />
            </div>

            {/* <div style={{ marginBottom: '60px' }}>
            <FieldArray name="colors">
              {({ push, remove }) => (
                <>

                  {values.colors.map((color, index) => (
                    <div key={index}>
                      <div style={{ marginBottom: '60px' }}>
                        <Field
                          id={`color[${index}]`}
                          name={`colors[${index}]`}
                        >
                          {({ field }) => (
                            <>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                                <InputLabel id={`color-label[${index}]`}>Color</InputLabel>
                                <Select
                                  {...field}
                                  labelId={`color-label[${index}]`}
                                  label="Color"
                                  sx={{ width: '100%' }} // Estilos personalizados aquí
                                >
                                  <MenuItem value="">
                                    <em>Quitar</em>
                                  </MenuItem>
                                  {responseDataColors?.response.map((item) => ( 
                                    <MenuItem value={item.id_color}>{item.title}</MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              <ErrorMessage name={`colors[${index}]`} component="div" />
                            </>
                          )}
                        </Field>
                      </div>
                      <AgregarEliminar type="button" onClick={() => remove(index)} sx={{ marginBottom: 20 }}>
                        Eliminar Color
                      </AgregarEliminar>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Agregar Color
                  </button>
                </>
              )}
            </FieldArray>
            <ErrorMessage name="colors" component="div" />
          </div> */}

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