"use client"

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carrusel_producto from '@/components/imagenes/carrusel-producto';
import Boton_agregar_imagen from '@/components/botones/boton-agregar-imagen';

export default function Publish_product() {
    return (
        <div className="container text-start">

            <div className="row align-items-start">
                <p className="text-center fs-1 fw-bold">Registrar producto</p>
                <div className="col">

                    <div className="row">
                        <Carrusel_producto/>
                        <Boton_agregar_imagen/>
                    </div>
                </div>

                <div className="col">

                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nombre del producto</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Dale a tu producto un nombre claro y corto</div>
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
                                Selecciona una categoría
                            </option>
                            <option value="1">Electrónica</option>
                            <option value="2">Aseo</option>
                            <option value="3">Comida</option>
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
    );
}
