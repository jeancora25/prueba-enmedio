import React from 'react';
import CustomNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <CustomNavbar />
            <div className="container mt-3">
                <h1>¡Mundo Pokemón!</h1>
                    <Link to="/pokemon-list" />
                    {/* Definir otras rutas futuras aquí */}
            </div>
        </div>
    );
}

export default Home;
