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






export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        

        <Routes>
        <Route path="/1" element={<Carrucel/>}/>
        <Route path="/2" element={<Eventos/>}/>
        <Route path="/3" element={<LoginSignUp/>}/>
        <Route path="/Personajes" element={<Artistas/>}/>
        <Route path="/5" element={<Galeria/>}/>
        <Route path="/6" element={<Ticket/>}/>
        <Route path="/7" element={<Tienda/>}/>
        
        


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}