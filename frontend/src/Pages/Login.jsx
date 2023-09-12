import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import { styled } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';



function Login() {

  const handleSubmit = (values) => {
    delete values.repeatPassword;
    console.log(JSON.stringify(values, null, 2));

  };


  return (
    <>
      <Navbar />
      <StyledLogin>
        <LogoImage src="https://i.postimg.cc/RhNwDbCV/logo.png" alt="Logo" />
        <h3>INICIA SESION</h3>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Ingresa nombre de usuario" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field type="password" id="password" name="password" placeholder="Ingresa una contraseña" />
                <ErrorMessage name="password" component="div" className="error" />
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

export default Login;


const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 80%; 
  max-width: 300px; 
  border: 2px solid gray;
  border-radius: 8px;
  background-color: white;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    font-weight: bold;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  .error {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  button {
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
  filter: blur(5px);
`;

const RegisterLink = styled(Link)`
  margin-top: 1rem;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;