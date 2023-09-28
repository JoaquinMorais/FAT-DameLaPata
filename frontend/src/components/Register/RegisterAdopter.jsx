import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Alert } from '@mui/material';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { SendRegister } from '../../my_methods/session_methods';

const validationSchema = Yup.object({
  username: Yup.string().required('Campo requerido'),
  name: Yup.string().required('Campo requerido'),
  surname: Yup.string().required('Campo requerido'),
  password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Campo requerido'),
  province: Yup.string().required('Campo requerido'),
  city: Yup.string().required('Campo requerido'),
  district: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Dirección de correo electrónico no válida').required('Campo requerido'),
  birthdate: Yup.date().required('Campo requerido'),
  phone_number: Yup.string().required('Campo requerido'),
  id_document_type: Yup.string().required('Campo requerido'),
  document: Yup.string().required('Campo requerido'),
});

const initialValues = {
  username: '',
  name: '',
  surname: '',
  password: '',
  repeatPassword: '',
  province: '',
  city: '',
  district: '',
  email: '',
  birthdate: null,
  phone_number: '',
  id_document_type: '',
  document: '',
};

function AdopterRegister() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialog_message , setDialogMessage] = useState('error inesperado');
  const [dialog_state , setDialogState] = useState('error');

  async function SendAdopter(values) {
    var response = await SendRegister(values, 'adopter');
    console.log('should send adopter')
    try {
      if (response.status === 200){
        setIsDialogOpen(true)
        setDialogMessage('usuario creado')
        setDialogState('success')  

        window.location.href="/profile";
      }
      else{
        setIsDialogOpen(true)
        setDialogMessage('Ha ocurrido un error: ' + response['response'])
        setDialogState('error')  
      }

    } catch (error) {
      setIsDialogOpen(true)
      setDialogMessage('Ha ocurrido un error: error interno')
      setDialogState('error')

    }
  }


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      SendAdopter(values)
    },
  });


  return (
    <form onSubmit={formik.handleSubmit} >
      <CenteredContainer >
            {isDialogOpen && (
              <Alert severity={dialog_state}>{dialog_message}</Alert>
            )}
      </CenteredContainer>
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
            id="surname"
            name="surname"
            label="Apellido"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
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
            id="birthdate"
            name="birthdate"
            type="date"
            label="Fecha de nacimiento"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
            helperText={formik.touched.birthdate && formik.errors.birthdate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <p>Tipo de documento de identidad </p>
          <RadioGroup
            row
            aria-label="Tipo de documento de identidad"
            name="id_document_type"
            value={formik.values.id_document_type}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="LIBRETA CÍVICA"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="DNI"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="document"
            name="document"
            label="Número de documento de identidad"
            value={formik.values.document}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.document && Boolean(formik.errors.document)}
            helperText={formik.touched.document && formik.errors.document}
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

export default AdopterRegister;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px !important; 
`;