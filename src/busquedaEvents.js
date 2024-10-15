import './App.css';

export function Busqueda() {
    return (
        <>
            <div className="container1">
                <header className="claude-monet">
                    <div className="search">
                        <h1>Encuentra tu evento favorito</h1>
                        <input type="text" placeholder="Busca tu evento" className="search-input" />
                    </div>
                </header>

                <div className="popular">
                    <h2 className="popular2" >Eventos populares</h2>
                </div>
            </div>
        </>
    );
};