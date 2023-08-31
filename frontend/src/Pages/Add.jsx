import React from 'react';
import { styled } from 'styled-components';
import NavBar from '../components/NavBar/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Asegúrate de importar Axios

function Add() {
  const initialValues = {
    name: '',
    birthdate: '',
    size: '',
    weight: '',
    id_shelter: 1,
    image_path: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    birthdate: Yup.date().required('La fecha de nacimiento es obligatoria'),
    size: Yup.number().required('El tamaño es obligatorio'),
    weight: Yup.number().required('El peso es obligatorio'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(JSON.stringify(values, null, 2));
    const dataToSend = values;
    axios
      .put('http://localhost:5000/pet', dataToSend)
      .then((response) => {
        console.log('Response:', response.data);
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
        <Form>
          <Container>
            <Titulo>Empezá a dibujar la felicidad de una persona.</Titulo>
            <Subtitulo>¡Agregá un perrito a la lista de adopción!</Subtitulo>
            <Hr></Hr>

            <div>
              <Texto>Nombre</Texto>
              <FieldStyled type="text" name="name" placeholder="Ejemplo: Firulais..." />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <Texto>Fecha de nacimiento</Texto>
              <FieldStyled type="date" name="birthdate" />
              <ErrorMessage name="birthdate" component="div" />
            </div>

            <div>
              <Texto>Tamaño</Texto>
              <FieldStyled type="number" min="1" max="3" name="size" placeholder="1: Chico; 2: Mediano; 3: Grande" />
              <ErrorMessage name="size" component="div" />
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

            <Boton type="submit">PUBLICAR</Boton>
          </Container>
        </Form>
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
    margin-top: 80px;
`;

const Titulo = styled.h3`
    text-align: center;
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
    &:hover{
        background-color: #f76402;
        cursor: pointer;
    }
`;