import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../components/NavBar/NavBar'; // Remove the duplicate import here
import ConfirmDialog from '../components/CloseAccount/ConfirmDialog';
import SuccessDialog from '../components/CloseAccount/SuccessDialog';
import {  GetProfile } from '../my_methods/session_methods';


const BackgroundImage = styled.div`
  background-image: url('https://img.freepik.com/vector-premium/marca-fondo-huellas-animales-patron-senderos-pata-costura-vectorial_566075-514.jpg?w=740');
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

const CenteredGrid = styled(Grid)`
  text-align: center;
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

const RoundButton = styled(Button)`
  border-radius: 50% !important; 
  width: 40px !important; 
  height: 55px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfileAvatar = styled(Avatar)`
  width: 240px !important; 
  height: 240px !important;
  margin-left: 25px;
`;

const EditButton = styled(RoundButton)`
  margin-top: -150px !important;
  margin-left: -30px !important;
  background-color: #007bff;
  color: white;
`;

const DeleteButton = styled(RoundButton)`
    && {
        background-color: #ff0000;
        color: white;
    }
`;
const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
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
          window.location.href = "/profile/adopter";
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
      <NavBar />
      <BackgroundImage>
        <CenteredContainer maxWidth="lg">
          <CenteredGrid container spacing={3}>
            <Grid item xs={12} md={4}>

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
            <Grid item xs={12} md={8}>
              <Typography variant="h4">Bienvenido <strong>{shelter.name}</strong></Typography>
              <StyledHr />
              <Typography variant="h4">DATOS DE USUARIO</Typography>
              <StyledHr />
              <Typography variant="body1"><strong>Username:</strong> {shelter.username}</Typography>
              <Typography variant="body1"><strong>Name:</strong> {shelter.name}</Typography>
              
              <Typography variant="body1"><strong>Email:</strong> {shelter.email}</Typography>
              <Typography variant="body1">
                <strong>Location:</strong> {shelter.street}, {shelter.location}, {shelter.district}
              </Typography>
              <Button variant="contained" color="primary">
                Editar Perfil
              </Button>
              <StyledHr />
              <ContactInfoContainer>
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <Typography variant="body1"><strong>Phone Number:</strong> {shelter.phone_number}</Typography>
              </ContactInfoContainer>
              <ContactInfoContainer>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <Typography variant="body1"><strong>Email:</strong> {shelter.email}</Typography>
              </ContactInfoContainer>
            </Grid>
          </CenteredGrid>
        </CenteredContainer>
      </BackgroundImage>
    </>
  );
}

export default ShelterProfile;
