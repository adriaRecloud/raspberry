import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'; // Importa axios si lo has instalado

const App = () => {
    const [ips, setIps] = useState([]); // Estado para almacenar las IPs

    useEffect(() => {
        // Función para obtener las IPs
        const fetchIps = async () => {
            try {
                const response = await axios.get('http://localhost:3000/ips'); // Cambia localhost si es necesario
                setIps(response.data); // Almacena las IPs en el estado
            } catch (error) {
                console.error('Error fetching IPs:', error);
            }
        };

        fetchIps(); // Llama a la función al cargar el componente
    }, []); // El arreglo vacío asegura que se ejecute una sola vez al montar el componente

    return (
        <React.StrictMode> 
            <header>
                <title>Hincator - Amelia</title>
            </header>
            <body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333', padding:'20px' }}>
                <h1 style={{ textAlign: 'center'}}> Welcome to Hincator </h1>
                <p> This is a simple web server running on a Raspberry Pi. </p>
                <ul style={{ listStyle:'none', padding: '0' }}>
                    { 
                        ips.map(ip => 
                            <li key={ip} 
                                style={{ backgroundColor: '#fff', margin: '5px 0', padding: '10px', borderRadius: '4px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}> 
                                {ip} 
                            </li>
                        )
                    }
                </ul>
            </body>
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
