import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Alfombra from "./Alfombra.jpg"
import Anillo from "./Anillo4.jpg"
import Brasalete from "./Brasalete4.jpg"
import Collar from "./Collar4.jpg"
import Cuadros from "./Cuadros.jpg"
import Hoodie from "./Hoodie4.jpg"
import libro from "./Libro4.jpg"
import Pendientes from "./Pendientes4.jpg"
import Totebag from "./totebag4.jpg"
import Reloj from "./Reloj.jpg"
import taza from "./Taza4.jpg"
import Tshirt from "./T-shirt.jpg"



export function Monet() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Claude Monet Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Alfombra} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ALFOMBRA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $30 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Anillo} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ANILLO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $35 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Brasalete} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">BRASALETE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Collar} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">COLLAR</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $20 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Cuadros} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CUADROS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $37 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Hoodie} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">HOODIE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={libro} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LIBRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $30 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Pendientes} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">PENDIENTES</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $20 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Totebag} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TOTE BAG</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $15 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Reloj} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">RELOJ</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $18 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={taza} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TAZA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Tshirt} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CAMISA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $17 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




