import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components'
import 'swiper/css';
/* ANIMACIONES */
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


export const BigCards = ({slides}) => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <Carta>
            <ImagenContainer>
              <Imagen src={slide.image} alt="" />
              <Abajo>
                <Texto>
                  <Flip top><Titulo>{slide.name}</Titulo></Flip>
                  <Zoom left><Subtitulo>{slide.date_of_birth} - {slide.age}</Subtitulo></Zoom>
                  <Zoom left><Subtitulo>{slide.gender}</Subtitulo></Zoom>
                </Texto>
                <Botones>
                  <Zoom><No><PerroNo src={'https://cdn-icons-png.flaticon.com/512/9804/9804051.png'}></PerroNo></No></Zoom>
                  <Zoom><Si><PerroSi src={'https://cdn-icons-png.flaticon.com/512/9804/9804028.png'}></PerroSi></Si></Zoom>
                </Botones>
              </Abajo>
            </ImagenContainer>
            <Container>

            <Fade>
              <Div1>
                <Titulo2>Descripcion</Titulo2>
                <Caracteristicas>{slide.description}</Caracteristicas>
              </Div1>
            </Fade>
              
            <Fade>
              <Div2>
                <Titulo2>Apodos</Titulo2>
                <Caracteristicas>{slide.nicknames}</Caracteristicas>
              </Div2>
            </Fade>

            <Fade>
              <Div3>
                <Titulo2>Edad</Titulo2>
                <Caracteristicas>Fecha: {slide.date_of_birth} - Edad: {slide.age}</Caracteristicas>
              </Div3>
            </Fade>
            
            <Fade>
              <Div4>
                <Titulo2>Tamaño</Titulo2>
                <Caracteristicas>Es un perro de tamaño {slide.size}</Caracteristicas>
              </Div4>
            </Fade>
              
            <Fade>
              <Div5>
                <Titulo2>Vacunas</Titulo2>
                <Caracteristicas>{slide.vaccination}</Caracteristicas>
              </Div5>
            </Fade>
              
            </Container>
          </Carta>
        </SwiperSlide>
    ))}
    </Swiper>
  )
}

export default BigCards

const Carta = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Hr = styled.hr`
    margin-bottom: 10px;
    width: 40%;
`;

const ImagenContainer = styled.div`
    position: relative;
`;

const Imagen = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;

const Abajo = styled.div`
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 150px;
    text-align: left;
    color: white;
    background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Texto = styled.div`   
    display: flex;
    flex-direction: column;
`;

const Botones = styled.div`
    display: flex;
    flex-direction: row;
`;

const Titulo = styled.h1`
    color: white;
    text-transform: uppercase;
    font-style: italic;
`;

const Subtitulo = styled.p`
    color: white;
    margin-top: 10px;
    font-size: 20px;
`;

const No = styled.button`
    width: 75px;
    height: 75px;
    border-radius: 16px;
    border: 2px solid black;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      background-color: red;
`;

const Si = styled.button`
    width: 75px;
    height: 75px;
    border-radius: 16px;
    border: 2px solid black;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      background-color: green;
`;

const PerroNo = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.4) rotate(-10deg);
`;

const PerroSi = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px;
    transition: transform 0.3s ease;  

    &:hover {
      transform: scale(1.4) rotate(-10deg);
`;

const Container = styled.div`
    width: 100%;
    text-align: left;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Titulo2 = styled.h2`
    color: black;
    text-transform: uppercase;
    font-style: italic;
    padding: 20px 15px 0 15px;
    margin-bottom: 10px;
`;

const Caracteristicas = styled.p`
    font-size: 18px;
    color: black;
    padding: 0px 15px 20px 15px;
    word-wrap: break-word;
`;

const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffe778;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eacf5f;
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d5b745;
`;

const Div4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #bf9e2c;
`;

const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #aa8612;
`;

