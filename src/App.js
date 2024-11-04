import { Navbar } from "./navbar";
import { Carrucel } from "./carrucel";
import { Footer } from "./Footer1/Footer";
import { Eventos } from "./eventos.js"
import { Busqueda } from "./busquedaEvents.js";
import LoginSignUp, {login} from "./Components/LoginSignUp/LoginSignUp.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <Carrucel />
      <Busqueda/>
      <Eventos/>
      <LoginSignUp/>
      <Footer />
      
      
    </div>
  )
}