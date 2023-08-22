import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dogs from './Pages/Dogs';
import Pinder from './Pages/Pinder';
import Home from './Pages/Home';
import Who from './Pages/Who';
import Post from './Pages/Post';
import Add from './Pages/Add';

const App = () => {


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

  {/*
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
        <Route path="/*" element={<Home />} />
          <Route path="dogs/*" element={<Dogs />} />
          <Route path="pinder/*" element={<Pinder />} />
          <Route path="about/*" element={<Who />} />
          <Route path="post/*" element={<Post />} />
          <Route path="add/*" element={<Add />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
