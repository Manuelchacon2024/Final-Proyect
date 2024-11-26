import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

export function Eventos() {
  return (
    <>
      <div className="container2">
        <div className="fondo1">
          <center>
            <h5>Vincent Van Gogh</h5>
            <h5>Historia</h5>
            <p>
              <pre>Sábado, 15 de Octubre, 2024</pre>
              <pre>Hora: 20:00</pre>
              <pre>Precio: $30 USD</pre>
            </p>
          
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
            
          </center>
        </div>

        <div className="fondo2">
          <center>
            <h5>Claude Monet</h5>
            <h5>Galería</h5>
            <p>
              <pre>Viernes, 22 de Noviembre, 2024</pre>
              <pre>Hora: 18:00</pre>
              <pre>Precio: $30 USD</pre>
            </p>
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
          </center>
        </div>

        <div className="fondo3">
          <center>
            <h5>Frida Kahlo</h5>
            <h5>Historia de arte</h5>
            <p>
              <pre>Miércoles, 16 de Octubre, 2024</pre>
              <pre>Hora: 16:00</pre>
              <pre>Precio: $25 USD</pre>
            </p>
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
          </center>
        </div>
      </div>

      <div className="container2">
        <div className="fondo4">
          <center>
            <h5>Leonardo Da Vinci</h5>
            <h5>Galería</h5>
            <p>
              <pre>Viernes, 25 de Octubre, 2024</pre>
              <pre>Hora: 19:00</pre>
              <pre>Precio: $35 USD</pre>
            </p>
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
          </center>
        </div>

        <div className="fondo5">
          <center>
            <h5>Salvador Dalí</h5>
            <h5>Historia</h5>
            <p>
              <pre>Viernes, 16 de Noviembre, 2024</pre>
              <pre>Hora: 20:00</pre>
              <pre>Precio: $40 USD</pre>
            </p>
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
          </center>
        </div>

        <div className="fondo6">
          <center>
            <h5>Pablo Picasso</h5>
            <h5>Historia de arte</h5>
            <p>
              <pre>Lunes, 18 de Noviembre, 2024</pre>
              <pre>Hora: 18:00</pre>
              <pre>Precio: $30 USD</pre>
            </p>
        
            <Link to="/6">
            <button type="button" class="btn btn-primary btn-sm">Reservar Ticket</button>
            </Link>
           
          </center>
        </div>
      </div>
    </>
  );
};