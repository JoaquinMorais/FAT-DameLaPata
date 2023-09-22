import React, { useEffect, useState } from 'react';
import Section from '../components/Home/Section/Section1/Section';
import Section_2 from '../components/Home/Section/Section2/Section_2';
import Section_3 from '../components/Home/Section/Section3/Section_3';
import Sponsor from '../components/Home/Section/Section4/Sponsor';
import NavBar from '../components/NavBar/Navbar';
import LoaderComp from '../components/Loader/Loader';
function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
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

