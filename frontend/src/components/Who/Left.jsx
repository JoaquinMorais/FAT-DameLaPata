import React from 'react';
import { styled } from 'styled-components';
import Subtitle from './Subtitle';


const LeftContent = ({ text, imageUrl}) => {
  return (
    <Wrap>
      <Container>
        <TPart>
          <Txt>{text}</Txt>
        </TPart>
        <ImgPart src={imageUrl} />
      </Container>

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
`;

const TPart = styled.div`
  width: 50%;
`;

const Txt = styled.p`
  float: left;
  text-align: justify;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 30px;
`;

const ImgPart = styled.img`
  object-fit: cover;
  height: auto;
  width: 50%;
  clip-path: polygon(43% 0, 100% 0, 100% 100%, 0 100%);
`;

