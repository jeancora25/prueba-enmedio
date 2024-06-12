import React from 'react';
import CustomNavbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <CustomNavbar />
            <div className="container mt-3">
                <h1>¡Mundo Pokemón!</h1>
                <p class="card-text">Selecciona en la barra de navegación la pokedex para ver todos los pokemones.</p>
                    <Link to="/pokemon-list" />
            </div>
        </div>
    );
}

export default Home;
