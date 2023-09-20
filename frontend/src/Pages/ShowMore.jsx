import React, {useState, useEffect} from 'react'
import Details from '../components/Dogs/Cards/Details';
import NavBar from '../components/NavBar/NavBar';
import IsLogged from '../my_methods/session_methods';
import LoaderComp from '../components/Loader/Loader';


function ShowMore() {

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
  
  return (
    <>
        <NavBar pages_array={pages_array} settings_array={settings_array} />
        <Details />
    </>
  )
}

export default ShowMore