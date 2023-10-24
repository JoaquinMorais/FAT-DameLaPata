import React, { useEffect, useState } from 'react';
import Section from '../components/Home/Section/Section1/Section';
import Section_2 from '../components/Home/Section/Section2/Section_2';
import Section_3 from '../components/Home/Section/Section3/Section_3';
import Sponsor from '../components/Home/Section/Section4/Sponsor';
import NavBar from '../components/NavBar/NavBar';
import LoaderComp from '../components/Loader/Loader';
import { CreateRequest } from '../my_methods/adopter_methods';
function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    CreateRequest({"id_pet" : 4, "id_state" : 1}).then(response => {
      setIsLoading(false);
    })
    .catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar/>

      {isLoading ? (
        <LoaderComp/>
      ) : (
        // Render the content once loading is complete
        <>
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

