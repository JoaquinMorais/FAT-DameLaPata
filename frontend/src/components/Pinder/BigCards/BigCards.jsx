import React, { useEffect, useState } from 'react'; 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import { styled } from 'styled-components'
import 'swiper/css';
import axios from 'axios';
/* ANIMACIONES */
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const BigCards = () => {
  const [responseData, setResponseData] = useState(null); // Agrega el estado para la respuesta de axios

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/pets/all');
        setResponseData(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); // Llama a la función fetchData para obtener los datos
  }, []);

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {responseData?.response.map((item) => ( 
        <SwiperSlide key={item.id}>
          <Carta>
            <ImagenContainer>
              <Imagen src='https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg' alt="" />
              <Abajo>
                <Texto>
                  <Flip top><Titulo>{`${item.name}`}</Titulo></Flip>
                  <Zoom left><Subtitulo>{`${item.date_of_birth}`}</Subtitulo></Zoom>
                  <Zoom left><Subtitulo>Masculino</Subtitulo></Zoom>
                </Texto>
                <Botones>
                  <Zoom><No><PerroNo src={'https://cdn-icons-png.flaticon.com/256/9804/9804047.png'}></PerroNo></No></Zoom>
                  <Zoom><Si><PerroSi src={'https://cdn-icons-png.flaticon.com/256/9804/9804062.png'}></PerroSi></Si></Zoom>
                </Botones>
              </Abajo>

            </ImagenContainer>
            <Container>

            <Fade>
              <Div1>
                <Titulo2>Descripcion</Titulo2>
                <Caracteristicas>hola hola hola hola hola</Caracteristicas>
              </Div1>
            </Fade>
              
            <Fade>
              <Div2>
                <Titulo2>Apodos</Titulo2>
                <Caracteristicas>a a a a a</Caracteristicas>
              </Div2>
            </Fade>

            <Fade>
              <Div3>
                <Titulo2>Edad</Titulo2>
                <Caracteristicas>Fecha: {`${item.date_of_birth}`}</Caracteristicas>
              </Div3>
            </Fade>
            
            <Fade>
              <Div4>
                <Titulo2>Tamaño</Titulo2>
                <Caracteristicas>Es un perro de tamaño Grande</Caracteristicas>
              </Div4>
            </Fade>
              
            <Fade>
              <Div5>
                <Titulo2>Vacunas</Titulo2>
                <Caracteristicas>Todas</Caracteristicas>
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
    bottom: 8.5%;
    width: 100%;
    height: 150px;
    background: linear-gradient(to right, rgba(0,0,0,0.8), transparent 30%);
    display: flex;
    flex-direction: row;
`;

const Texto = styled.div`   
    position: absolute;
    width: 100%;
    text-align: left;
    width: 100%;
    height: 100%;
    color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const Botones = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Titulo = styled.h1`
    color: white;
    text-transform: uppercase;
    font-style: italic;
`;

const Subtitulo = styled.p`
    color: white;
    font-size: 20px;
`;

const No = styled.button`
    width: 125px;
    height: 125px;
    border-radius: 16px;
    border: 2px solid black;
    background: inherit;
    backdrop-filter: blur(20px);
    margin: 0 50px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      background-color: red;
`;

const Si = styled.button`
    width: 125px;
    height: 125px;
    border-radius: 16px;
    border: 2px solid black;
    background: inherit;
    backdrop-filter: blur(20px);
    margin: 0 50px;
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