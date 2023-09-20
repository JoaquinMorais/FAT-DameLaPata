import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '@mui/material/Card'; // Importa el componente Card de Material-UI
import CardContent from '@mui/material/CardContent'; // Importa el componente CardContent de Material-UI

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
    <Card>
      <CardContent>
        <h2>ESTE GRUPO ESTÁ COMPUESTO POR:</h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* CartaInd components here */}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </CardContent>
    </Card>
  );
}
