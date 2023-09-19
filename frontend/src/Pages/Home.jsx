import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Home/Section/Section1/Section';
import Section_2 from '../components/Home/Section/Section2/Section_2';
import Section_3 from '../components/Home/Section/Section3/Section_3';
import Sponsor from '../components/Home/Section/Section4/Sponsor';
import NavBar from '../components/NavBar/Navbar';
import IsLogged from '../my_methods/session_methods';

function Home() {
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

  return (
    <>
      {isLoading ? (
        // Render a loader while loading
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        // Render the content once loading is complete
        <>
          <NavBar pages_array={pages_array} settings_array={settings_array} />
          <Section />
          <Section_2 />
          <Section_3 />
          <Sponsor />
        </>
      )}
    </>
  );
}

export default Home;

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