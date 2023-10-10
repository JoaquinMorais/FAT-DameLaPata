import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from 'styled-components';
import axios from 'axios';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 8px;
`;

const StyledCard = styled(Card)`
  width: 100%;

  @media (max-width: 720px) {
    max-width: 100%;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 250px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function CardPerson(props) {
  const [responseData, setResponseData] = useState(null);

  const handleReject = async () => {
    try {
      await axios.post('http://localhost:5000/shelter/match', {
        id_pet: props.id_pet, 
        id_state: 4, 
      });

      console.log('La petición fue rechazada.');
    } catch (error) {
      console.error('Error al rechazar la solicitud:', error.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/shelter/match');
        setResponseData(response.data);
        console.log('response Data:', responseData);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <Content>
      <StyledCard>
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ borderBottom: 1 }}>
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Barrio: {props.district}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Telefono: {props.phone}
          </Typography>
        </StyledCardContent>
        <StyledCardActions>
          <Button variant='outlined' color="success">
            Aceptar
          </Button>
          <Button variant='outlined' color="error" onClick={handleReject}>
            Rechazar
          </Button>
        </StyledCardActions>
      </StyledCard>
    </Content>
  );
}

export default CardPerson;
