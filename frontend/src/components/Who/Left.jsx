import React from 'react';
import { styled } from 'styled-components';
import Subtitle from './Subtitle';
import Fade from 'react-reveal/Fade';


const LeftContent = ({ text, imageUrl}) => {
  return (
    <Wrap>
      <Fade bottom>

      <Container>
        <TPart>
          <Txt>{text}</Txt>
        </TPart>
        <ImgPart src={imageUrl} />
      </Container>
      </Fade>

    </Wrap>
  );
};

export default LeftContent;

const Wrap = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 40vh;
  flex-direction: row;
  @media(max-width: 1024px){
    flex-direction: column;
    height: 100vh;
  }
`;

const TPart = styled.div`
  width: 50%;
  @media(max-width: 1024px){
    width: 100%;
  }



`;

const Txt = styled.p`
  float: left;
  text-align: justify;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 2px;

  @media(max-width: 1024px){
    margin-top: -60px;
    text-align:center;
  }

`;

const ImgPart = styled.img`
  object-fit: cover;
  height: auto;
  width: 50%;
  clip-path: polygon(43% 0, 100% 0, 100% 100%, 0 100%);

  @media(max-width: 1024px){
    width: 100%;
    height: 200px;
    clip-path: polygon(0% 0, 100% 0, 100% 150%, 0 150%);

  }

  @media(max-width: 425px){

  }

`;

