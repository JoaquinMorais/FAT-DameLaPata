import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar/NavBar';
import styled from 'styled-components';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import IsLogged from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';


function Successful() {

    // ALEJO PARTE
  const [isLoading, setIsLoading] = useState(true);
  const [pages_array, setPagesArray] = useState([]);
  const [settings_array, setSettingsArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loggedResponse = await IsLogged();
        console.log(loggedResponse);
        setPagesArray(loggedResponse.pages_array);
        setSettingsArray(loggedResponse.setting_array);
        setIsLoading(false);
      } catch (error) {
        // Handle any errors that might occur during the API call
        console.error(error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);
  //////////////

  return (
    <>
        <NavBar pages_array={pages_array} settings_array={settings_array} />
        <Container>
            <Bounce top><Imagen src="./Images/tickVerde.png" /></Bounce>
            <Fade><Texto>¡GRACIAS!</Texto></Fade>
            <Fade><SubTexto>Este es el primer paso para su nueva felicidad.</SubTexto></Fade>
            <Hr></Hr>
            <Zoom><Boton href="/">Volver</Boton></Zoom>
        </Container>   
    </>
    
  )
}

export default Successful

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f6f7;
`;

const Imagen = styled.img`
    width: 100px;
    height: 100px;
`;

const Texto = styled.h1`
    font-weight: bold;
    font-style: italic;
    margin-top: 15px;
`;

const SubTexto = styled.h5`
    
`;

const Hr = styled.hr`
    width: 50%;
    border: 1px solid black;
    margin-bottom: 35px;
`;

const Boton = styled.a`
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px 20px;
    color: black;
    font-weight: bold;
    &:hover{
        background-color: #FF5722;
    }
`;  