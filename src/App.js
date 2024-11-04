import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./navbar";
import { Carrucel } from "./carrucel";
import { Footer } from "./Footer1/Footer";
import { Eventos } from "./eventos.js";
import {LoginSignUp} from "./Components/LoginSignUp/LoginSignUp.jsx"
import { Artistas } from "./Artistas.js";





export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        

        <Routes>
        <Route path="1" element={<Carrucel/>}/>
        <Route path="2" element={<Eventos/>}/>
        <Route path="3" element={<LoginSignUp/>}/>
        <Route path="4" element={<Artistas/>}/>
        
        


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}