import React from 'react'
import { Fade } from 'react-reveal'
import { styled } from 'styled-components'

function Sponsor() {
  return (
    <>
    <Container>
      <Fade bottom>
        <WhyTitle>AGRADECIMIENTOS</WhyTitle>
        <SponsorContaint>
            <SponsorText>
              <TextSponsor>Queremos dar un agradecimiento a: Fundacion Garra</TextSponsor>
              <Description>"Garra" es una fundación de perros, es probable que se dedique a rescatar, proteger y promover el bienestar de los perros, brindándoles cuidado, atención médica, adopciones responsables y educación sobre tenencia responsable de mascotas. Su labor puede tener un impacto significativo en la vida de los perros que necesitan ayuda y en la comunidad en general, al fomentar el amor y la responsabilidad hacia los animales.</Description>  
            </SponsorText>
            <ImageSponsor src="/Images/garra.jpg"/> 

        </SponsorContaint>
      </Fade>
    </Container>
    
    
    </>
    )
}

export default Sponsor



const SponsorText = styled.div`
top: 0;
right:0;
left: 0;
`
const Container = styled.div`
  margin-top: 45px;
  text-align: center;
`;

const WhyTitle = styled.h1`
  font-size: 80px;
  font-family: 'Grape Nuts', cursive;  
`

const SponsorContaint = styled.div`
  margin-top: 50px;
  display:flex;
`;

const TextSponsor = styled.h3`
  font-size: 30px;
`;

const Description = styled.p`
    font-size: 20px;
    text-align: justify;
    width: 80%;
    justify-content: center;
    transform: translateX(10%);
    margin-top: 40px; 
    `

const ImageSponsor = styled.img`
  width: auto;
  height: 400px;
  text-align: center;
`;
