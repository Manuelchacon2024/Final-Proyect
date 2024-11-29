import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import imagen from "./Frida.png";
import imagen1 from "./Picasso.png";
import imagen2 from "./vg.png";
import { Link } from "react-router-dom"

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
          <div className="carousel-item active">
            <img src={imagen} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Frida Kahlo</h3>
              <h4>
                Frida Kahlo fue una pintora mexicana conocida por sus autorretratos que exploran el dolor físico, la identidad, y la cultura mexicana. Su estilo único mezcla el surrealismo con elementos simbólicos de México. Tras sufrir un grave accidente en su juventud, Kahlo plasmó su lucha personal en su arte. Su relación con el muralista Diego Rivera también influyó en su vida y obra. Hoy, Frida es un ícono cultural y feminista reconocida mundialmente.
              </h4>
              <p>
                
              <Link to="/frida" className="btn btn-primary mt-3">Leer más</Link>
              </p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src={imagen1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Pablo Picasso</h3>
              <h4>
                Pablo Picasso fue un pintor y escultor español, conocido como uno de los artistas más influyentes del siglo XX. Nació en 1881 en Málaga y es famoso por cofundar el movimiento cubista, en el que descompuso las formas en figuras geométricas. Picasso exploró múltiples estilos a lo largo de su carrera, incluyendo el Período Azul y el Período Rosa, y creó obras emblemáticas como Les Demoiselles d'Avignon y Guernica, esta última una protesta contra los horrores de la guerra. Su creatividad y versatilidad lo convirtieron en un ícono del arte moderno.
              </h4>
              <p>
              <Link to="/picasso" className="btn btn-primary mt-3">Leer más</Link>
              </p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Vincent Van Gogh</h3>
              <h4>
                Vincent van Gogh fue un pintor neerlandés del siglo XIX, conocido por su estilo postimpresionista y sus pinceladas expresivas y coloridas. Nació en 1853 y, aunque durante su vida no tuvo éxito comercial, hoy es considerado uno de los artistas más importantes de la historia. Sus obras, como La noche estrellada y Los girasoles, capturan su intensa visión emocional del mundo. Van Gogh luchó con problemas de salud mental a lo largo de su vida y produjo más de 2,000 obras en solo una década. Su arte ha dejado un legado duradero por su vibrante estilo y profundidad emocional.
              </h4>
              <p>
                
              <Link to="/Vango" className="btn btn-primary mt-3">Leer más</Link>
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