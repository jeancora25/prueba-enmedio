import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/pokemon-list" element={<PokemonListPage />} />
            <Route path="/pokemon-details/:id" element={<PokemonDetailsPage />} />
        </Routes>
    );
}

export default App;
