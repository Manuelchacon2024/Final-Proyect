import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import imagen from "./Frida.png";
import imagen1 from "./Picasso.png";
import imagen2 from "./vg.png";

export function Artistas() {
  return (
    <div>
      <div className="container-fluid mt-4 text-center">
        <div className="py-5 px-4" style={{ backgroundColor: "#000000", color: "#fffff" }}>
          <h1 className="text-white">Artistas</h1>
          <h5 className="text-white">"Masterpeaces Description"</h5>
        </div>
      </div>
      
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        
        <div className="carousel-inner">
          {/* Frida Kahlo */}
          <div className="carousel-item active">
            <img src={imagen} className="d-block w-100" alt="Frida Kahlo" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Frida Kahlo</h3>
              <h4>
                Frida Kahlo fue una pintora mexicana conocida por sus autorretratos que exploran el dolor físico, la identidad, y la cultura mexicana...
              </h4>
              <p>
                <a href="/Frida.js" className="btn btn-primary mt-3">Leer más</a>
              </p>
            </div>
          </div>
          
          {/* Pablo Picasso */}
          <div className="carousel-item">
            <img src={imagen1} className="d-block w-100" alt="Pablo Picasso" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Pablo Picasso</h3>
              <h4>
                Pablo Picasso fue un pintor y escultor español, conocido como uno de los artistas más influyentes del siglo XX...
              </h4>
              <p>
                <a href="/Picasso.js" className="btn btn-primary mt-3">Leer más</a>
              </p>
            </div>
          </div>
          
          {/* Vincent Van Gogh */}
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" alt="Vincent Van Gogh" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Vincent Van Gogh</h3>
              <h4>
                Vincent van Gogh fue un pintor neerlandés del siglo XIX, conocido por su estilo postimpresionista y sus pinceladas expresivas...
              </h4>
              <p>
                <a href="/vangogh.js" className="btn btn-primary mt-3">Leer más</a>
              </p>
            </div>
          </div>
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
