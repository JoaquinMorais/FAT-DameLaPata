import React from 'react'
import { styled } from 'styled-components'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function CardPerson(props) {
  return (
    <Content>
      <Card sx={{ width: 250, height: 350, borderRadius: 2 }}>
        <CardMedia
          sx={{ height: 150}}
          image={props.foto}
          title={props.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ borderBottom: 1 }}>
            {props.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descripcion}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <StyledButton size="small">
            <a href={`/pet/details/${props.id_pet}`} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Eliminar</a>
          </StyledButton>
        </CardActions>
      </Card>
    </Content>
  )
}

export default CardPerson;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
  border-radius: 8px;
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
