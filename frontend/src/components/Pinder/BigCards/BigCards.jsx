import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components'
import 'swiper/css';


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
              <Texto>
                <Titulo>{slide.name}</Titulo>
                <Subtitulo>{slide.date_of_birth} - {slide.age}</Subtitulo>
                <Subtitulo>{slide.gender}</Subtitulo>
              </Texto>
            </ImagenContainer>
            <Container>

              <Div1>
                <Titulo2>Descripcion</Titulo2>
                <Hr></Hr>
                <Caracteristicas>{slide.description}</Caracteristicas>
              </Div1>
              
              <Div2>
                <Titulo2>Apodos</Titulo2>
                <Hr></Hr>
                <Caracteristicas>{slide.nicknames}</Caracteristicas>
              </Div2>
              
              <Div3>
                <Titulo2>Edad</Titulo2>
                <Hr></Hr>
                <Caracteristicas>Fecha: {slide.date_of_birth} - Edad: {slide.age}</Caracteristicas>
              </Div3>

              <Div4>
                <Titulo2>Tamaño</Titulo2>
                <Hr></Hr>
                <Caracteristicas>Es un perro de tamaño {slide.size}</Caracteristicas>
              </Div4>
              
              <Div5>
                <Titulo2>Vacunas</Titulo2>
                <Hr></Hr>
                <Caracteristicas>{slide.vaccination}</Caracteristicas>
              </Div5>
              
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

const Texto = styled.div`
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 150px;
    text-align: left;
    color: white;
    background: linear-gradient(to right, rgba(0,0,0,0.8), transparent);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const Container = styled.div`
    width: 100%;
    text-align: left;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Titulo2 = styled.h1`
    color: black;
    text-transform: uppercase;
    font-style: italic;
    padding: 30px 15px 0 15px;
    margin-bottom: 10px;
`;

const Caracteristicas = styled.p`
    font-size: 25px;
    color: black;
    padding: 0px 15px 30px 15px;
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