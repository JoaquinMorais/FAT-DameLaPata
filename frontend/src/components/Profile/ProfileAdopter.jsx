import React, { useEffect, useState } from 'react';
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
import {  GetProfile } from '../../my_methods/session_methods';
import Navbar from '../NavBar/NavBar';
import ConfirmDialog from '../CloseAccount/ConfirmDialog';
import SuccessDialog from '../CloseAccount/SuccessDialog';
import GetPreference from '../../my_methods/query_methods';
import axios from 'axios';

const BackgroundImage = styled.div`
  background-image: url('https://images.unsplash.com/photo-1519375722682-222902a76bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYSUyMGVuJTIwbGFzJTIwbW9udGElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width:100%;
  min-height: 100vh;
  position: absolute;
  top: 0; 
  left: 0;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 40px;
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

const UserProfileAvatar = styled(Avatar)`
  width: 240px !important;
  height: 240px !important;
  margin-left: 25px;
`;

const RoundButton = styled(Button)`
  border-radius: 50% !important; 
  width: 40px !important; 
  height: 55px !important;
  display: flex;
  align-items: center;
  justify-content: center;
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

const PreferencesContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const EditPreferencesButton = styled(Button)`
  margin-top: 10px;
`;

function AdopterProfile() {
  // Conexion con componenete y etc
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

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


  const [user, setUser] = useState({
    name: '',
    username: '',
    surname: '',
    email: '',
    city: '',
    province: '',
    district: '',
    birthdate: '',
    phone_number: '',
    Type_document: '',
    Edad: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetProfile();
        if (response.data['status'] !== 200){
          window.location.href = "/login";
        }
        
        // Update the user state with the fetched data
        setUser({
          name: response.data.response['name'],
          username: response.data.response['username'],
          surname: response.data.response['surname'],
          email: response.data.response['email'],
          location: response.data.response.address['district'],
          street: response.data.response.address['street'],
          district: response.data.response.address['location'],
          birthdate: response.data.response['birth_date'],
          phone_number: response.data.response['phone_number'],
        });
        console.log(response);
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
          <CenteredGrid container spacing={3}>
          <Grid item xs={12} md={4}>

              <UserProfileAvatarContainer>
                <UserProfileAvatar
                  alt="User Profile"
                  src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                />
              </UserProfileAvatarContainer>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h4">Bienvenido <strong>{user.name}</strong></Typography>
              <StyledHr />
              <Typography variant="h4">DATOS DE USUARIO</Typography>
              <StyledHr />
              <Typography variant="body1"><strong>Username:</strong> {user.username}</Typography>
              <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
              <Typography variant="body1"><strong>Surname:</strong> {user.surname}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
              <Typography variant="body1">
                <strong>Location:</strong> {user.location}, {user.district}, {user.street}
              </Typography>
              <Typography variant="body1"><strong>Birthdate:</strong> {user.birthdate}</Typography>
              <StyledHr />
              <ContactInfoContainer>
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <Typography variant="body1"><strong>Phone Number:</strong> {user.phone_number}</Typography>
              </ContactInfoContainer>
              <ContactInfoContainer>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
              </ContactInfoContainer>
              
              <StyledHr />
            </Grid>
          </CenteredGrid>
        </CenteredContainer>
      </BackgroundImage>
    </>
  );
}

export default AdopterProfile;
