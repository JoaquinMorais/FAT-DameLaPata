import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';

import '../../login.css';


export function Option() {
    return (
        <div>
          <Navbar />
          <div className="main">
                <h1>Queremos conocerte mas</h1>
            </div>
                <div className='ifnot'>
                  <p>¿Ya tienes cuenta? <a href="/option/login">Ingresa</a></p>
                </div>
        </div>

      );
    }

export default Option;
