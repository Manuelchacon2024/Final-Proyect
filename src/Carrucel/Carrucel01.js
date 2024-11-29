import React from 'react';
import './Carrucel01.css'; 
import imagen11 from "./imagen11.jpg"
import imagen12 from './imagen12.jpg';
import imagen13 from './imagen13.jpg';

export function Carrucel01() {
  return (
    <div>
      <div
        id="carouselE1"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000" // Cambia la imagen automáticamente cada 3 segundos
      >
        <div className="carousel-indicators">
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
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={imagen11} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center text-white">
              <div className="carousel-caption-overlay">
                <h5 className="display-4 fw-bold">Valuable and Diverse Collection</h5>
                <p className="lead">
                A museum should have a collection of objects, artworks, or artifacts that are of historical, cultural, scientific, or artistic value. 
                </p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={imagen12} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center text-white">
              <div className="carousel-caption-overlay">
                <h5 className="display-4 fw-bold">Accessibility and Inclusion</h5>
                <p className="lead">
                A museum must be accessible to all, including people with disabilities. This can include ramps, clear signage, braille guides, or services like audio guides.
                </p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={imagen13} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-flex justify-content-center align-items-center text-center text-white">
              <div className="carousel-caption-overlay">
                <h5 className="display-4 fw-bold">Education and Engagement</h5>
                <p className="lead">
                Museums play a key educational role. They offer interactive programs, guided tours, workshops, and activities that encourage learning and active participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}