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


function Add() {

  const [characteristicsData, setCharacteristicsData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener las características desde tu servidor
    axios.get('http://localhost:3000/pets/info/characteristics')
      .then((response) => {
        setCharacteristicsData(response.data); // Actualiza el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error('Error al obtener características:', error);
      });
  }, []);

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
    name: Yup.string().required('El género es obligatorio.'),
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
                                  <MenuItem value={1}>Blanco</MenuItem>
                                  <MenuItem value={2}>Negro</MenuItem>
                                  <MenuItem value={3}>Dorado</MenuItem>
                                  <MenuItem value={4}>Marrón</MenuItem>
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
          </div>

          <div style={{ marginBottom: '60px' }}>
            <FieldArray name="characteristics">
              {({ push, remove }) => (
                <>
                  {values.characteristics.map((characteristic, index) => (
                    <div key={index}>
                      <div style={{ marginBottom: '60px' }}>
                        <Field
                          id={`characteristics[${index}]`}
                          name={`characteristics[${index}]`}
                        >
                          {({ field }) => (
                            <>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                                <InputLabel id={`characteristics-label[${index}]`}>Caracteristica</InputLabel>
                                <Select
                                  {...field}
                                  labelId={`characteristics-label[${index}]`}
                                  label="Caracteristica"
                                  sx={{ width: '100%' }} // Estilos personalizados aquí
                                >
                                  <MenuItem value="">
                                    <em>Quitar</em>
                                  </MenuItem>
                                  {characteristicsData.map((characteristicOption) => (
                                    <MenuItem key={characteristicOption.id} value={characteristicOption.id}>
                                      {characteristicOption.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                              <ErrorMessage name={`characteristics[${index}]`} component="div" />
                            </>
                          )}
                        </Field>
                      </div>
                      <AgregarEliminar type="button" onClick={() => remove(index)}>
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