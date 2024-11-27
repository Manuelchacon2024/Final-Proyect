import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Taza from "./Taza1.jpg"
import Pendientes from "./Pendientes1.jpg"
import Funko from "./Funko.jpg"
import Totebag from "./Totebag1.jpg"
import Hoodie from "./Hoodie.jpg"
import Bolson from "./Bolson.jpg"
import Zapatos from "./Zapatos.jpg"
import Hoodie2 from "./Hoodie2.jpg"
import collar from "./collar.jpg"
import fundas from "./Fundas.jpg"
import anillo from "./anillo.jpg"
import libro from "./libro.jpg"



export function Vincent() {
    return (
      <>
        <div className="">
          <h2 className="text-center mb-5">Vincent van Gogh Products</h2>
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Taza} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TAZA</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $15 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Pendientes} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">PENDIENTES</h5>
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
                <img src={Totebag} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">TOTE BAG</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={Hoodie} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">HOODIE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $25 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Bolson} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">BOLSON</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $35 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Zapatos} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ZAPATOS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $55 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={Hoodie2} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">HOODIE</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $25 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-center flex-nowrap">
            <div className="col-mx-4 mb-4">
              <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
                <img src={libro} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">LIBRO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                    Precio $28 USD
                  </a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={anillo} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">ANILLO</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $35 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mb-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={fundas} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">FUNDAS</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $15 USD</a>
                </div>
              </div>
            </div>
            <div className="col-mx-3 mx-4">
              <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
                <img src={collar} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px"  }} />
                <div className="card-body text-center">
                  <h5 className="card-title">COLLAR</h5>
                  <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $27 USD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </>
    );
  }
      




