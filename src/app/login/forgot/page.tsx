"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";

export default function Forgot() {
    function handleLogin(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");

  

  return (
    <div className="d-flex min-vh-100 align-items-center justify-content-center bg-light">
            <div className="d-flex flex-column flex-md-row w-35 overflow-hidden rounded-lg shadow-lg bg-white">
                {/* Formulario de inicio de sesión */}
                <div className="w-100 p-5">
                    <h2 className="text-center mb-4 font-weight-bold">¿Olvidaste tu contraseña?</h2>
                
                    <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
                        <span className="bg-white px-3 position-absolute" style={{ zIndex: 1 }}>o</span>
                        <hr className="w-100 border-top border-secondary" />
                    </div>
                    <p className="text-center text-secondary mb-4">No te preocupes, ingresa tu correo electronico y la recuperarás enseguida</p>
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
    
                        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
  );
}


