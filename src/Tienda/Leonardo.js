import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Taza2 from "./Taza2.jpg"
import Pendientes2 from "./Pendientes2.jpg"
import Funko2 from "./Funko2.jpg"
import Totebag2 from "./Totebag2.jpg"
import libro2 from "./Libro2.jpg"
import Camisa from "./Camisa.jpg"
import Brasalete from "./Brasalete.jpg"
import Escultura from "./Escultura.jpg"
import collar2 from "./Collar2.jpg"
import Llavero2 from "./Llavero2.jpg"
import Cojin from "./Cojin.jpg"
import Cuadro from "./Cuadro.jpg"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

export function Leonardo() {
  const [showCheckout, setShowCheckout] = useState({
    Taza2: false,
    Pendientes2: false,
    Funko2: false,
    Totebag2: false,
    libro2: false,
    Camisa: false,
    Brasalete: false,
    Escultura: false,
    collar2: false,
    Llavero2: false,
    Cojin: false,
    Cuadro: false,

  });

  const handleShowCheckout = (product) => {
    setShowCheckout((prevState) => ({
      ...prevState,
      [product]: !prevState[product],
    }));
  };

  return (
    <>
      <div className="">
        <h2 className="text-center mb-5">Leonardo Da Vinci Products</h2>
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={Taza2} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TAZA</h5>
                <button onClick={() => handleShowCheckout('Taza2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $10 USD
                </button>
                {showCheckout.Taza2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Pendientes2} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">PENDIENTES</h5>
                <button onClick={() => handleShowCheckout('Pendientes2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.Pendientes2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Funko2} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">FUNKO POP</h5>
                <button onClick={() => handleShowCheckout('Funko2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Funko2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Totebag2} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TOTE BAG</h5>
                <button onClick={() => handleShowCheckout('Totebag2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $10 USD
                </button>
                {showCheckout.Totebag2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={libro2} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">LIBRO</h5>
                <button onClick={() => handleShowCheckout('libro2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $30 USD
                </button>
                {showCheckout.libro2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Camisa} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">CAMISA</h5>
                <button onClick={() => handleShowCheckout('Camisa')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.Camisa && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Brasalete} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">BRASALETE</h5>
                <button onClick={() => handleShowCheckout('Brasalete')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Brasalete && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Escultura} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">ESCULTURA</h5>
                <button onClick={() => handleShowCheckout('Escultura')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $27 USD
                </button>
                {showCheckout.Escultura && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={collar2} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">COLLAR</h5>
                <button onClick={() => handleShowCheckout('collar2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $30 USD
                </button>
                {showCheckout.collar2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Llavero2} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">LLAVERO</h5>
                <button onClick={() => handleShowCheckout('Llavero2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $5 USD
                </button>
                {showCheckout.Llavero2 && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Cojin} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">COJIN</h5>
                <button onClick={() => handleShowCheckout('Cojin')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Cojin && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Cuadro} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">CUADRO</h5>
                <button onClick={() => handleShowCheckout('Cuadro')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $20 USD
                </button>
                {showCheckout.Cuadro && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}





