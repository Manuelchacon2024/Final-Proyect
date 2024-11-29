import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./navbar";
import { Footer } from "./Footer1/Footer";
import { Eventos } from "./eventos.js";
import {LoginSignUp} from "./Components/LoginSignUp/LoginSignUp.jsx"
import { Artistas } from "./Artistas.js";
import { Galeria } from "./Components/Galeria/Galeria.js";
import { Ticket } from "./reservaTicket/Ticket.jsx";
import { Tienda } from "./Tienda/Tienda.js";
import { Vincent } from "./Tienda/Vincent.js";
import { Leonardo } from "./Tienda/Leonardo.js";
import { Picasso } from "./Tienda/Picasso.js";
import { Monet } from "./Tienda/Monet.js";
import { Frida } from "./Tienda/Frida.js";
import { Dali } from "./Tienda/Dali.js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Tienda/CheckoutForm.js";
import {Carrucel01} from "./Carrucel/Carrucel01.js";
import { FridaKahlo } from "./CarruselA/Frida.js";
import { Picasso1 } from "./CarruselA/Picasso.js";
import { VanGogh1 } from "./CarruselA/vangogh.js";
const stripePromise = loadStripe('pk_test_51QQ5L5E9qL0mniOaz0gvIRrKAf1uzyD4qPEqFfkmXrREs1w8n9YEbAw3HNBbnJKfIMlkpbrHDNEsTvEfsq3jQirV00UYXJNaci');






export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        
        

        <Routes>
        
        <Route path="/1" element={<Carrucel01/>}/>
        <Route path="/2" element={<Eventos/>}/>
        <Route path="/3" element={<LoginSignUp/>}/>
        <Route path="/Personajes" element={<Artistas/>}/>
        <Route path="/5" element={<Galeria/>}/>
        <Route path="/6" element={<Ticket/>}/>
        <Route path="/7" element={<Tienda/>}/>
        <Route path="/V" element={<Vincent />} />
          <Route path="/L" element={<Leonardo />} />
          <Route path="/P" element={<Picasso />} />
          <Route path="/M" element={<Monet />} />
          <Route path="/F" element={<Frida />} />
          <Route path="/D" element={<Dali />} />
          <Route path="/frida" element={<FridaKahlo />} />
          <Route path="/picasso" element={<Picasso1 />} />
          <Route path="/Vango" element={<VanGogh1 />} />

          <Route path="/checkout" element={
            <Elements stripe={stripePromise}>
              <CheckoutForm/>
            </Elements>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}