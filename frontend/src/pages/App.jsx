import React from 'react';
import { Header } from '../components/Header/Header'
import { Cards } from '../components/Cards/Cards'
import { Navbar } from '../components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
