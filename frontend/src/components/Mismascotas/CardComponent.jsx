import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CardPets({title, imageUrl, descr }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 285 }} disabled>
        <CardMedia
          component="img"
          height="240px"
          image={imageUrl}
          alt="Perro"
          
        />
        <CardContent>
          <Typography color="text.primary" sx={{ fontSize: '20px' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ver Detalles / Caracteristicas abajo
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="show more"
            onClick={handleExpandClick}
            sx={{ marginRight: 'auto' }} 
          >
            <ExpandMoreIcon sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <Link to="/solicitud">
              <GroupIcon />
            </Link>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{descr}</Typography>
          </CardContent>
        </Collapse>

      </Card>
    </div>
  );
  }

