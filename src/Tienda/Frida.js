import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Reloj from "./Reloj5.jpg"
import Estuche from "./Estuche.jpg"
import Funda from "./Funda5.jpg"
import Funko from "./Funko5.jpg"
import Libro from "./Libro5.jpg"
import Macetas from "./Macetas1.jpg"
import Portavasos from "./Portavasos.jpg"
import Taza from "./Taza5.jpg"
import Totebag from "./Totebag5.jpg"
import Zapatos from "./Zpatos5.jpg"
import Calcetines from "./Calcetines.jpg"
import collar from "./Collar5.jpg"



export function Frida() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Frida Kahlo Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Reloj} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">RELOJ</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $25 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Estuche} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ESTUCHE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $10 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Funda} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Funko} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNKO POP</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Libro} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LIBRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                    Precio $30 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Macetas} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">MACETAS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Portavasos} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">PORTAVASOS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $13 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Taza} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TAZA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $15 USD</a>
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
                <img src={Zapatos} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ZAPATOS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $50 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Calcetines} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">CALCETINES</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $8 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={collar} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">COLLAR</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $20 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




