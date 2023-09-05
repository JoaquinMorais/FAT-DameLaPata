import React, { useState } from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar/Navbar';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'; // Agrega FieldArray para manejar arrays
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Add() {
  const classes = useStyles();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    birthdate: '',
    size: '',
    weight: '',
    id_shelter: 1, //dsp eliminar
    image_path: '',
    characteristics: [],
    colors: [],
  };


  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    birthdate: Yup.date().required('La fecha de nacimiento es obligatoria'),
    size: Yup.number().required('El tamaño es obligatorio'),
    weight: Yup.number().required('El peso es obligatorio'),
    image_path: Yup.string().required('Necesito verlo che culiau'),
    characteristics: Yup.array()
      .of(Yup.string())
      .required('¿Cómo es el perro bro?'),
    colors: Yup.array()
      .of(Yup.string())
      .required('Color color...'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(JSON.stringify(values, null, 2));
    const dataToSend = values;
    try {
      const response = await axios.put('http://localhost:5000/pet', dataToSend);
      console.log('Response:', response.data);
      // Después de completar la operación, redirige a la página "/adoptar"
      navigate('/dogs');
    } catch (error) {
      console.error('Error:', error);
    }
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
            <TextField
              required
              id="standard-textarea"
              label="Nombre"
              placeholder="Firulais..."
              multiline
              variant="standard"
            />
              <ErrorMessage name="name" component="div" />
            </div>

            <div style={{ marginBottom: '60px' }}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
              <ErrorMessage name="birthdate" component="div" />
            </div>

            <div style={{ marginBottom: '60px' }}>
            <TextField
              required
              id="standard-textarea"
              label="Tamaño"
              placeholder="Firulais..."
              multiline
              variant="standard"
            />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <Texto>Peso</Texto>
              <FieldStyled type="number" name="weight" placeholder="Ejemplo: 18,12" />
              <ErrorMessage name="weight" component="div" />
            </div>

            <div>
              <Texto>Imagen</Texto>
              <FieldStyled type="text" name="image_path" placeholder="https://..." />
              <ErrorMessage name="image_path" component="div" />
            </div>

            <div>
            <Texto>Color</Texto>
            <FieldArray name="colors">
              {({ push, remove }) => (
                <>
                  {values.colors.map((color, index) => (
                    <div key={index}>
                      <FieldStyled
                        type="text"
                        name={`colors[${index}]`}
                        placeholder="Amarillo patito..."
                      />
                      <button type="button" onClick={() => remove(index)}>
                        Eliminar Color
                      </button>
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

          <div>
            <Texto>Caracteristicas</Texto>
            <FieldArray name="characteristics">
              {({ push, remove }) => (
                <>
                  {values.characteristics.map((characteristic, index) => (
                    <div key={index}>
                      <FieldStyled
                        type="text"
                        name={`characteristics[${index}]`}
                        placeholder="Lorem ipsum..."
                      />
                      <button type="button" onClick={() => remove(index)}>
                        Eliminar Característica
                      </button>
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