import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Taza2 from "./Taza2.jpg"
import Pendientes2 from "./Pendientes2.jpg"
import Funko2 from "./Funko2.jpg"
import Totebag2 from "./Totebag2.jpg"
import libro2 from "./Libro2.jpg"
import Camisa from "./Camisa.jpg"
import Brasalete from "./Brasalete.jpg"
import Escultura from "./Escultura.jpg"
import collar2 from "./Collar2.jpg"
import Llavero2 from "./Llavero2.jpg"
import Cojin from "./Cojin.jpg"
import Cuadro from "./Cuadro.jpg"



export function Leonardo() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Leonardo Da Vinci Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Taza2} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TAZA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $10 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={ Pendientes2} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">PENDIENTES</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Funko2} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNKO POP</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Totebag2} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TOTE BAG</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $10 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={libro2 } className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LIBRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $30 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Camisa} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CAMISA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Brasalete} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">BRASALETE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Escultura} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ESCULTURA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $27 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={collar2} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">COLLAR</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $30 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Llavero2} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LLAVERO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $5 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Cojin} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">COJIN</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Cuadro} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CUADRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $20 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




