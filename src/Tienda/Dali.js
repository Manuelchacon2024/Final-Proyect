import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Camisa from "./Camisa6.jpg"
import Chaqueta from "./Chaqueta.jpg"
import Decoracion from "./Decoracion.jpg"
import Decoracion6 from "./Decoracion.6.jpg"
import Funda from "./funda6.jpg"
import Fundas from "./Fundas.6.jpg"
import Funko from "./funko6.jpg"
import Gabacha from "./gabacha.jpg"
import Reloj from "./Relojmano.jpg"
import Termo from "./Termo6.jpg"
import Totebag from "./Totebag6.jpg"
import Zapatos from "./Zapatos6.jpg"



export function Dali() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Salvador Dalí Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Camisa} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CAMISA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $10 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Chaqueta} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CHAQUETA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $45 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Decoracion} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ADORNO DECORATIVO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $35 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Decoracion6} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ADORNO DECORATIVO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $35 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-170 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Funda} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDA EXCLUSIVA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $25 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Fundas} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDAS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Funko} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNKO POP</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Gabacha} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">GABACHA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $80 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Reloj} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">RELOJ</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $30 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Termo} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TERMO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Totebag} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TOTE BAG</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Zapatos} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ZAPATOS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $50 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




