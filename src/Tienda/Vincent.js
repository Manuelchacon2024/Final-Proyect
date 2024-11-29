import React, { useState } from 'react';
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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

export function Vincent() {
  const [showCheckout, setShowCheckout] = useState({
    Taza: false,
    Pendientes: false,
    Funko: false,
    Totebag: false,
    Hoodie: false,
    Bolson: false,
    Zapatos: false,
    Hoodie2: false,
    collar: false,
    fundas: false,
    anillo: false,
    libro: false,
    
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
        <h2 className="text-center mb-5">Vincent van Gogh Products</h2>
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={Taza} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">TAZA</h5>
                <button onClick={() => handleShowCheckout('Taza')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.Taza && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Pendientes} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">PENDIENTES</h5>
                <button onClick={() => handleShowCheckout('Pendientes')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.Pendientes && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Funko} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">FUNKO POP</h5>
                <button onClick={() => handleShowCheckout('Funko')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Funko && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Totebag} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
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
        </div>
      </div>

      <div className="">
        <div className="d-flex justify-content-center flex-nowrap">
          <div className="col-mx-4 mb-4">
            <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={Hoodie} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
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
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Bolson} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">BOLSON</h5>
                <button onClick={() => handleShowCheckout('Bolson')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $35 USD
                </button>
                {showCheckout.Bolson && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Zapatos} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">ZAPATOS</h5>
                <button onClick={() => handleShowCheckout('Zapatos')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $55 USD
                </button>
                {showCheckout.Zapatos && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={Hoodie2} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">HOODIE</h5>
                <button onClick={() => handleShowCheckout('Hoodie2')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $25 USD
                </button>
                {showCheckout.Hoodie2 && (
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
            <div className="card h-100 mx-auto ms-4" style={{ width: "18rem" }}>
              <img src={libro} className="card-img-top img-fluid" alt="Taza" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">LIBRO</h5>
                <button onClick={() => handleShowCheckout('libro')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $28 USD
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
              <img src={anillo} className="card-img-top img-fluid" alt="Pendientes" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">ANILLO</h5>
                <button onClick={() => handleShowCheckout('anillo')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $35 USD
                </button>
                {showCheckout.anillo && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mb-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={fundas} className="card-img-top img-fluid" alt="Funko" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">FUNDAS</h5>
                <button onClick={() => handleShowCheckout('fundas')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $15 USD
                </button>
                {showCheckout.fundas && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                )}
              </div>
            </div>
          </div>
          <div className="col-mx-3 mx-4">
            <div className="card h-70 mx-auto ms-3" style={{ width: "18rem", objectFit: "cover" }}>
              <img src={collar} className="card-img-top img-fluid" alt="Tote Bag" style={{ width: "500px", height: "300px" }} />
              <div className="card-body text-center">
                <h5 className="card-title">COLLAR</h5>
                <button onClick={() => handleShowCheckout('collar')} className="btn" style={{ backgroundColor: "#007bff", color: "#fff", marginBottom: "10px" }}>
                  Precio $27 USD
                </button>
                {showCheckout.collar && (
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





