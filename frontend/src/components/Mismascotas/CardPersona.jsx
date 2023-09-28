import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from 'styled-components';

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
    
          <Button variant='outlined' color="success" >
            Aceptar
          </Button>
          <Button variant='outlined' color="error">
            Rechazar
          </Button>
        </StyledCardActions>
      </StyledCard>
    </Content>
  );
}

export default CardPerson;
