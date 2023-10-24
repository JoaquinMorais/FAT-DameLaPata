import React, { useState } from 'react';
import { styled } from 'styled-components';
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
  const [isDeleting, setIsDeleting] = useState(false); // State para controlar si se está eliminando o no

  const estado = {
    id_status: 5,
  };

  const handlePerroEliminar = async () => {
    try {
      setIsDeleting(true); // Cambiar el estado a true para indicar que se está eliminando
      const response = await axios.put('http://localhost:5000/adopter/match', estado);
      // Realizar alguna lógica adicional si es necesario después de eliminar
    } catch (error) {
      alert("Hubo un error al eliminar el perro.", error.message);
    } finally {
      setIsDeleting(false); // Cambiar el estado de nuevo a false después de finalizar
    }
  };

  return (
    <Content>
      <Card sx={{ width: 250, height: 350, borderRadius: 2 }}>
        <CardMedia
          sx={{ height: 150 }}
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
          <Button
            size="small"
            sx={{ backgroundColor: 'red', color: 'white', marginTop: '15px' }}
            onClick={handlePerroEliminar}
            disabled={isDeleting} // Deshabilitar el botón mientras se está eliminando
          >
            <a style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </a>
          </Button>
        </CardActions>
      </Card>
    </Content>
  );
}
export default CardsPets;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
  border-radius: 8px;
`;