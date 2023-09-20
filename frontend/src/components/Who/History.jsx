import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from '@mui/material/Card'; // Importa el componente Card de Material-UI
import CardContent from '@mui/material/CardContent'; // Importa el componente CardContent de Material-UI
import CardMedia from '@mui/material/CardMedia'; // Importa el componente CardMedia de Material-UI
import Typography from '@mui/material/Typography'; // Importa el componente Typography de Material-UI

export default function History() {
  return (
    <Card>
      <CardContent>
        <div>
          <Fade bottom>
            <Typography variant="h4">Un poco de nuestra historia</Typography>
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <CardMedia
              component="img"
              alt="Imagen de muestra"
              height="400"
              image="https://cdn.wikiwiki.jp/to/w/becomnextbot/Wenomechainsama/::attach/Wenomechainsama.png?rev=08e3f8c3e8252bc599d086a85d402b2d&t=20221226165443"
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Typography variant="body1">
              Todo comenzó a principios de este año, donde teníamos que realizar una página sin fines de lucro. Después de una lluvia de ideas, nos decidimos por hacer un proyecto que ayude y facilite la adopción de perros. Así nació: Dame La Pata
            </Typography>
          </Fade>
          <Fade bottom>
            <Typography variant="body1">
              La idea surgió al ver la triste realidad de muchos perros abandonados y maltratados en nuestra comunidad. Queríamos marcar una diferencia y contribuir a mejorar sus vidas. Así que nos pusimos manos a la obra y creamos "Dame La Pata", un espacio en línea donde los refugios y protectoras de animales pueden publicar perfiles de los perros disponibles para adopción, y las personas interesadas en adoptar pueden buscar y filtrar perros según sus preferencias y ubicación.
            </Typography>
          </Fade>
        </div>
      </CardContent>
    </Card>
  );
}
