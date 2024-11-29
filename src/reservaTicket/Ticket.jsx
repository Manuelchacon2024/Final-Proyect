import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Asegúrate de instalar emailjs-com
import "./ticketStyle.css"

import user_icon from './Assets2/person.png';
import name_icon from './Assets2/name.png';
import calendar_icon from './Assets2/calendar.png';
import email_icon from './Assets2/email.png'; // Icono para el correo

export const Ticket = () => {
  const [nombreApellido, setNombreApellido] = useState('');
  const [nombreEvento, setNombreEvento] = useState('');
  const [fechaHora, setFechaHora] = useState('');
  const [correo, setCorreo] = useState(''); // Estado para el correo
  const [isLoading, setIsLoading] = useState(false); // Estado para el spinner

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mostrar spinner al iniciar la solicitud
    try {
      // Primero, guarda la reservación en Sheetbest
      await axios.post("https://api.sheetbest.com/sheets/90318f5a-70ce-4fcb-b0c5-cc1c0449fd3e", {
        NombreyApellido: nombreApellido,
        NombredelEvento: nombreEvento,
        FechaHora: fechaHora,
      });

      // Luego, envía el correo con EmailJS
      const emailTemplateParams = {
        to_email: correo, // El correo al que se enviarán los datos
        from_name: nombreApellido,
        event_name: nombreEvento,
        event_datetime: fechaHora,
      };

      await emailjs.send(
        'service_6ynac6k', // Tu servicio de EmailJS
        'template_ax7ltjs', // Tu template de EmailJS
        emailTemplateParams,
        'LiOUCd5j5jME-ccZ3' // Tu User ID de EmailJS
      );

      alert("Registro y correo enviado exitosamente");
      setNombreApellido('');
      setNombreEvento('');
      setFechaHora('');
      setCorreo('');
    } catch (error) {
      console.log("Error al enviar los datos", error);
      alert("Surgió un error, intentelo de nuevo");
    } finally {
      // Ocultar el spinner después de 3 segundos
      setTimeout(() => setIsLoading(false));
    }
  };

  return (
    <div className="fondo-ticket">
      <br></br>
      <div className="container">
        {isLoading && (
          <div className="spinner-overlay">
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando</span>
              </div>
            </div>
          </div>
        )}
        <div className="header">
          <div className="text">Registro de Evento</div>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit} className="inputs">
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input
              type="text"
              placeholder="Nombre y Apellido"
              value={nombreApellido}
              onChange={(e) => setNombreApellido(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={name_icon} alt="name icon" />
            <input
              type="text"
              placeholder="Nombre del Evento"
              value={nombreEvento}
              onChange={(e) => setNombreEvento(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={calendar_icon} alt="calendar icon" />
            <input
              type="datetime-local"
              placeholder="Fecha y Hora"
              value={fechaHora}
              onChange={(e) => setFechaHora(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="submit-container">
            <button type="submit" className="submit" disabled={isLoading}>
              Reservar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
