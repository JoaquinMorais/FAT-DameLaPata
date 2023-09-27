import React from 'react'
import { styled } from 'styled-components'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CardsPets(props) {
  const { id } = useParams();
  const estado = {
    id_pet: parseInt(id),
    id_status: 5,
  }
  console.log(estado);
  
  const handlePerroEliminar = async () => {
    try{
      const response = axios.put('http://localhost:5000/user/requests', estado);
    }
    catch{
      alert("a");
    }
  }

  /* --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- */

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
          <Button size="small" sx={{ backgroundColor: 'red', color: 'white', marginTop: '15px' }}>
            <a style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Eliminar</a>
          </Button>
        </CardActions>
      </Card>
    </Content>
  )
}

export default CardsPets

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
  border-radius: 8px;
`;

const cardStyle = styled.button`
    backgroundColor: red;
    color: white;
    fontWeight: bold;
    display: flex;
    justifyContent: center;
    alignItems: center;
    height: 100%;
`;
