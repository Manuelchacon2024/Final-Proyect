import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './LoginSignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export const LoginSignUp = () => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const toggleAction = () => {
    setAction(action === 'Sign Up' ? 'Login' : 'Sign Up');
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    
    if (action === 'Sign Up' && (!name || !email || !password)) {
      alert('Por favor, ingrese todos los datos.');
      setIsLoading(false);
      return;
    }

    if (action === 'Login' && (!email || !password)) {
      alert('Por favor, ingrese todos los datos.');
      setIsLoading(false);
      return;
    }

    if (action === 'Sign Up') {
      try {
        await axios.post('https://api.sheetbest.com/sheets/fa108234-e7b3-46de-b77d-baaf3d37fa01', {
          name,
          email,
          password,
        });
        alert('Registro exitoso');
        setName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error al registrarse:', error);
        alert('Surgió un error al registrarse, intente de nuevo.');
      } finally {
        setIsLoading(false);
      }
    } else if (action === 'Login') {
      try {
        const response = await axios.get(
          'https://api.sheetbest.com/sheets/fa108234-e7b3-46de-b77d-baaf3d37fa01'
        );
        const users = response.data;
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          alert(`¡Bienvenido de nuevo, ${user.name}!`);
          navigate('/1'); 
        } else {
          alert('Correo o contraseña incorrectos.');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Surgió un error al iniciar sesión, intente de nuevo.');
      } finally {
        setIsLoading(false);
      }
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
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

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


        <div className="submit-container">
          <button type="submit" className="submit" disabled={isLoading}>
            {action}
          </button>
          <button type="button" className="submit" onClick={toggleAction}>
            {action === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
    </div>
  );
};
