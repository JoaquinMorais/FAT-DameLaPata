import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Explicacion from "../components/Register/Explicacion";
import { Formik, useFormik } from 'formik';
import { basicSchema } from "../schemas";
import Navbar from '../components/NavBar/Navbar';
import axios from 'axios'

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Campo requerido';
  } else if (values.username.length > 15) {
    errors.username = 'Debe tener 15 caracteres o menos';
  }

  if (!values.name) {
    errors.name = 'Campo requerido';
  } else if (values.name.length > 15) {
    errors.name = 'Debe tener 15 caracteres o menos';
  }

  if (!values.surname) {
    errors.surname = 'Campo requerido';
  } else if (values.surname.length > 20) {
    errors.surname = 'Debe tener 20 caracteres o menos';
  }

  if (!values.email) {
    errors.email = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de correo electrónico inválida';
  }

  const onSubmit = () =>{
    console.log('subido');
  }
  return errors;
};

function Register() {
  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      surname: '',
      password: '',
      province: '',
      city: '',
      district: '',
      email: '',
      birthdate: '',
      phone_number: '',
      id_document_type: 1,
      document: ''  
    },
    validationSchema: basicSchema,
    validate,
    onSubmit: values => {

      console.log(JSON.stringify(values, null, 2))
      const dataToSend = values
      axios.put('http://localhost:5000/adopter/register', dataToSend)
        .then(response => {
          console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    
    },
  });
  return (
    <Container>
      <Navbar />
      <h1>¿Cómo te quieres registrar?</h1>
      <Tabs>
        <TabList>
          <Tab>Adoptante</Tab>
          <Tab>Refugio - Home adopter</Tab>
        </TabList>
        <TabPanel>
          <Explicacion
            txt={'Completar este apartado nos permitirá conocerte mejor y entender tus preferencias para poder hacer la mejor coincidencia entre tu estilo de vida y el perro que deseas adoptar. Queremos asegurarnos de que cada perro encuentre un hogar donde sea amado y cuidado adecuadamente.'}
          />
          <StyledForm onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="JoaMora"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <Error>{formik.errors.username}</Error> : null}

            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Pepito"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}

            <label htmlFor="surname">Apellido</label>
            <input
              id="surname"
              name="surname"
              type="text"
              placeholder="Perez"
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
            {formik.errors.surname ? <Error>{formik.errors.surname}</Error> : null}

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Introduce una contraseña"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <Error>{formik.errors.password}</Error> : null}

            <label htmlFor="province">Provincia</label>
            <input
              id="province"
              name="province"
              type="text"
              placeholder="Cordoba"
              onChange={formik.handleChange}
              value={formik.values.province}
            />

            <label htmlFor="city">Ciudad</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Cordoba"
              onChange={formik.handleChange}
              value={formik.values.city}
            />

            <label htmlFor="district">Barrio</label>
            <input
              id="district"
              name="district"
              type="text"
              placeholder="Alberdi"
              onChange={formik.handleChange}
              value={formik.values.district}
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="pepitoperez@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}

            <label htmlFor="birthdate">Fecha de Nacimiento</label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              placeholder="02/03/2001"
              onChange={formik.handleChange}
              value={formik.values.birthdate}
            />

            <label htmlFor="phone_number">Número de Teléfono</label>
            <input
              id="phone_number"
              name="phone_number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
            />

            <label htmlFor="id_document_type">Tipo de Documento</label>
            <select 
              id="id_document_type"
              name="id_document_type"
              placeholder=""
              onChange={formik.handleChange}
              value={formik.values.id_document_type}>
                <option value={1}>DNI</option>
                <option value={2}>LE Nro</option>
                <option value={3}>LC Nro</option>

              </select>

            <label htmlFor="document">Número de Documento</label>
            <input
              id="document"
              name="document"
              type="text"
              placeholder="43929199"
              onChange={formik.handleChange}
              value={formik.values.document}
            />
            
            <button type="submit">Enviar</button>
          </StyledForm>
        </TabPanel>
        <TabPanel>
        <Explicacion
            txt={'Si sos refugio o un hogar que tenga un perro y lo quiera dar en adopcion, este es tu lugar'}
          />
                
          <StyledForm onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <Error>{formik.errors.username}</Error> : null}

            <label htmlFor="name">Nombre del refugio</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <Error>{formik.errors.password}</Error> : null}

            <label htmlFor="province">Provincia</label>
            <input
              id="province"
              name="province"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.province}
            />

            <label htmlFor="city">Ciudad</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            <button type="submit">Enviar</button>
          </StyledForm>
        </TabPanel>
        </Tabs>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  margin-top: 50px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    margin-top: 10px;
    font-weight: bold;
  }

  input,
  select {
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
