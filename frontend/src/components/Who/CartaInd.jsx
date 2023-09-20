import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  padding-bottom: 20px;
  background-size: cover;
  background-position: center;
  color: white;
  font-weight: bold;
  padding: 20px;
  width: 100%;
`;

export default function CartaInd({ name, img, swiperInstance }) {
  return (
    <div className="swiper-slide" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontSize: '30px',
      paddingBottom: '20px',
      width: '100%',
    }}>
      <img src={img} alt={name} style={{ width: '50%', height: 'auto' }} /> {/* Ajusta el ancho aquí */}
      <div className="name">{name}</div>
    </div>
  );
}
