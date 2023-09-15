import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CartaInd from './CartaInd';
import { styled } from 'styled-components';

export default function CardTeam() {
  useEffect(() => {
    new Swiper('.swiper-container', {
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
  }, []);

  return (
    <Container>
      <Text>ESTE GRUPO ESTÁ COMPUESTO POR:</Text>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <CartaInd name={'Yaco Babiachuck'} img={'https://i.postimg.cc/bvhQJWs5/yaco.jpg'} />
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
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide en dos columnas en pantallas grandes */
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
  }
`;

const Text = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  
`;
