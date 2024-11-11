"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carrusel_producto from '@/components/imagenes/carrusel-producto-publicar';
import Carrusel_producto_informacion from '@/components/imagenes/carrusel-producto-info';
import productos from '@/data/productos';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProductoDTO } from '@/types/dtos/productos/productodto';

export default function Product_Information({ params }: { params: { id: string } }) {


    const [producto, setProducto] = useState<ProductoDTO | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Se desenrolla la promesa de params para evitar problemas
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        const getParams = async () => {
            const resolved = await params; // Desenvuelves la promesa de params
            setResolvedParams(resolved); // Estableces el id
        };

        getParams();
    }, [params]);

    // Se accede al id sólo después de que haya sido resuelto
    const id = resolvedParams?.id;

    // Obtención de producto a partir del ID
    useEffect(() => {
        if (!id) return;

        const fetchProducto = async () => {
            try {
                const res = await fetch(`/api/productos/${id}`);
                if (!res.ok) {
                    throw new Error("Error al obtener el producto");
                }
                const data: ProductoDTO = await res.json();
                setProducto(data);
            } catch (err) {
                setError("Hubo un problema al cargar el producto.");
            }
        };

        fetchProducto();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!producto) {
        return <p>Cargando producto...</p>;
    }


    //----------------------Estructura del page---------------------------------
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                {/*Columna 1*/}
                <div className="col">
                    <div className="row">
                        {/*Aquí va el carrusel*/}
                        <img src={producto.imagen} className="rounded float-start" alt="..."></img>
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
                        <p className="fs-1 fw-bold text-break">{producto.nombre}</p>
                    </div>
                    <div className="row">
                        <p className="fs-4">${producto.precioVenta}</p>
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
                                        {producto.descripcion}
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