import React, { useEffect, useState } from 'react'; 
import CardsPets from '../components/Dogs/Cards/CardsPets';
import { styled } from 'styled-components';
import Phrase from '../components/Dogs/Phrase/Phrase';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/NavBar';
import IsLogged, { GetProfile } from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';
import Filters from '../components/Dogs/Filters/Filters';
import axios from 'axios';

const Peticiones = () => {
    const [responseData, setResponseData] = useState(null);
    const [solicitadosData, setSolicitadosData] = useState([]);
    const [matchData, setMatchData] = useState([]);
    const [adoptadosData, setAdoptadosData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('http://localhost:5000/pets/all');
          setResponseData(response.data);
        } catch (error) {
          console.error('Error al realizar la solicitud:', error.message);
        }
      }
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (responseData?.status === 200) {
        // Filtrar los datos según el id_state
        const solicitados = responseData.response.filter(
          (item) => item.id_state === 3
        );
        const match = responseData.response.filter((item) => item.id_state === 2);
        const adoptados = responseData.response.filter(
          (item) => item.id_state === 1
        );
  
        // Actualizar los estados con los datos filtrados
        setSolicitadosData(solicitados);
        setMatchData(match);
        setAdoptadosData(adoptados);
      }
    }, [responseData]);
  

  if(responseData?.status == 200){
    return (
    <>
        <>
            <NavBar />
            <Principio>
            <Lamina>
                <Flip top>
                <Titulo>SOLICITADOS</Titulo>
                </Flip>
                <Hr />
            </Lamina>
            </Principio>
    
            <Grid>
            {responseData?.response.map((item) => ( 
                <Container key={item.id}>
                <Zoom>
                    <CardsPets
                    id_pet={`${item.id_pet}`}
                    foto={`${item.image_path}`}
                    nombre={`${item.name}`}
                    titulo={`${item.name} es un perro muy feliz :D`}
                    descripcion={`${item.name} nació el ${item.birth_date}.`}
                    />
                </Zoom>
                </Container>
            ))}
            </Grid>
        </>

            <>
            <Principio>
            <Lamina>
                <Flip top>
                <Titulo>CON ¡MATCH!</Titulo>
                </Flip>
                <Hr />
            </Lamina>
            </Principio>

            <Grid>
            {responseData?.response.map((item) => ( 
                <Container key={item.id}>
                <Zoom>
                    <CardsPets
                    id_pet={`${item.id_pet}`}
                    foto={`${item.image_path}`}
                    nombre={`${item.name}`}
                    titulo={`${item.name} es un perro muy feliz :D`}
                    descripcion={`${item.name} nació el ${item.birth_date}.`}
                    />
                </Zoom>
                </Container>
            ))}
            </Grid>
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
            {responseData?.response.map((item) => ( 
                <Container key={item.id}>
                <Zoom>
                    <CardsPets
                    id_pet={`${item.id_pet}`}
                    foto={`${item.image_path}`}
                    nombre={`${item.name}`}
                    titulo={`${item.name} es un perro muy feliz :D`}
                    descripcion={`${item.name} nació el ${item.birth_date}.`}
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
      </>
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

