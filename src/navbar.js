import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Link } from "react-router-dom"


export function Navbar() {

  return (

    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Museo
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/1">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="2">
           Eventos
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Un poco más
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="7">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="5">
               Galeria
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="Personajes">
                Artistas
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="6">
            Reserva
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Link to="/3">
        <button className="btn btn-outline-success" type="submit">
          Login
        </button>
        </Link>
      </form>
    </div>
  </div>
</nav>

    </div>
  )

}