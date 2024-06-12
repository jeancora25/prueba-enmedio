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
            <div className="container mt-3 pt-5 w-25">
                    <h1 className="text-center">{data.name}</h1>
                    <div className="card">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">Habilidades:</h3>
                        {data?.abilities.map((item) => (
                        <li className="list-group-item">
                            {item.ability.name}
                        </li>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
