"use client"

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Boton_agregar_imagen from '@/components/botones/boton-agregar-imagen';
import Carrusel_producto_publicacion from '@/components/imagenes/carrusel-producto-publicar';
import ContenedorCarruselYBoton from '@/components/botones/carrusel-y-boton.';
import categorias from '@/data/categories';
import AlertaExito from '@/components/alertas/exito';

export default function Publish_product() {

    const images = [
        'https://variety.com/wp-content/uploads/2024/09/The-Wild-Robot.jpg?w=1000&h=563&crop=1',
        'https://www.boningtontheatre.co.uk/wp-content/uploads/2024/09/the-wild-robot-668ec3182e643.jpg',
        'https://mundocine.es/wp-content/uploads/2024/09/TheWildRobot_Fotopelicula_31454.jpg'
    ];

    categorias

    return (
        <div className="container text-start">

            <div className="row align-items-start">
                <p className="text-center fs-1 fw-bold">Registrar producto</p>
                <div className="col">
                    <div className="row">
                        <ContenedorCarruselYBoton />
                    </div>
                </div>

                <div className="col">
                    <div className="p-3 bg-info bg-opacity-10 border border-info rounded-end">
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="nombreProducto" className="form-label">Nombre del producto</label>
                                <input type="text" className="form-control" id="nombreProducto" aria-describedby="nombreAyuda" />
                                <div id="nombreAyuda" className="form-text">Dale a tu producto un nombre claro y corto</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="descripcionProducto" className="form-label">Descripción del producto</label>
                                <textarea className="form-control" id="descripcionProducto" rows={5}></textarea>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <select className="form-select" aria-label="Default select example">
                                <option value="" disabled>
                                    Selecciona una categoría
                                </option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col d-flex justify-content-start">
                                    <button type="button" className="btn btn-danger me-2">Cancelar</button>
                                    <button type="button" className="btn btn-success">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
