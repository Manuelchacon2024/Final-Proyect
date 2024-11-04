import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./navbar";
import { Carrucel } from "./carrucel";
import { Footer } from "./Footer1/Footer";
import { Eventos } from "./eventos.js";
import {LoginSignUp} from "./Components/LoginSignUp/LoginSignUp.jsx"




export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        

        <Routes>
        <Route path="1" element={<Carrucel/>}/>
        <Route path="2" element={<Eventos/>}/>
        <Route path="3" element={<LoginSignUp/>}/>
        
        


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}