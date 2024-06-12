import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './services/ProtectedRoutes';
import './App.css';

function App() {    
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path='/*' element={<ProtectedRoutes />} >
                <Route path="home" element={<Home />} />
                <Route path="pokemon-list" element={<PokemonListPage />} />
                <Route path="pokemon-details/:id" element={<PokemonDetailsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
