import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Agenda from "./Agenda.jpg"
import Bandeja from "./Bandeja.jpg"
import Camisa from "./camisa3.jpg"
import Ceramica from "./Ceramica.jpg"
import Cuadro from "./Cuadro3.jpg"
import Funda from "./Funda3.jpg"
import Gorra from "./Gorra.jpg"
import Hoodie from "./Hoodie3.jpg"
import Jaron from "./Jaron.jpg"
import Laptop from "./Laptop.jpg"
import Llavero from "./Llavero3.jpg"
import Termo from "./Termo.jpg"



export function Picasso() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Pablo Picasso Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Agenda} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">AGENDA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $10 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Bandeja} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">PLATO DE JOYERIA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Camisa} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CAMISA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $18 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Ceramica} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FIGURA DE CERAMICA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $40 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Cuadro} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CUADRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $24 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Funda} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Hoodie} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">HOODIE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Gorra} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">GORRA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $20 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Jaron} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">JARON</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $28 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Laptop} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDA DE LAPTOP</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $30 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Llavero} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LLAVER</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $5 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Termo} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TERMO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




