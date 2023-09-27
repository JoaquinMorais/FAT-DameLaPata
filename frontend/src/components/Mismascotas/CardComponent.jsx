import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

export default function Mismascotas_Sh({ imageUrl, descr }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 285 }}>
        <CardMedia
          component="img"
          height="240px"
          image={imageUrl}
          alt="Perro"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Detalles / Caracteristicas ▼
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <GroupIcon />
          </IconButton>
          <IconButton
            aria-label="show more"
            onClick={handleExpandClick} 
          >
            <ExpandMoreIcon />
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
