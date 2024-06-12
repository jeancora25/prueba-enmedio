import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/")
    };

    return <div>
            <div className="container mt-3">
            <h1> Crear una cuenta</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput" className="form-label">Nombre</label>
                <input 
                    name="name" 
                    value={input.name} 
                    onChange={(e) => 
                        setInput({...input,
                        [e.target.name]: e.target.value,
                    })
                }   type="text"
                    className="form-control" 
                    id="exampleFormControlInput" 
                    placeholder="Ingrese su nombre de usuario"/>
                </div>
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
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mt-2">Resgitrarse</button>
                    <li className="btn btn-primary mt-2"><Link className="nav-link" to="/">Login</Link></li>
                </div>
            </form>
        </div>
    </div>
};

export default RegisterForm;