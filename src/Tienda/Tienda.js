import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Vincent from "./Vincent.jpg";
import Leonardo from "./Leonardo.jpg";
import Picasso from "./picasso.jpg";
import Monet from "./Monet.jpg";
import Frida from "./Frida.jpg";
import Dali from "./Dali.jpg";
import Taza from "./Taza.jpg"
import Pendientes from "./Pendientes.jpg"
import Funko from "./Funko.jpg"
import Totebag from "./Totebag.jpg"
 
export function Tienda() {
  return (
    <>
      <div className="container-fluid mt-4 text-center">
        <div className="py-5 px-4" style={{ backgroundColor: "#19265b", color: "#fffff" }}>
          <h1 className="text-white" >Tienda online de souvenirs de los artistas del lienzo</h1>
          <p className="text-white">"Donde el legado artístico se transforma en recuerdos eternos."</p>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Artistas</h2>
 
        <div className="d-flex justify-content-center flex-wrap">
          <div className="text-center mx-3">
            <img src={Vincent} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Vincent van Gogh</p>
          </div>
          <div className="text-center mx-3">
            <img src={Leonardo} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Leonardo Da Vinci</p>
          </div>
          <div className="text-center mx-3">
            <img src={Picasso} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Pablo Picasso</p>
          </div>
          <div className="text-center mx-3">
            <img src={Monet} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Claude Monet</p>
          </div>
          <div className="text-center mx-3">
            <img src={Frida} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Frida Kahlo</p>
          </div>
          <div className="text-center mx-3">
            <img src={Dali} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
            <p>Salvador Dalí</p>
          </div>
        </div>
      </div>
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