"use client"
import { FormEvent, useState } from "react";

export default function Home() {

    function handleLogin(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    const [primerNombre, setPrimerNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetirpassword, setRepetirPassword] = useState("");

    return (
        <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light">
            <div className="d-flex flex-column flex-md-row w-75 overflow-hidden rounded-lg shadow-lg bg-white">
                {/* Imagen de lado izquierdo */}
                <div className="d-none d-md-block w-100">
                    <img
                        src="/login/inicio-login.webp"
                        alt="Imagen de compras en línea"
                        className="img-fluid w-100 h-100 object-cover"
                    />
                </div>
                {/* Formulario de inicio de sesión */}
                <div className="w-100 p-5">
                    <h2 className="text-center mb-4 font-weight-bold">Registro</h2>
                    <form onSubmit={handleLogin}>
                        <div className="d-flex flex-column flex-md-row justify-content-center mb-3">
                            <div className="flex-grow-1 px-1 ">
                                <input
                                    type="text"
                                    value={primerNombre}
                                    onChange={(e) => setPrimerNombre(e.target.value)}
                                    placeholder="Ingresa tu nombre (Ej: Pepe)"
                                    className="form-control bg-light"
                                    required
                                />
                            </div>
                            <div className="flex-grow-1 px-1">
                                <input
                                    type="text"
                                    value={primerNombre}
                                    onChange={(e) => setPrimerNombre(e.target.value)}
                                    placeholder="Ingresa tu apellido (Ej: Perez)"
                                    className="form-control bg-light"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="correo@gmail.com"
                                className="form-control bg-light"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                                className="form-control bg-light"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={repetirpassword}
                                onChange={(e) => setRepetirPassword(e.target.value)}
                                placeholder="Repita la contraseña"
                                className="form-control bg-light"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                    </form>
                    <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
                        <span className="bg-white px-3 position-absolute" style={{ zIndex: 1 }}>o</span>
                        <hr className="w-100 border-top border-secondary" />
                    </div>
                    <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center mb-3">
                        <img src="/icons/google-icon.png" alt="Google" className="me-2" style={{ width: 20, height: 20 }} />
                        Ingresar con Google
                    </button>
                    
                </div>
                
            </div>
        </div>
    );
}