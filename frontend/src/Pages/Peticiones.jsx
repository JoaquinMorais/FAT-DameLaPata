import React, { useEffect, useState } from 'react'; 
import CardsPets from '../components/Dogs/Cards/CardsPets';
import { styled } from 'styled-components';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';

const Peticiones = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/user/requests');
        setResponseData(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }

    fetchData();
  }, []);

  const filterByState = (stateId) => {
    return responseData?.response.filter(item => item.id_state === stateId);
  }



  if(responseData?.status == 200){
    return (
    <>
      <>
        <NavBar />
        <Principio>
        <Lamina>
            <Flip top>
            <Titulo>CON ¡MATCH!</Titulo>
            </Flip>
            <Hr />
        </Lamina>
        </Principio>

        <Grid>
        {filterByState(2).map((item) => (
            <Container key={item.pet.id_pet}>
            <Zoom>
            <CardsPets
                id_pet={`${item.id_pet}`}
                foto={`${item.pet.image_path}`}
                nombre={`${item.pet.name}`}
                titulo={`${item.pet.name} es un perro muy feliz :D`}
                descripcion={`${item.pet.name} nació el ${item.pet.birth_date}.`}
              />
            </Zoom>
            </Container>
        ))}
        </Grid>


      <>
        <Principio>
        <Lamina>
            <Flip top>
            <Titulo>SOLICITADOS</Titulo>
            </Flip>
            <Hr />
        </Lamina>
        </Principio>

        <Grid>
          {filterByState(3).map((item) => (
              <Container key={item.pet.id_pet}>
              <Zoom>
                <CardsPets
                  id_pet={`${item.pet.id_pet}`}
                  foto={`${item.pet.image_path}`}
                  nombre={`${item.pet.name}`}
                  titulo={`${item.pet.name} es un perro muy feliz :D`}
                  descripcion={`${item.pet.name} nació el ${item.pet.birth_date}.`}
                />
              </Zoom>
              </Container>
          ))}
        </Grid>
      </>


      </>
          <>
          <Principio>
          <Lamina>
              <Flip top>
              <Titulo>ADOPTADOS</Titulo>
              </Flip>
              <Hr />
          </Lamina>
          </Principio>

          <Grid>
          {filterByState(1).map((item) => (
              <Container key={item.id}>
              <Zoom>
                <CardsPets
                  id_pet={`${item.id_pet}`}
                  foto={`${item.pet.image_path}`}
                  nombre={`${item.pet.name}`}
                  titulo={`${item.pet.name} es un perro muy feliz :D`}
                  descripcion={`${item.pet.name} nació el ${item.pet.birth_date}.`}
                />
              </Zoom>
              </Container>
          ))}
          </Grid>
      </>
    </>
    );
  }
  else {
    return (
      <>
        <NavBar />
        <Principio>
          <Lamina>
            <Flip top>
              <Titulo>MIS MASCOTAS</Titulo>
            </Flip>
            <Hr />
          </Lamina>
        </Principio>
  
        <Grid style={{textAlign:'center'}}>
          No hay perros que cumplan tus requisitos
        </Grid>

        <Principio>

        <Lamina>
            <Flip top>
              <Titulo>FAVORITOS</Titulo>
            </Flip>
            <Hr />
          </Lamina>
        </Principio>
      </>
    );
  }
}

export default Peticiones

const Principio = styled.div`
  width: 100%;
  height: 40vh;
  background-position: top center;
`;

const Lamina = styled.div`
  width: 100%;
  height: 100%;
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
  @media(max-width: 360px){
    font-size: 30px;
  }
`;

const Hr = styled.hr`
  width: 75%;
  border-top: 3px solid black;
`;

const Imagenes = styled.div`
  width: 100%;
  margin-top: -128px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 425px){
    height: auto;
    width: 290px;
  }
`;

const Imagen = styled.img`
  @media(max-width: 570px){
    width: 500px;
    margin-top: 13px;
  }

  @media(max-width: 500px){
    width: 400px;
    margin-top: 36px;
  }

  @media(max-width: 400px){
    width: 300px;
    margin-top: 59px;
  }

  @media(max-width: 300px){
    width: 200px;
    margin-top: 82px;
  }
`;

const Grid = styled.div`
  width: 80%;
  margin: -50px auto 150px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Container = styled.div`
  width: 100%;
  transition: transform 0.2s ease-in-out;
  &:hover{
    transform: scale(0.97)
  }
`;

