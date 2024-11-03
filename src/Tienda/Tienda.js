import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Taza from "./Taza.jpg"
import Pendientes from "./Pendientes.jpg"
import Funko from "./Funko.jpg"
import Totebag from "./Totebag.jpg"

export function Tienda() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-5">Productos favoritos</h2>
        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
              <img src={Taza} className="card-img-top img-fluid" alt="Taza" style={{ objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TAZA</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>
                  Precio $10 USD
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card h-100 mx-auto" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Pendientes} className="card-img-top img-fluid" alt="Pendientes" />
              <div className="card-body text-center">
                <h5 className="card-title">PENDIENTES</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $15 USD</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-70 mx-4" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Funko} className="card-img-top img-fluid" alt="Funko" />
              <div className="card-body text-center">
                <h5 className="card-title">FUNKO POP</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $25 USD</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-70 mx-5" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Totebag} className="card-img-top img-fluid" alt="Tote Bag" />
              <div className="card-body text-center">
                <h5 className="card-title">TOTE BAG</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#19265b", color: "#fff" }}>Precio $20 USD</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
