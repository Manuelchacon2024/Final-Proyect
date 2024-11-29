import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Alfombra from "./Alfombra.jpg"
import Anillo from "./Anillo4.jpg"
import Brasalete from "./Brasalete4.jpg"
import Collar from "./Collar4.jpg"
import Cuadros from "./Cuadros.jpg"
import Hoodie from "./Hoodie4.jpg"
import libro from "./Libro4.jpg"
import Pendientes from "./Pendientes4.jpg"
import Totebag from "./totebag4.jpg"
import Reloj from "./Reloj.jpg"
import taza from "./Taza4.jpg"
import Tshirt from "./T-shirt.jpg"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

export function Monet() {
  const [showCheckout, setShowCheckout] = useState({
    Alfombra: false,
    Anillo: false,
    Brazalete: false,
    Collar: false,
    Cuadros: false,
    Hoodie: false,
    libro: false,
    Pendientes: false,
    Totebag: false,
    Reloj: false,
    taza: false,
    Tshirt: false,

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
        <h2 className="text-center mb-5">Claude Monet Products</h2>
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-70 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={Alfombra} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">ALFOMBRA</h5>
                <button onClick={() => handleShowCheckout('Alfombra')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $30 USD
                </button>
                {showCheckout.Alfombra && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Anillo} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">ANILLO</h5>
                <button onClick={() => handleShowCheckout('Anillo')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $35 USD
                </button>
                {showCheckout.Anillo && (
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
                <button onClick={() => handleShowCheckout('Brazalete')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Brazalete && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Collar} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">COLLAR</h5>
                <button onClick={() => handleShowCheckout('Collar')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $20 USD
                </button>
                {showCheckout.Collar && (
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
              <img src={Cuadros} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">CUADROS</h5>
                <button onClick={() => handleShowCheckout('Cuadros')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $37 USD
                </button>
                {showCheckout.Cuadros && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Hoodie} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">HOODIE</h5>
                <button onClick={() => handleShowCheckout('Hoodie')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Hoodie && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={libro} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">LIBRO</h5>
                <button onClick={() => handleShowCheckout('libro')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $30 USD
                </button>
                {showCheckout.libro && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Pendientes} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">PENDIENTES</h5>
                <button onClick={() => handleShowCheckout('Pendientes')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $20 USD
                </button>
                {showCheckout.Pendientes && (
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
              <img src={Totebag} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TOTE BAG</h5>
                <button onClick={() => handleShowCheckout('Totebag')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.Totebag && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Reloj} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">RELOJ</h5>
                <button onClick={() => handleShowCheckout('Reloj')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $18 USD
                </button>
                {showCheckout.Reloj && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={taza} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TAZA</h5>
                <button onClick={() => handleShowCheckout('taza')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.taza && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Tshirt} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">CAMISA</h5>
                <button onClick={() => handleShowCheckout('camisa')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.camisa && (
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





