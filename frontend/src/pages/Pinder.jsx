import React from 'react';

import { Link } from 'react-router-dom';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { BigCard } from '../components/BigCard/BigCard';
import { Footer } from '../components/Footer/Footer';

function Pinder() {
  return (
    <div>
      <Navbar />
      <BigCard />
      <Footer />
    </div>
  );
};

export default Pinder;