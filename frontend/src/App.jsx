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
import Preferences from './Pages/Preferences';
import Error from './Pages/Error';  
import Mismascotas_Sh from './Pages/Mismascotas_Sh';
import Profile from './Pages/Profile';
import Solicitud from './Pages/Solicitud';
import Peticiones from './Pages/Peticiones';


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
          <Route path="/profile/" element={<Profile />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="*" element={<Error />} />
          <Route path="/mis-mascotas-shelter" element={<Mismascotas_Sh />} />
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/peticiones" element={<Peticiones />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


