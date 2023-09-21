import React, { useEffect, useState } from 'react';
import Section from '../components/Home/Section/Section1/Section';
import Section_2 from '../components/Home/Section/Section2/Section_2';
import Section_3 from '../components/Home/Section/Section3/Section_3';
import Sponsor from '../components/Home/Section/Section4/Sponsor';
import NavBar from '../components/NavBar/NavBar';
import IsLogged from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';

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
        <LoaderComp/>
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

