import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from '../NavBar/NavBar';
import ConfirmDialog from '../CloseAccount/ConfirmDialog';
import SuccessDialog from '../CloseAccount/SuccessDialog';
import { GetProfile } from '../../my_methods/session_methods';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SignpostIcon from '@mui/icons-material/Signpost';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditIcon from '@mui/icons-material/Edit';

const BackgroundImage = styled.div`
  background-color:#452900;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;  
  position: absolute;
  top: 0;
  left: 0;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 

  @media (max-width: 768px) {
    padding: 40px;
    min-height: 120vh;
  }
`;

const UserProfileAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const UserProfileAvatar = styled(Avatar)`
  width: 240px !important; 
  height: 240px !important;
  margin-left: 25px;
`;

const StyledHr = styled.hr`
  width: 100%;
  border: none;
  height: 2px;
  background-color: #007bff;
  margin: 20px 0; 
`;

function ShelterProfile() {
  // Conexion con componenete y etc
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const openConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleDeleteAccount = async () => {
    // inicio de flag
    // iniciar loder
    try {
        // Hacer una solicitud POST al servidor Flask para cerrar la cuenta
        await axios.post(`/closeaccount/1`); 
        setIsAccountDeleted(true);
        closeConfirmation();
    } catch (error) {
        console.error(error);
    }
    // flag down
    // cerrar loder
  };

  const closeSuccessDialog = () => {
      setIsAccountDeleted(false);
  };


  const [shelter, setUser] = useState({
    name: '',
    username: '',
    email: '',
    location: '',
    street: '',
    district: '',
    phone_number: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetProfile();

        if (response.data['status'] !== 200){
          window.location.href = "/login";
        }
        if (response.data.response['type'] !== 'shelter'){
          window.location.href = "/profile";
        }
        // Update the user state with the fetched data
        setUser({
          name: response.data.response['name'],
          username: response.data.response['username'],
          email: response.data.response['email'],
          location: response.data.response.address['district'],
          street: response.data.response.address['street'],
          district: response.data.response.address['location'],
          phone_number: response.data.response['phone_number'],
        });
        console.log(response.data.response['address']); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <BackgroundImage>
        <CenteredContainer maxWidth="lg">
            <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{textAlign:'center', marginTop:'30px', marginBottom:'30px'}}>Bienvenido <strong>{shelter.name}</strong></Typography>

              <UserProfileAvatarContainer>
                <UserProfileAvatar
                  alt="User Profile"
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                />
                
                {/* <EditButton variant="contained" color="primary">
                  <EditIcon /> 
                </EditButton> */}
              </UserProfileAvatarContainer>
              
              {/* <DeleteButton variant="contained" color="secondary" onClick={openConfirmation}>
                <DeleteIcon /> 
              </DeleteButton> */}

              {isConfirmationOpen && !isAccountDeleted && (
                <ConfirmDialog
                    isOpen={isConfirmationOpen}
                    onClose={closeConfirmation}
                    onConfirm={handleDeleteAccount}
                />
              )}
              {isAccountDeleted && (
                <SuccessDialog
                    isOpen={isAccountDeleted}
                    onClose={closeSuccessDialog}
                />
              )}

            </Grid>
            <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <StyledHr />
              <Typography variant="h4" sx={{textAlign:'center'}}>DATOS DE USUARIO <Button variant="outlined" size='small'><EditIcon /></Button></Typography>
              <StyledHr />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-username">Nombre de usuario</InputLabel>
                    <Input
                      id="input-username"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircleIcon />
                        </InputAdornment>
                      }
                      value={shelter.username}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-organization">Nombre de organización</InputLabel>
                    <Input
                      id="input-organization"
                      startAdornment={
                        <InputAdornment position="start">
                          <CorporateFareIcon />
                        </InputAdornment>
                      }
                      value={shelter.name}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-street">Calle</InputLabel>
                    <Input
                      id="input-street"
                      startAdornment={
                        <InputAdornment position="start">
                          <SignpostIcon />
                        </InputAdornment>
                      }
                      value={shelter.street}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-location">Provincia / Ciudad</InputLabel>
                    <Input
                      id="input-location"
                      startAdornment={
                        <InputAdornment position="start">
                          <LocationCityIcon />
                        </InputAdornment>
                      }
                      value={`${shelter.location}, ${shelter.district}`}
                      disabled
                    />
                  </FormControl>
                </Grid>
              </Grid>
                    
              <StyledHr />
                    
              <Grid container spacing={2} >
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-phone">Número de teléfono</InputLabel>
                    <Input
                      id="input-phone"
                      startAdornment={
                        <InputAdornment position="start">
                          <LocalPhoneIcon />
                        </InputAdornment>
                      }
                      value={shelter.phone_number}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
                  <FormControl variant="standard">
                    <InputLabel htmlFor="input-email">Correo electrónico</InputLabel>
                    <Input
                      id="input-email"
                      startAdornment={
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      }
                      value={shelter.email}
                      disabled
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
        </CenteredContainer>
      </BackgroundImage>
    </>
  );
}

export default ShelterProfile;
