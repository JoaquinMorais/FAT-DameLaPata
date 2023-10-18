import React, { useEffect, useState } from 'react'; 
import { styled } from 'styled-components';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import CardPets from '../components/Mismascotas/CardComponent';
import { GetPets } from '../my_methods/dogs_methods';

function Mismascotas_Sh() {
  const [responseData, setResponseData] = useState(null);
  const [responseStatus, setResponseStatus] = useState(''); // Agrega el estado para la respuesta de axios
  const [responseMessage, setResponseMessage] = useState(''); // Agrega el estado para la respuesta de axios
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await GetPets().then(checking => {
          setResponseData(checking.data);
          setResponseStatus(checking.response_status);
          setResponseMessage(checking.response_message);
          setIsLoading(false)
        });
        console.log('response Data:' + responseData)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); 
  }, []);

  if (responseData && responseData.length > 0) {
    return (
    <>
    <NavBar />
    <Principio>
      <Lamina>
        <Flip top>
          <Titulo>MIS ANIMALITOS</Titulo>
        </Flip>
        <Hr />
      </Lamina>
    </Principio>
    <Grid>
      <Zoom>
      <div>
        {responseData.map((item) => (
          <Container key={item.id}>
            <div>
              <div>
                <CardPets
                  imageUrl={`${item.image_path}`}
                  title={`${item.name}`}
                  descr={`${item.name} nació el ${item.birth_date}.`}
                />
              </div>
            </div>
          </Container>
        ))}
      </div>
      </Zoom>
    </Grid>

    <Medio>
      <Lamina>
        <Flip top>
          <Titulo>MATCHEADO</Titulo>
        </Flip>
        <Hr />
        <Container>
          <CardPets 
          title='EEOOOOOOOOOOOOOOO'
          imageUrl='https://hips.hearstapps.com/hmg-prod/images/gettyimages-695480884-64f8446a4e85d.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*'
          descr='AGUANTE EL S23 GRANDE SAMSUNG'
          />
        </Container>
      </Lamina>
    </Medio>
  </>
);
  }
  else{
    return (<h1>Error 404</h1>);
  }
}

export default Mismascotas_Sh;

const Principio = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Medio = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Lamina = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: bold;
  margin: 7.5px auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Hr = styled.hr`
  width: 75%;
  border-top: 3px solid black;
`;

const Grid = styled.div`
  display: grid;
  weight: 100%;
  height: 70vh;
  grid-template-columns: repeat(auto-fill, 1fr);
  gap: 20px;
  text-align: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    width: 100%;

  }
`;

const Container = styled.div`
  width: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(0.97);
  }
`;

