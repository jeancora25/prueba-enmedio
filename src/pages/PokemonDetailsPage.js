import React from 'react';
import PokemonDetails from '../components/PokemonDetails';
import { useParams } from 'react-router-dom';
import CustomNavbar from '../components/Navbar';

function PokemonDetailsPage() {
    const { id } = useParams(); 

    return (
        <div>
            <CustomNavbar />
            <div className="container mt-3">
                <h1>Pokemon Details</h1>
                <PokemonDetails id={id} />
            </div>
        </div>
    );
}

export default PokemonDetailsPage;
