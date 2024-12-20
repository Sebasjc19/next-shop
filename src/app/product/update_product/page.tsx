"use client"

import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Boton_agregar_imagen from '@/components/botones/boton-agregar-imagen';
import Carrusel_producto_publicacion from '@/components/imagenes/carrusel-producto-publicar';
import ContenedorCarruselYBoton from '@/components/botones/carrusel-y-boton.';
import categorias from '@/data/categories';

export default function Update_product() {

    categorias

    return (
        <div className="container text-start">

            <div className="row align-items-start">
                <p className="text-center fs-1 fw-bold">Actualizar producto</p>
                <div className="col">

                    <div className="row">
                        <ContenedorCarruselYBoton />
                    </div>
                </div>

                <div className="col">

                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nombre del producto</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Cambia el nombre de tu producto</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción del producto</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <select className="form-select" aria-label="Default select example">
                            <option value="" disabled>
                                Cambia de categoría
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
                                <button type="button" className="btn btn-primary">Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
