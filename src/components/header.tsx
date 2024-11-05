"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {


    // Estado para controlar el valor seleccionado
    const [categoria, setCategoria] = useState("");

    function logout(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <header className="py-3 mb-3 border-bottom">
            <div className="container-fluid d-flex align-items-center justify-content-between">


                <div className="round">
                    <Link href="/" passHref>
                    <Image
                        src="/next-shop.jpeg"
                        width={30}
                        height={30}
                        alt="Icono de next-shop"
                    />
                    </Link>
                    
                                       
                </div>
                

                <div className="d-flex align-items-center justify-content-center ">
                    <form className="me-2" role="search">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Buscar un producto..."
                            aria-label="Search"
                            style={{ width: '500px' }}
                        />
                    </form>
                </div>

                <div className="flex-shrink-0 dropdown">
                    <div className="d-flex">
                        {!false ? (
                            <>
                                <Link href="/login" passHref><button className="btn btn-primary me-2 ">Iniciar sesión</button></Link>
                                <Link href="/register" passHref><button className="btn btn-primary me-2 ">Registrarse</button></Link>
                            </>
                        ) : (

                            <>
                                <a
                                    href="#"
                                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://github.com/mdo.png" // Asegúrate de usar la imagen del usuario
                                        alt="Foto de perfil"
                                        width={32}
                                        height={32}
                                        className="rounded-circle"
                                    />
                                </a>
                                <ul className="dropdown-menu text-small shadow">
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={logout}>
                                            Cerrar sesión
                                        </a>
                                    </li>
                                </ul>
                            </>

                        )}



                        <ul className="dropdown-menu text-small shadow">
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Cerrar sesión
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}