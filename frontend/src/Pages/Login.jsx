import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import { styled } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoaderComp from '../components/Loader/Loader';
import IsLogged from '../my_methods/session_methods';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Ingresa un email válido').required('El email es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

function Login() {

  const [isLoading, setIsLoading] = useState(true);
  const [pages_array, setPagesArray] = useState([]);
  const [settings_array, setSettingsArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedResponse = await IsLogged();
        console.log(loggedResponse);
        setPagesArray(loggedResponse.pages_array);
        setSettingsArray(loggedResponse.setting_array);
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that might occur during the API call
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);


  const handleSubmit = (values) => {
    delete values.repeatPassword;
    console.log(JSON.stringify(values, null, 2));

  };


  return (
    <>
      {isLoading ? (
        <LoaderComp/>
      ) : (
        <>
          <Navbar pages_array={pages_array} settings_array={settings_array} />
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
      )}
    </>
  );
}

export default Login;

const LogoImage = styled.img``
const StyledLogin = styled.div``
const RegisterLink = styled.div``