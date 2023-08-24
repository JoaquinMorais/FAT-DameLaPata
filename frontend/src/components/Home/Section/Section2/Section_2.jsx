import React from 'react'
import { styled } from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import { Fade } from 'react-reveal';

function Section_2() {
  return (
  <>
  <Fade top>
    <Title>¡ESTAMOS AQUI POR UNA MISION!</Title>
    <SubTitle>Un hogar, una pata a la vez: Adopta y cambia una vida perruna hoy</SubTitle>
  </Fade>
  
  <Bounce right>
    <RightPart>
      <RightImage src="/Images/perro.jpg" alt="" />
      <ColumnText>
        <RightText>En nuestra página de adopción, nuestra misión es clara y apasionada: promover la adopción responsable, crear conciencia sobre el abandono de perros y ofrecer recursos para el cuidado adecuado de estas adorables mascotas. Creemos que al unirnos como una comunidad de amantes de los animales, podemos hacer una verdadera diferencia en la vida de estos compañeros peludos que tanto lo necesitan.</RightText>
        <RightText>A través de nuestra página y campañas en redes sociales, nos esforzamos por crear conciencia sobre el problema del abandono de perros y sus efectos devastadores. Compartimos historias inspiradoras de perros rescatados y cómo han encontrado una nueva oportunidad en una familia amorosa. También trabajamos en colaboración con otras organizaciones y refugios para prevenir el abandono y educar sobre la importancia de la tenencia responsable de mascotas.</RightText>
      </ColumnText>
    </RightPart>
  </Bounce>
  </>
  )
}

export default Section_2

const Title = styled.h1`
margin-top: 100px;
font-size: 60px;
text-align: center;

@media (max-width: 768px) {
  font-size: 55px;
  text-align: center;
}
`

const SubTitle = styled.p`
margin-top: 30px;
font-size: 30px;
font-family: 'Grape Nuts', cursive;
text-align: center;

@media (max-width: 768px) {
  font-size: 25px;

}

`

const RightPart = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center; 
  
  @media(max-width: 768px){
    flex-direction: column; 

  }
`

const RightImage = styled.img`
  margin: 100px;
  float: left;
  height: 650px;
  width: auto;

  @media(max-width: 768px){
    height: 400px;    
  }

  @media (max-width: 375px) {
    height: 300px;    

  }
  
`

const RightText = styled.p`
  float: top;
  font-size: 30px;
  margin-top: 30px;
  @media(max-width: 768px){
    font-size: 25px;
  }
`

const ColumnText = styled.div`
  display: flex;
  text-align: justify;
  flex-direction: column;
  margin-right: 40px;

  @media(max-width: 768px){
    margin-right:20px;
    margin-left:20px;

  }
`