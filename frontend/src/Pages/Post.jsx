import React from 'react'
import { styled } from 'styled-components'
import Fade from 'react-reveal/Fade';



function Post() {
  return (
    <Background>
        <Link href='/add'>
            <Container>
                <Fade top><Image src="Images/agregar-huella-2.png"></Image></Fade>
                <Fade bottom><Title>¡Agregá un perrito para que pueda ser adoptado!</Title></Fade>
            </Container>
        </Link>
    </Background>
  )
}


export default Post

const Background = styled.div`
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Link = styled.a`
    color: black;
    text-decoration: none;
`;

const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 400px;
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
`;
  
const Title = styled.p`
    padding: 10px 20px;
    background: linear-gradient(90deg, #3b3a40 50%, #57565c 50%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 20px;
`;
    
