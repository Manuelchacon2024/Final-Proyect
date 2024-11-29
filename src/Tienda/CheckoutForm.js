import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import './CheckoutForm.css'; // Importa el archivo CSS
import { loadStripe } from '@stripe/stripe-js';

// Añadir la clave pública aquí
const stripePromise = loadStripe('pk_test_51QQ5L5E9qL0mniOaz0gvIRrKAf1uzyD4qPEqFfkmXrREs1w8n9YEbAw3HNBbnJKfIMlkpbrHDNEsTvEfsq3jQirV00UYXJNaci');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  React.useEffect(() => {
    fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }), // Monto en centavos
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error al obtener el clientSecret: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching client secret:', error.message);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js no está listo');
      return;
    }

    if (!clientSecret) {
      console.error('El clientSecret no está disponible');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        console.error('[Error en el pago]', error.message);
      } else {
        console.log('[Pago exitoso]', paymentIntent);
      }
    } catch (error) {
      console.error('[Error inesperado]', error.message);
    }
  };

  return (
    <Elements stripe={stripePromise}> {/* Aquí se agrega stripePromise */}
      <form onSubmit={handleSubmit}>
        <CardElement className="StripeElement" />
        <button type="submit" disabled={!stripe} className="checkout-button">
          Pagar
        </button>
      </form>
    </Elements>
  );
};

export default CheckoutForm;
