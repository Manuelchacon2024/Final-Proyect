import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imagen from "./art.jpg";

export function Carrucel() {
  return (
    <div>
      <div id="carouselE1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-idicators">
          <button
            type="button"
            data-bs-target="#carouselE1"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselE1"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselE1"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen} className="d-block w-100" />
            <div className="carousel-caption">
              <h5>Los mejores motores</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quam
                iure architecto! Debitis error ratione sequi perferendis nobis
                repellat mollitia, modi praesentium, molestiae eligendi tenetur
                accusamus reiciendis aliquam laudantium amet!
              </p>
              <p>
                <a href="#" className="btn btn-primary mt-3">
                  Leer Más
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="art.jpg" className="d-block w-100" />
            <div className="carousel-caption">
              <h5>Los mejores motores</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quam
                iure architecto! Debitis error ratione sequi perferendis nobis
                repellat mollitia, modi praesentium, molestiae eligendi tenetur
                accusamus reiciendis aliquam laudantium amet!
              </p>
              <p>
                <a href="#" className="btn btn-primary mt-3">
                  Leer Más
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="xd.jpg" className="d-block w-100" />
            <div className="carousel-caption">
              <h5>Los mejores motores</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quam
                iure architecto! Debitis error ratione sequi perferendis nobis
                repellat mollitia, modi praesentium, molestiae eligendi tenetur
                accusamus reiciendis aliquam laudantium amet!
              </p>
              <p>
                <a href="#" className="btn btn-primary mt-3">
                  Leer Más
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="carouselE1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselE1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
