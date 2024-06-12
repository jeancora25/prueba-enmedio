import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/");
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pokemon</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/pokemon-list">Pokedex</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="d-flex">
                <button 
                onClick={handleLogout}
                class="btn btn-outline-success" type="submit"> Cerrar sesión</button>
            </div>
        </div>
    );
}

export default CustomNavbar;
