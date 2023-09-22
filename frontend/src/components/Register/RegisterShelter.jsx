import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const validationSchema = Yup.object({
  username: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Dirección de correo electrónico no válida').required('Campo requerido'),
  password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Campo requerido'),
  name: Yup.string().required('Campo requerido'),
  province: Yup.string().required('Campo requerido'),
  city: Yup.string().required('Campo requerido'),
  district: Yup.string().required('Campo requerido'),
  phone_number: Yup.string().required('Campo requerido'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  name: '',
  province: '',
  city: '',
  district: '',
  phone_number: '',
};


async function SendShelter(values) {
  try {
    const response = await axios.put('http://localhost:5000/shelter/register', values );
    window.location.href="/profile/shelter";
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}

function ShelterRegister() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      SendShelter(values)
      console.log(values);
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Nombre de usuario"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            label="Repetir Contraseña"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
            helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="province"
            name="province"
            label="Provincia"
            value={formik.values.province}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.province && Boolean(formik.errors.province)}
            helperText={formik.touched.province && formik.errors.province}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label="Ciudad"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="district"
            name="district"
            label="Distrito"
            value={formik.values.district}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.district && Boolean(formik.errors.district)}
            helperText={formik.touched.district && formik.errors.district}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="phone_number"
            name="phone_number"
            label="Número de teléfono"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
            helperText={formik.touched.phone_number && formik.errors.phone_number}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" style={{width:'100%'}}>
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ShelterRegister;