import React from 'react'
import styled from 'styled-components';
function LoaderComp() {
    console.log('aaa')
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
    )
}

export default LoaderComp

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;