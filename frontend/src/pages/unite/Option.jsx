import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { BsPersonHearts } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';


import '../../login.css';
import '../../option.css';



export function Option() {

    const linkStyle = {
        color: 'green',
        textDecoration: 'none',
        fontWeight: 'bold', 
        border: '2px solid black',
        padding: '10px',
        transition: 'background-color 0.3s, color 0.3s'
    };

    const linkHoverStyle = {
        backgroundColor: 'green',
        color: 'white'
      };
    return (
        <div>
          <Navbar />
          <div className="main">
            <div className='container'>
            <h1>Queremos conocerte mas</h1>
                <p>Elige una opción:</p>
                <div className='options'>
                    <Link to="/option/signup" style={linkStyle} > <BsPersonHearts/>   SOY ADOPTANTE   <BsPersonHearts/></Link>
                </div>
                <div className='options'>
                    <Link to="/option/organitation  " style={linkStyle}><IoHome/>   SOY UN REFUGIO   <IoHome/></Link>
                </div>
            </div>
                <div className='ifnot'>
                  <p>¿Ya tienes cuenta? <Link to="/option/login">Ingresa</Link></p>
                </div>
            </div>

        </div>

      );
    }

export default Option;
