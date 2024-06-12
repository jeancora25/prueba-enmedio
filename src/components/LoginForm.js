import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggedUser.email && input.password === loggedUser.password)
            {
                localStorage.setItem("loggedin", true);
                navigate("/home")
            }
        else{
            alert("email o contraseña incorrecta")
        }
    };

    return <div>
        <div className="container mt-3">
        <h1> Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input 
                name="email" 
                value={input.email}
                onChange={(e) => 
                    setInput({...input,
                    [e.target.name]: e.target.value,
                })
            }
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com"/>
            </div>
            <label for="inputPassword5" className="form-label">Password</label>
                <input name="password" 
                value={input.password}
                onChange={(e) => 
                    setInput({...input,
                    [e.target.name]: e.target.value,
                })
            } 
                type="password" 
                id="inputPassword5" 
                className="form-control" 
                aria-describedby="passwordHelpBlock"/>
                <button type="submit" className="btn btn-primary mt-3 mb-3 mr-2">Login</button>
                <button className="btn btn-primary mt-3 mb-3 mr-5"><Link className="nav-link" to="/register">Registrarse</Link></button>
        </form>
    </div>
</div>
};

export default LoginForm;
