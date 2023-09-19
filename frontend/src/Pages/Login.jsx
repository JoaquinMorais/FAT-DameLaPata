import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Navbar from '../components/NavBar/Navbar';

const validationSchema = Yup.object({
  email: Yup.string().email('Ingresa un email válido').required('El email es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Valores enviados:', values);
    },
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }}>
        <Paper elevation={10} style={{ padding: '20px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '20px' }}>INICIA SESIÓN</h1>

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>
              Enviar
            </Button>
          </form>
        </Paper>
      </Container>
      <BackgroundImage />
    </>
  );
};

export default Login;

const BackgroundImage = styled.div`
  background-image: url("https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/PWEJPEIL7NFRBFEGPBTJSSNLAA.jpg");
  background-size: cover; 
  background-repeat: no-repeat; 
  height: 100vh; 
  z-index: -99;
  filter: blur(8px);
`;
