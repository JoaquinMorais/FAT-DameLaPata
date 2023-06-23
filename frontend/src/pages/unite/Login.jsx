import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


import '../../login.css';


export function Login() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Login</h1>
                <div>
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="tumail@dog.com" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="*******" id="password" />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
      );
}
export default Login;
