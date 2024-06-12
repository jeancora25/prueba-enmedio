import React from 'react';
import { useFetch } from '../hooks/useFetch';

function PokemonDetails({ id }) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const { data, loading, error } = useFetch(url);
    console.log(url)

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error loading details</h2>;

    return (
        <div>
            <h1>Detalles del Pokémon</h1>
             <div className="card">
            <div className="card-body">
                <h3 className="card-title">{data.name}</h3>
                
            </div>
        </div>
        </div>
    );
}

export default PokemonDetails;
