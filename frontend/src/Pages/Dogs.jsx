import React, { useEffect, useState } from 'react'; 
import Cards from '../components/Dogs/Cards/Cards';
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

const Dogs = () => {
  const [responseData, setResponseData] = useState(null); // Agrega el estado para la respuesta de axios

  useEffect(() => {
    async function fetchData() {
      try {
        
        const response = await axios.get('http://localhost:5000/pets');
        setResponseData(response.data);
        console.log('response DAta')
        console.log(responseData)
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); // Llama a la función fetchData para obtener los datos
  }, []);

  if(responseData?.status == 200){
    return (
      <>
        <NavBar />
        <Principio>
          <Lamina>
            <Flip top>
              <Titulo>DESCUBRÍ A TU MEJOR AMIGO</Titulo>
            </Flip>
            <Fade>
              <Subtitulo><Phrase /></Subtitulo>
            </Fade>
          </Lamina>
  
          <Slide bottom>
            <Imagenes>
              <Imagen src="https://static.wixstatic.com/media/d33ee0_31664be5fc3541a8bb6405ff1f3e28c8~mv2.png/v1/fill/w_560,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/perritos%20asomados%202.png" alt="" />
            </Imagenes>
          </Slide>
  
          <slide bottom>
            <Filters>
            </Filters>
          </slide>
        </Principio>
  
        <Grid>
          
          {responseData?.response.map((item) => ( 
            <Container key={item.id}>
              <Zoom>
                <Cards
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
    );
  }
  else {
    return (
      <>
        <NavBar />
        <Principio>
          <Lamina>
            <Flip top>
              <Titulo>DESCUBRÍ A TU MEJOR AMIGO</Titulo>
            </Flip>
            <Fade>
              <Subtitulo><Phrase /></Subtitulo>
            </Fade>
          </Lamina>
  
          <Slide bottom>
            <Imagenes>
              <Imagen src="https://static.wixstatic.com/media/d33ee0_31664be5fc3541a8bb6405ff1f3e28c8~mv2.png/v1/fill/w_560,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/perritos%20asomados%202.png" alt="" />
            </Imagenes>
          </Slide>
  
          <slide bottom>
            <Filters>
            </Filters>
          </slide>
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

export default Dogs

const Principio = styled.div`
  background-image: url('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/11124552/GettyImages-544673512.jpg');
  width: 100%;
  height: 100vh;
  background-position: top center;
`;

const Lamina = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(194, 55, 0, 0.75), rgba(0, 0, 0, 0.75));
`;

const Titulo = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin: 7.5px auto;
  text-align: center;
  @media(max-width: 360px){
    font-size: 30px;
  }
`;

const Subtitulo = styled.p`
  color: rgb(220,220,220);
  font-size: 20px;
  font-style: italic;
  margin: 7.5px auto;
  text-align: center;
  @media(max-width: 360px){
    font-size: 15px;
  }
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
  margin: 150px auto;
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