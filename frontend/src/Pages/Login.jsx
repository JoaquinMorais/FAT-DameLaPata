import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Navbar from '../components/NavBar/Navbar';
import LoaderComp from '../components/Loader/Loader';
import { SendLogin, FetchNavbarItems } from '../my_methods/session_methods';

// Enlace de la imagen de fondo
const backgroundImageUrl = "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/PWEJPEIL7NFRBFEGPBTJSSNLAA.jpg";

const validationSchema = Yup.object({
  password: Yup.string().required('La contraseña es requerida'),
});

function Login() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);


  const handleSubmit = (values) => {
    delete values.repeatPassword;
    console.log(JSON.stringify(values, null, 2));

  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      let holis = await SendLogin(values);
    },
  });

  return (
    <>
    {isLoading ? (
      <LoaderComp/>
    ) : (
    <>
    
      <Navbar />
      
      <BackgroundImage>
        <CenteredContainer >
          <Paper elevation={10} style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>INICIA SESIÓN</h1>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    label="Usuario"
                    variant="outlined"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
              </Grid>
              <p style={{ marginTop: '10px' }}><a href="/register">¿No tienes una cuenta? Regístrate</a></p>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px'}}>
                Enviar
              </Button>
            </form>
          </Paper>
        </CenteredContainer>
      </BackgroundImage>
    </>
  )}
  </>
  );
};

export default Login;

const BackgroundImage = styled.div`
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px !important; 
`;