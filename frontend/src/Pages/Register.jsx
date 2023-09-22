  import * as React from 'react';
  import Box from '@mui/material/Box';
  import Tab from '@mui/material/Tab';
  import TabContext from '@mui/lab/TabContext';
  import TabList from '@mui/lab/TabList';
  import TabPanel from '@mui/lab/TabPanel';
  import ShelterRegister from "../components/Register/RegisterShelter";
  import AdopterRegister from "../components/Register/RegisterAdopter";
  import Navbar from "../components/NavBar/NavBar";

  function Register() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <>
        <Navbar />
        <div
          style={{
            backgroundImage: 'url("https://media.diariouno.com.ar/p/f54249878a58173518d1bc7ec8f5814e/adjuntos/298/imagenes/008/806/0008806731/1200x0/smart/perro-callejerojpg.jpg")',
            backgroundSize: 'cover', // Ensure the image covers the entire container
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', // Use vh to ensure it covers the viewport height
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '600px', typography: 'body1', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px', maxHeight: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ justifyContent: 'space-around' }}>
                  <Tab label="Fundacion" value="1" sx={{ flex: 1, textAlign: 'center', fontSize: '20px', marginTop: '50px' }} />
                  <Tab label="Adoptante" value="2" sx={{ flex: 1, textAlign: 'center', fontSize: '20px', marginTop: '50px' }} />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ height: '100%' }}><ShelterRegister /></TabPanel>
              <TabPanel value="2" sx={{ height: '100%' }}><AdopterRegister /></TabPanel>
            </TabContext>
          </Box>
        </div>
      </>
    );
  }

  export default Register;

