import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShelterRegister from "../components/Register/RegisterShelter";
import Explicacion from "../components/Register/Explicacion";
import { Formik, useFormik } from 'formik';
import { basicSchema } from "../schemas";
import Navbar from '../components/NavBar/Navbar';
import axios from 'axios'
import AdopterRegister from "../components/Register/RegisterAdopter";

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
            <AdopterRegister/>
        </TabPanel>
        <TabPanel>
          <ShelterRegister/>
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
