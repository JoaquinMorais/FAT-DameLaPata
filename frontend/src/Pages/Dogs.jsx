import React from 'react'
import Cards from '../components/Dogs/Cards/Cards'
import { styled } from 'styled-components'
import Phrase from '../components/Dogs/Phrase/Phrase';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import NavBar from '../components/NavBar/navBar';

function Dogs() {
  return (
    <>
    <NavBar/>
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
            <Imagen src="https://static.wixstatic.com/media/d33ee0_31664be5fc3541a8bb6405ff1f3e28c8~mv2.png/v1/fill/w_560,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/perritos%20asomados%202.png" alt=""/>
          </Imagenes>
        </Slide>

      </Principio>

      <Container>
        <Zoom>
          <Cards
          foto = 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
          nombre = 'Firulais'
          titulo = 'Firulais es un perro muy feliz :D'
          descripcion = 'Firu tiene 7 años, es un perro de tamaño grande y está vacunado al 100%.'
          />
        </Zoom>

        <Zoom>
          <Cards
          foto = 'https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg'
          nombre = 'Sombra'
          titulo = 'Sombra es una perra muy feliz :D'
          descripcion = 'Sombrita tiene 5 años, es una perra de tamaño grande y está vacunada al 100%.'
          />
        </Zoom>
        
        <Zoom>
          <Cards
          foto = 'https://t1.ea.ltmcdn.com/es/posts/5/6/2/10_caracteristicas_de_los_perros_24265_600_square.jpg'
          nombre = 'Omen'
          titulo = 'Omen es un perro muy feliz :D'
          descripcion = 'Omen tiene 3 años, es un perro de tamaño chico y está vacunado al 100%.'
          />
        </Zoom>
        
        <Zoom>
          <Cards
          foto = 'https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg'
          nombre = 'Maná'
          titulo = 'Maná es una perra muy feliz :D'
          descripcion = 'Maná tiene 1 año, es una perra de tamaño grande y está vacunada al 75%.'
          />
        </Zoom>






        <Zoom>
          <Cards
          foto = 'https://img.freepik.com/foto-gratis/hermoso-retrato-mascota-perro_23-2149218450.jpg'
          nombre = 'Kura'
          titulo = 'Kura es una perra muy feliz :D'
          descripcion = 'Kura es una hembra de 4 años. Es de tamaño mediano-grande y esta totalmente vacunada.'
          />
        </Zoom>

        <Zoom>
          <Cards
          foto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU'
          nombre = 'Simon'
          titulo = 'Simon es un perro muy feliz :D'
          descripcion = 'Este perrito se llama Simon, tiene 2 años, es de tamaño chico y esta vacunado al 95%.'
          />
        </Zoom>
        
        <Zoom>
          <Cards
          foto = 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/03/dog-glasses-2661411.jpg?tf=3840x'
          nombre = 'Actually'
          titulo = 'Actually es un perro muy feliz :D'
          descripcion = 'Tiene complejo de Fini, corrige los ladridos de los perros.'
          />
        </Zoom>
        
        <Zoom>
          <Cards
          foto = 'https://images.unsplash.com/photo-1595876171225-463c72774783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
          nombre = 'Saiyan'
          titulo = 'Saiyan es un perro muy feliz :D'
          descripcion = 'Super Saiyan (Apodo) tiene 1 año, es de tamaño grande y está vacunado al 100%.'
          />
        </Zoom>
      </Container>
    </>
  )
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

const Container = styled.div`
  width: 80%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;