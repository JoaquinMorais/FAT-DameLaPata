import React, { useEffect, useState } from 'react'; 
import { styled } from 'styled-components';
import Phrase from '../components/Dogs/Phrase/Phrase';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import CardPerson from '../components/Mismascotas/CardPersona';

const Solicitud = () => {
  const [responseData, setResponseData] = useState(null);
  const [matcheadosData, setMatcheadosData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/user/requests');
        console.log('Respuesta de la API:', response.data);
        setResponseData(response.data);

        const matcheados = response.data.response.filter(
          (item) => item.state.id_state === 3
        );        
        setMatcheadosData(matcheados);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }

    fetchData();
  }, []);

  

  if(responseData?.status == 200){
    return (
      <>
      <NavBar />
      <Principio>
        <Lamina>
          <Flip top>
            <Titulo>GENTE QUE QUIERE EL PERRO</Titulo>
          </Flip>
          <Hr />
        </Lamina>
      </Principio>

      <Grid>
        <Zoom>
          <Container>
            <CardPerson
              id_pet="1"
              foto="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
              nombre="Kerry Copito"
              titulo="¡Este es un perro muy feliz!"
              district="Barrio Villa Allende."
            />
          </Container>

          <Container>
            <CardPerson
              id_pet="2"
              foto="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
              nombre="Yaco miteaste???"
              titulo="¡Este es un perro muy feliz!"
              district="Barrio Gral Paz."
            />
          </Container>

          <Container>
            <CardPerson
              id_pet="3"
              foto="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
              nombre="Ivan de pinerda"
              titulo="¡Este es un perro muy feliz!"
              district="Barrio Lanus."
            />
          </Container>
        </Zoom>
      </Grid>
    </>

    );
  }
  else {
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
  
  

    // return (
  //   <div>
  //     {loading ? (SPINNER) : (

  //         {responseData.length > 0  responseData?.map((item) => (
  //           item
  //         ))}
  //               )  }
      
  //   </div>
  // );

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
