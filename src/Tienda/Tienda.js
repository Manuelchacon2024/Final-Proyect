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
import Banner from "./Banner.jpg"
import { Link } from "react-router-dom"
import HoverableImage from "./HoverableImage";


export function Tienda() {
  return (
    <>
     <div>
        <img
          src={Banner}
          alt="Banner"
          className="img-fluid"
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ paddingTop: "50px" }}>Artistas</h2>

        <div className="d-flex justify-content-center flex-nowrap">
          <div className="text-center mx-3">
            <Link to="/V">
              <HoverableImage
                src={Vincent} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Vincent van Gogh</p>
          </div>
          <div className="text-center mx-3">
            <Link to="/L">
              <HoverableImage
                src={Leonardo} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Leonardo Da Vinci</p>
          </div>
          <div className="text-center mx-3">
            <Link to="/P">
              <HoverableImage
                src={Picasso} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Pablo Picasso</p>
          </div>
          <div className="text-center mx-3">
            <Link to="/M">
              <HoverableImage
                src={Monet} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Claude Monet</p>
          </div>
          <div className="text-center mx-3">
            <Link to="/F">
              <HoverableImage
                src={Frida} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Frida Kahlo</p>
          </div>
          <div className="text-center mx-3">
            <Link to="/D">
              <HoverableImage
                src={Dali} className="rounded" style={{ width: "150px", height: "150px", borderRadius: "10px" }}
              />
            </Link>
            <p style={{ fontFamily: "Roboto", }}>Salvador Dalí</p>
          </div>
        </div>
      </div>
      <div className=" mb-4">
        <h2 className="text-center mb-5">Productos favoritos</h2>
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={Taza} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
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
              <img src={Pendientes} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">PENDIENTES</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#007bff ", color: "#FFF" }}>Precio $15 USD</a>
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Funko} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">FUNKO POP</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff", }}>Precio $25 USD</a>
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Totebag} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TOTE BAG</h5>
                <a href="#" className="btn" style={{ backgroundColor: "#007bff", color: "#fff" }}>Precio $20 USD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    </>
  );
}