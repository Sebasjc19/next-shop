"use cliente"
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";

export default function ProductoCard({ producto }) {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src="/prueba.jpg" // Reemplaza con la URL de tu imagen
                    alt="Descripción de la imagen"
                />

                <div className="card-body">
                    <Link className="text-dark text-decoration-none" href=""><p className="card-text">{producto.nombre}</p></Link>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-body-secondary">Cantidad: {producto.precio}</small>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}