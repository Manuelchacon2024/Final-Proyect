import './App.css';

export function Ticket() {
    return (
        <>
            <div>
                <header className="claude-ticket">
                    <div className="block">
                        <center>
                            <h1>Reserva tu Ticket y Disfruta de tu Evento Favorito</h1>
                            <pre><input type="text" placeholder="Nombre y Apellido" className="ticket-data" /></pre>
                            <pre><input type="text" placeholder="Evento" className="ticket-data" /></pre>
                            <pre><input type="text" placeholder="Hora" className="ticket-data" /></pre>
                        </center>
                    </div>
                </header>
            </div>
        </>
    );
};
