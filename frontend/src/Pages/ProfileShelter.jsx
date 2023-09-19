import React from 'react';
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
import Navbar from '../components/NavBar/Navbar';
import ConfirmDialog from '../components/CloseAccount/ConfirmDialog';
import SuccessDialog from '../components/CloseAccount/SuccessDialog';

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

  const shelter = {
    name: 'Nombre del Refugio',
    username: 'nombre_refugio123',
    surname: 'Apellido del Refugio',
    email: 'refugio@example.com',
    city: 'Ciudad del Refugio',
    province: 'Provincia del Refugio',
    district: 'Distrito del Refugio',
    birthdate: '01/01/1990',
    phone_number: '+1234567890',
    Type_document: 'Tipo de Documento del Refugio',
    Edad: '30',
  };

  return (
    <>
      <Navbar />
      <BackgroundImage>
        <CenteredContainer maxWidth="md">
          <CenteredGrid container spacing={3}>
            <Grid item xs={12} md={4}>

              <UserProfileAvatarContainer>
                <UserProfileAvatar
                  alt="User Profile"
                  src="https://i.pinimg.com/474x/c9/b0/78/c9b0782d841f83673f58d851c89a6e48.jpg"
                />
                <EditButton variant="contained" color="primary">
                  <EditIcon /> 
                </EditButton>
              </UserProfileAvatarContainer>
              
              <DeleteButton variant="contained" color="secondary" onClick={openConfirmation}>
                <DeleteIcon /> 
              </DeleteButton>
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
              <Typography variant="body1"><strong>Surname:</strong> {shelter.surname}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {shelter.email}</Typography>
              <Typography variant="body1">
                <strong>Location:</strong> {shelter.city}, {shelter.province}, {shelter.district}
              </Typography>
              <Typography variant="body1"><strong>Birthdate:</strong> {shelter.birthdate}</Typography>
              <Typography variant="body1"><strong>Type Document:</strong> {shelter.Type_document}</Typography>
              <Typography variant="body1"><strong>Edad:</strong> {shelter.Edad}</Typography>
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
