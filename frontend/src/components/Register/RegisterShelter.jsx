import React from 'react';
import Navbar from '../NavBar/Navbar';
import { styled } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';



function ShelterRegister() {

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
      <StyledLogin>
        <h3>INICIA SESION</h3>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            name: '',
            province: '',
            city: '',
            district:'',
            phone_number: '',
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario</label>
                <Field type="text" id="username" name="username" placeholder="" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <Field type="text" id="name" name="name" placeholder="" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Ingresa nombre de usuario" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field type="password" id="password" name="password" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="repeatPassword">Repetir contraseña</label>
                <Field type="password" id="repeatPassword" name="repeatPassword" placeholder="Repite la contraseña" />
                <ErrorMessage name="repeatPassword" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="province">Provincia</label>
                <Field type="text" id="province" name="province" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="province" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <Field type="text" id="city" name="city" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="city" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="district">Barrio</label>
                <Field type="text" id="district" name="district" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="district" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Numero de telefono</label>
                <Field type="number" id="phone_number" name="phone_number" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="phone_number" component="div" className="error" />
              </div>
              <button type="submit">Enviar</button>
            </Form>
          )}
        </Formik>
        <RegisterLink to="/register">No tenes una cuenta, registrate</RegisterLink>
      </StyledLogin>
    </>
  ); 
}

export default ShelterRegister;

const StyledLogin = styled.div``
const RegisterLink = styled.a``