import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '@mui/material/Card'; // Importa el componente Card de Material-UI
import CardContent from '@mui/material/CardContent'; // Importa el componente CardContent de Material-UI
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import CartaInd from './CartaInd';

const StyledCard = styled(Card)`
  margin: 20px;
`;

const StyledTitle = styled(Typography)`
  margin: 40px 0 !important;
  font-size: 32px !important; /* Ajusta el tamaño de la fuente para el título */
  font-weight: bold !important; /* Hace que el título esté en negrita */
  text-align: center; /* Centra el texto */
`;

export default function CardTeam() {
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  let swiper; // Declara una variable para la instancia de Swiper

  useEffect(() => {
    if (!swiperInitialized) {
      swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay: {
          delay: 2500,
        },
      });

      setSwiperInitialized(true);
    }
  }, [swiperInitialized]);

  return (
    <StyledCard>
      <CardContent>
        <StyledTitle variant="h2">ESTE GRUPO ESTÁ COMPUESTO POR:</StyledTitle>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <CartaInd name={'Yaco Babiachuck'} img={'https://i.postimg.cc/bvhQJWs5/yaco.jpg'}/>
            <CartaInd name={'Maximo Tomas Blazquez'} img={'https://i.postimg.cc/PJ9DkFg2/facha.jpg'} />
            <CartaInd name={'Alejo Diaz Broilo'} img={'https://i.postimg.cc/MTZV0B0b/alejo.jpg'} />
            <CartaInd name={'Mateo Emanuel Fernandez'} img={'https://i.postimg.cc/Kz9L0YJX/fercho.jpg'} />
            <CartaInd name={'Marco Fini Minue'} img={'https://i.postimg.cc/c4P7qrZ0/yo.jpg'} />
            <CartaInd name={'Juan Pablo Genaro'} img={'https://i.postimg.cc/Fz7S8QBY/chad.jpg'} />
            <CartaInd name={'Joaquin Morais'} img={'https://i.postimg.cc/mZ5CMtPC/mora.jpg'} />
            <CartaInd name={'Agustin Jose Salonia'} img={'https://i.postimg.cc/3R6Ny0tw/salo.jpg'} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </CardContent>
    </StyledCard>
  );
}
