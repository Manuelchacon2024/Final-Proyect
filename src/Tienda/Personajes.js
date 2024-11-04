import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Vincent from "./Vincent.jpg";
import Leonardo from "./Leonardo.jpg";
import Picasso from "./picasso.jpg";
import Monet from "./Monet.jpg";
import Frida from "./Frida.jpg";
import Dali from "./Dali.jpg";


export function Personajes() {
    return (
        <>
            <div className="container-fluid mt-4 text-center">
                <div className="py-5 px-4" style={{ backgroundColor: "#19265b", color: "#fffff" }}>
                    <h1 className="text-white" >Tienda online de souvenirs de los artistas del lienzo</h1>
                    <p className="text-white">"Donde el legado artístico se transforma en recuerdos eternos."</p>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Artistas</h2>

                <div className="d-flex justify-content-center flex-wrap">
                    <div className="text-center mx-3">
                        <img src={Vincent} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Vincent van Gogh</p>
                    </div>
                    <div className="text-center mx-3">
                        <img src={Leonardo} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Leonardo Da Vinci</p>
                    </div>
                    <div className="text-center mx-3">
                        <img src={Picasso} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Pablo Picasso</p>
                    </div>
                    <div className="text-center mx-3">
                        <img src={Monet} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Claude Monet</p>
                    </div>
                    <div className="text-center mx-3">
                        <img src={Frida} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Frida Kahlo</p>
                    </div>
                    <div className="text-center mx-3">
                        <img src={Dali} class="rounded float-start" style={{ width: "150px", height: "150px" }}></img>
                        <p>Salvador Dalí</p>
                    </div>
                </div>
            </div>


        </>
    );
}
