import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignUp = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mostrar spinner al iniciar la solicitud
    try {
      await axios.post("https://api.sheetbest.com/sheets/fa108234-e7b3-46de-b77d-baaf3d37fa01", {
        name: name,
        email: email,
        password: password
      });
      alert("Registro fue exitoso");
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log("Error al enviar los datos", error);
      alert("Surgió un error, intentelo de nuevo");
    } finally {
      // Ocultar el spinner después de 3 segundos
      setTimeout(() => setIsLoading(false));
    }
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="spinner-overlay">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="inputs">
        <div className="input">
          <img src={user_icon} alt="user icon" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit" disabled={isLoading}>
            Sign Up
          </button>
          <button type="button" className="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
