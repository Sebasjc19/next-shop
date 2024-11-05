"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carrusel_producto from '@/components/imagenes/carrusel-producto-publicar';
import Carrusel_producto_informacion from '@/components/imagenes/carrusel-producto-info';
import productos from '@/data/products';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function Product_Information() {

    const images = [
        'https://variety.com/wp-content/uploads/2024/09/The-Wild-Robot.jpg?w=1000&h=563&crop=1',
        'https://www.boningtontheatre.co.uk/wp-content/uploads/2024/09/the-wild-robot-668ec3182e643.jpg',
        'https://mundocine.es/wp-content/uploads/2024/09/TheWildRobot_Fotopelicula_31454.jpg'
    ];

    // Aquí va el resto de tu lógica y JSX
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                {/*Columna 1*/}
                <div className="col">
                    <div className="row">
                        <Carrusel_producto_informacion />
                    </div>
                    <div className="row text-start">
                        <p className="fs-5 fw-medium">Calificación: 5</p>
                    </div>
                    <div className="row text-start">
                        <span className="badge text-bg-primary p-3">Vendido por: DREAMWORKS</span>
                    </div>
                </div>
                {/*Columna 2*/}
                <div className="col text-start">
                    <div className="row">
                        <p className="fs-1 fw-bold text-break">Nombre del producto</p>
                    </div>
                    <div className="row">
                        <p className="fs-4">$precio</p>
                    </div>
                    <div className="row">
                        <div className="container mt-4 mb-3">
                            <h5>Selecciona el color</h5>
                            <div className="d-flex flex-wrap">
                                <button className="btn btn-outline-primary me-2">
                                    Amarillo
                                </button>
                                <button className="btn btn-outline-primary me-2">
                                    Azul
                                </button>
                                <button className="btn btn-outline-primary me-2">
                                    Rojo
                                </button>
                                <button className="btn btn-outline-primary me-2">
                                    Blanco
                                </button>
                                <button className="btn btn-outline-primary">
                                    Negro
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Descripción
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Columna 3*/}
                <div className="col">
                    <div className="container mt-4 bg-body-secondary p-4">
                        <h5>Detalles de la compra</h5>
                        <div className="row text-start mt-3">
                            <div className="col">
                                <p className="fs-5">Cantidad:</p>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-secondary" type="button" id="button-minus">-</button>
                                    <input type="number" className="form-control" min="1" value="2" id="quantityInput" readOnly />
                                    <button className="btn btn-outline-secondary" type="button" id="button-plus">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="row text-start mb-3">
                            <p className="fw-bolder fs-5">Subtotal: $60000</p>
                        </div>
                        <div className="row">
                            <Link href="/compra/seleccion_ubicacion" passHref>
                                <button type="button" className="btn btn-primary mb-2">Comprar ahora</button>
                            </Link>
                            <button type="button" className="btn btn-outline-dark">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}