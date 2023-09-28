import React, { useState, useEffect } from 'react';
import AdopterProfile from '../components/Profile/ProfileAdopter';
import ProfileShelter from '../components/Profile/ProfileShelter';
import { GetProfile } from '../my_methods/session_methods';

function Profile() {
  const [isAdopter, setIsAdopter] = useState(true);
  var response = {}

  useEffect(() => {
    const fetchData = async () => {
      try {
        response = await GetProfile();
        console.log(response)
        if (response.data['status'] === 200){
          if (response.data.response['type'] === 'adopter'){
            setIsAdopter(true)
          }
          else{
            setIsAdopter(false)
          }
        }
        else{
          window.location.href = "/login";
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isAdopter ? <AdopterProfile /> : <ProfileShelter />}
    </>
  );
}

export default Profile;
