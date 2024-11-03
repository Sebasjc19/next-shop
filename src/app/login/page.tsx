"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import Link from "next/link";


export default function Login() {

    // Definimos los estados para email y password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(event: FormEvent<HTMLFormElement>): void {
        console.log(email+" xD "+password)
    }


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
                    <h2 className="text-center mb-4 font-weight-bold">Inicio de sesión</h2>
                    <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center mb-3">
                        <img src="/icons/google-icon.png" alt="Google" className="me-2" style={{ width: 20, height: 20 }} />
                        Ingresar con Google
                    </button>
                    <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
                        <span className="bg-white px-3 position-absolute" style={{ zIndex: 1 }}>o</span>
                        <hr className="w-100 border-top border-secondary" />
                    </div>
                    <form onSubmit={handleLogin}>
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
                                placeholder="***************"
                                className="form-control bg-light"
                                required
                            />
                        </div>
                        <div className="text-end mb-3">
                            <Link href="/login/forgot" passHref>¿Olvidaste tu contraseña?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                    </form>
                    <p className="text-center mt-3">
                        ¿No tienes una cuenta?
                        <Link href="/register"><b className="text-primary mx-1">Regístrate</b></Link> 
                    </p>
                </div>
            </div>
        </div>

    );
}