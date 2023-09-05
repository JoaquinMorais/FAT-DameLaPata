import React from 'react';
import Navbar from '../NavBar/Navbar';
import { styled } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function AdopterRegister() {
  const handleSubmit = (values) => {
    delete values.repeatPassword;

    console.log(JSON.stringify(values, null, 2));
  };

  const validate = (values) => {
    const errors = {};

    if (values.password !== values.repeatPassword) {
      errors.repeatPassword = 'Las contraseñas no coinciden';
    }

    if (!/(?=.*[A-Z])/.test(values.password)) {
      errors.password = 'La contraseña debe contener al menos una mayúscula';
    }

    if (!/(?=.*\d)/.test(values.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    }

    if (values.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    return errors;
  };

  return (
    <>
      <Navbar />
      <StyledRegister>
        <h3>INICIA SESIÓN</h3>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            name: '',
            surname: '',
            province: '',
            city: '',
            district: '',
            birthdate: '',
            phone_number: '',
            id_document_type: '',
            document: '',
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {() => (
            <Form>
              <StyledFormField>
                <label htmlFor="username">Nombre de usuario</label>
                <Field type="text" id="username" name="username" className="form-control" placeholder="Pepito123" />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="name">Nombre completo</label>
                <Field type="text" id="name" name="name" className="form-control" placeholder="" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="surname">Apellido/s</label>
                <Field type="text" id="surname" name="surname" className="form-control" placeholder="" />
                <ErrorMessage name="surname" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="form-control" placeholder="Ingresa tu correo electrónico" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="password">Contraseña</label>
                <Field type="password" id="password" name="password" className="form-control" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="repeatPassword">Repetir contraseña</label>
                <Field type="password" id="repeatPassword" name="repeatPassword" className="form-control" placeholder="Repite la contraseña" />
                <ErrorMessage name="repeatPassword" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="province">Provincia</label>
                <Field type="text" id="province" name="province" className="form-control" placeholder="Ingresa tu provincia" />
                <ErrorMessage name="province" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="city">Ciudad</label>
                <Field type="text" id="city" name="city" className="form-control" placeholder="Ingresa tu ciudad" />
                <ErrorMessage name="city" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="district">Barrio</label>
                <Field type="text" id="district" name="district" className="form-control" placeholder="Ingresa tu barrio" />
                <ErrorMessage name="district" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <Field type="date" id="birthdate" name="birthdate" className="form-control" />
                <ErrorMessage name="birthdate" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="phone_number">Numero de telefono</label>
                <Field type="number" id="phone_number" name="phone_number" className="form-control" placeholder="Ingresa tu número de teléfono" />
                <ErrorMessage name="phone_number" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="id_document_type">Tipo de documento</label>
                <Field as="select" id="id_document_type" name="id_document_type" className="form-control">
                  <option value={1}>Documento 1</option>
                  <option value={2}>Documento 2</option>
                  <option value={3}>Documento 3</option>
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="id_document_type" component="div" className="text-danger" />
              </StyledFormField>
              <StyledFormField>
                <label htmlFor="document">Numero de documento</label>
                <Field type="number" id="document" name="document" className="form-control" placeholder="Ingresa tu número de documento" />
                <ErrorMessage name="document" component="div" className="text-danger" />
              </StyledFormField>

              <StyledButton type="submit">Registrarse</StyledButton>
            </Form>
          )}
        </Formik>
        <StyledLink to="/login">¿Ya tienes una cuenta? Inicia sesión aquí</StyledLink>
      </StyledRegister>
    </>
  );
}

export default AdopterRegister;

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  background-color: #007bff;
  width: 100%;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledFormField = styled.div`
  width: 100%;
  margin-bottom: 15px;

  label {
    font-weight: bold;
  }

  .form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #f8f8f8; 
    transition: border-color 0.2s, box-shadow 0.2s;
    &:focus {
      border-color: #007bff; 
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
    }
  }

  .text-danger {
    color: red;
    font-size: 0.875rem;
  }
`;
