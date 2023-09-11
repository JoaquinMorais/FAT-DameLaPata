import React from 'react';
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
import Navbar from '../components/NavBar/Navbar';

const BackgroundImage = styled.div`
  background-image: url('https://images.unsplash.com/photo-1519375722682-222902a76bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYSUyMGVuJTIwbGFzJTIwbW9udGElQzMlQjFhc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
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

const EditButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
`;

const DeleteButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: -10px;
  z-index: 1;
  background-color: #ff0000;
  color: white;
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

function AdopterProfile() {
  const user = {
    name: 'John Doe',
    username: 'johndoe123',
    surname: 'Doe',
    email: 'johndoe@example.com',
    city: 'City',
    province: 'Province',
    district: 'District',
    birthdate: '01/01/1990',
    phone_number: '+1234567890',
    Type_document: 'Document Type',
    Edad: '30',
  };

  return (
    <>
      <Navbar />
      <BackgroundImage>
        <CenteredContainer maxWidth="md">
          <CenteredGrid container spacing={3}>
            <Grid item xs={12} md={4}>
              <DeleteButton variant="contained" color="secondary">
                <DeleteIcon />
              </DeleteButton>
              <UserProfileAvatarContainer>
                <UserProfileAvatar
                  alt="User Profile"
                  src="https://assets.popbuzz.com/2022/48/is-emma-myers-related-to-maddie-ziegler-1669656275-view-0.jpg"
                />
                <EditButton variant="contained" color="primary">
                  <EditIcon />
                </EditButton>
              </UserProfileAvatarContainer>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">Bienvenido {user.name}</Typography>
              <StyledHr />
              <Typography variant="h4">DATOS DE USUARIO</Typography>
              <StyledHr />
              <Typography variant="body1">Username: {user.username}</Typography>
              <Typography variant="body1">Name: {user.name}</Typography>
              <Typography variant="body1">Surname: {user.surname}</Typography>
              <Typography variant="body1">Email: {user.email}</Typography>
              <Typography variant="body1">
                Location: {user.city}, {user.province}, {user.district}
              </Typography>
              <Typography variant="body1">Birthdate: {user.birthdate}</Typography>
              <Typography variant="body1">Type Document: {user.Type_document}</Typography>
              <Typography variant="body1">Edad: {user.Edad}</Typography>
              <Button variant="contained" color="primary">
                Editar Perfil
              </Button>
              <StyledHr />
              <ContactInfoContainer>
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <Typography variant="body1">Phone Number: {user.phone_number}</Typography>
              </ContactInfoContainer>
              <ContactInfoContainer>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <Typography variant="body1">Email: {user.email}</Typography>
              </ContactInfoContainer>
            </Grid>
          </CenteredGrid>
        </CenteredContainer>
      </BackgroundImage>
    </>
  );
}

export default AdopterProfile;
