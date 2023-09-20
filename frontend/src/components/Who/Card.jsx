import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CartaInd from './CartaInd';
import { styled } from 'styled-components';

export default function CardTeam() {
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  useEffect(() => {
    if (!swiperInitialized) {
      const swiper = new Swiper('.swiper-container', {
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
    <Container>
      <Text>ESTE GRUPO ESTÁ COMPUESTO POR:</Text>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* CartaInd components here */}
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
