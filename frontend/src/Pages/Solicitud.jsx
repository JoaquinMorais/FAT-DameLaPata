import React, { useEffect, useState } from 'react'; 
import { styled } from 'styled-components';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import CardPerson from '../components/Mismascotas/CardPersona';

const Solicitud = () => {
  const [responseData, setResponseData] = useState(null);
  const [requests, setRequests] = useState([]);
  const [rejectedCards, setRejectedCards] = useState([]); // Nuevo estado

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5000/user/requests');
      setRequests(response.data.response);
      console.log('response Data:', responseData);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/user/requests');
        setResponseData(response.data);
        console.log('response Data:' + responseData)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); 
  }, []);  

  const handleRejectCard = (cardId) => {
    // Agrega el ID de la tarjeta rechazada al estado rejectedCards
    setRejectedCards([...rejectedCards, cardId]);
  };

  if(responseData?.status === 200){
    return (
      <>
        <NavBar />
        <Principio>
          <Lamina>
            <Flip top>
              <Titulo>GENTE QUE QUIERE EL PERRO</Titulo>
            </Flip>
            <Hr />
            {responseData.response.map((item) => (
              <h1>EL PERRO TIENE <span style={{color:'orange', fontWeight:'bold'}}>{`${item.requests.length}`} </span>REQUESTS</h1>
            ))}
          </Lamina>
        </Principio>
  
        <Grid>
          <Zoom>
            <Container>
              {responseData.response.map((item) => (
                // Renderiza la tarjeta solo si su ID no está en rejectedCards
                !rejectedCards.includes(item.id) && (
                  <CardPerson
                    key={item.id} // Asegúrate de agregar una clave única
                    nombre={`${item.name}`}
                    district={`${item.id_address}`}
                    phone={`${item.phone_number}`}
                    id={`${item.id}`} 
                    onReject={() => handleRejectCard(item.id)} // Pasa la función de rechazo
                  />
                )
              ))}
            </Container>
          </Zoom>
        </Grid>
      </>
    );
  } else {
    return (
      <Principio>
        <Lamina>
          <Flip top>
            <Titulo style={{color:'red'}}>HUBO UN ERROR EN EL PROCESAMIENTO</Titulo>
          </Flip>
        </Lamina>
      </Principio>
    );
  }
}

export default Solicitud

const Principio = styled.div`
  width: 100%;
  min-height: 40vh;
  background-position: top center;
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
  width: 50%;
  margin: 0 auto 150px auto;
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  text-align: center;

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
