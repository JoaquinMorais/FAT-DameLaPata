import React from 'react';
import Navbar from '../components/NavBar/NavBar';

function Error() {
  return (
    <>
      <Navbar />
      <div style={styles.centeredContent}>
        <h1 style={{ fontSize: '100px', fontWeight: 'bold' }}>TREMENDO ERROR AMIGO JAJAJAJA</h1>
      </div>
    </>
  );
}

const styles = {
    centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
  },
};

export default Error;
