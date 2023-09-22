import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dogs from './Pages/Dogs';
import ShowMore from './Pages/ShowMore';
import Pinder from './Pages/Pinder';
import Home from './Pages/Home';
import Who from './Pages/Who';
import Post from './Pages/Post';
import Add from './Pages/Add';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Successful from './Pages/Successful';
import ShelterProfile from './Pages/ProfileShelter';
import AdopterProfile from './Pages/ProfileAdopter';
import Preferences from './Pages/Preferences';
import Error from './Pages/Error';

const App = () => {



  {/*
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get('http://localhost:5000/pets/all');
          console.log(response)
          console.log(response)
        } catch (error) {
          console.error(error);
          console.log('error mediatico')
        }
      };
    fetchUser();
    })


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/pets/all');
          setData(response.data);
        } catch (err) {
          setError(err);
        }
      };
      fetchData();
    }, []);
  */}
  
    {/* ====================================================================== */}
    
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/pet/details/:id" element={<ShowMore />} />
          <Route path="/pinder" element={<Pinder />} />
          <Route path="/about" element={<Who />} />
          <Route path="/post" element={<Post />} />
          <Route path="/add" element={<Add />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/profile/shelter" element={<ShelterProfile />} />
          <Route path="/profile/adopter" element={<AdopterProfile />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/error" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


