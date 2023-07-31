import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar';
import Home from './Pages/Home';
import Who from './Pages/Who';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Who/>
    </div>
  );
}

export default App;
