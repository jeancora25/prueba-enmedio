import React from 'react';
import { Link } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import CustomNavbar from '../components/Navbar';

function PokemonListPage() {
    return (
        <div>
            <CustomNavbar />
            <div className="container mt-3">
            <PokemonList/>
                <Link to="/pokemon-list" />
                <Link to="pokemon-details/:id" />
            </div>
        </div>
    );
}

export default PokemonListPage;
