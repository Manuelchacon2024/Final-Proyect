import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./navbar";
import { Carrucel } from "./carrucel";
import { Footer } from "./Footer1/Footer";
import { Eventos } from "./eventos.js";
import {LoginSignUp} from "./Components/LoginSignUp/LoginSignUp.jsx"
import { Artistas } from "./Artistas.js";
import { Galeria } from "./Components/Galeria/Galeria.js";
import { Ticket } from "./Ticket.js";
import { Tienda } from "./Tienda/Tienda.js";
import {Vincent} from "./Tienda/Vincent.js"
import {Leonardo} from "./Tienda/Leonardo.js";
import {Picasso} from "./Tienda/Picasso.js";
import {Monet} from "./Tienda/Monet.js";
import {Frida} from "./Tienda/Frida.js";
import {Dali} from "./Tienda/Dali.js";










export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        

        <Routes>

        <Route path="1" element={<Carrucel/>}/>
        <Route path="2" element={<Eventos/>}/>
        <Route path="3" element={<LoginSignUp/>}/>
        <Route path="Personajes" element={<Artistas/>}/>
        <Route path="/5" element={<Galeria/>}/>
        <Route path="6" element={<Ticket/>}/>
        <Route path="7" element={<Tienda/>}/>
        <Route path="/V" element={<Vincent/>}/>
        <Route path="/L" element={<Leonardo/>}/>
        <Route path="/P" element={<Picasso/>}/>
        <Route path="/M" element={<Monet/>}/>
        <Route path="/F" element={<Frida/>}/>
        <Route path="/D" element={<Dali/>}/>
        

        
        


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}