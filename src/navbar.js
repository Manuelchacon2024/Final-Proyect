import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export function Navbar() {

  return (

    <div>
      <>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand me-auto" href="#">
              Logo
            </a>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  logo
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="nav-link mx-lg-2 active "
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">
                      Portafolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-lg-2" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" className="loguin-buttom">
              Loguin
            </a>
            <button
              className="navbar-toggler pe-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            />
            <span className="navbar-toggler-icon" />
          </div>
        </nav>
        {/*End Navbar*/}
        {/*Hero section*/}
        <section className="hero-section">
          <div
            className="container d-flex align-items-center justify-content-center fs-1
  text-white flex-colum"
          >
            <h1>Responsive Navbar</h1>
            <h2>Bootstrap 5</h2>
          </div>
        </section>
        {/*End hero section*/}
      </>

    </div>
  )

}