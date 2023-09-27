import React, { useState, useEffect } from 'react';
import AdopterProfile from '../components/Profile/ProfileAdopter';
import ShelterRegister from '../components/Register/RegisterShelter';

function Profile() {
  const [isAdopter, setIsAdopter] = useState(true);

  useEffect(() => {
    const condition = /* condición aca */ null;
    
    setIsAdopter(condition);
  }, []);

  return (
    <>
      {isAdopter ? <AdopterProfile /> : <ShelterRegister />}
    </>
  );
}

export default Profile;
