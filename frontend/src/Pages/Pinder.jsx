import React, { useEffect, useState } from 'react'; 
import BigCards from '../components/Pinder/BigCards/BigCards';
import NavBar from '../components/NavBar/NavBar'
import slides from '../dogs.json'
import axios from 'axios';

import IsLogged from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';

async function axiosTest() {
  const response = await axios.get("http://127.0.0.1:5000/pet/1")
  return response.data
}

function Pinder() {

  // ALEJO PARTE
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
  //////////////

  axiosTest()
  return (
    <> 
      <NavBar pages_array={pages_array} settings_array={settings_array} />
      <BigCards />
    </>
  )
}

export default Pinder